import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  console.log(sortOrder);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `http://localhost:3000/my-toys?email=${user?.email}&sort=${sortOrder}`
    )
      .then((response) => response.json())
      .then((data) => setMyToys(data));
  }, [user?.email, sortOrder]);

  const handleRedirectUpdate = (toyID) => {
    navigate(`/my-toys/${toyID}`);
  };

  const handleDeleteToy = (toyID, toyName) => {
    Swal.fire({
      title: `Want to delete ${toyName}`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/delete-toy/${toyID}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                `${toyName} has been deleted Successfully.`,
                "success"
              );
              const remaining = myToys.filter((toy) => toy._id !== toyID);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  return (
    <>
      <div className="section-my-toys">
        <div className="container px-10 my-16">
          <div className="flex flex-col">
            <div className="my-4">
              <button
                onClick={() => setSortOrder("asc")}
                className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
              >
                Sort Ascending (Price)
              </button>
              <button
                onClick={() => setSortOrder("desc")}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Sort Descending (Price)
              </button>
              <p className="inline ml-4">By Defult it sort by Date</p>
            </div>
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Picture
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Toy Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Seller Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Seller Email
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Sub-category
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Rating
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Available Quantity
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {myToys.map((toy) => (
                        <tr key={toy?._id}>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <img
                              src={toy?.pictureUrl}
                              alt={toy?.name}
                              className="h-12 w-12 rounded-full"
                            />
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {toy?.name}
                            </div>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {toy?.sellerName}
                            </div>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {toy?.sellerEmail}
                            </div>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {toy?.subCategory.map((category, index) => (
                                <>
                                  <span key={index} className="toy-category">
                                    {category.label}
                                  </span>
                                  <br />
                                </>
                              ))}
                            </div>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {toy?.price}
                            </div>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {toy?.rating}
                            </div>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {toy?.availableQuantity}
                            </div>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                              onClick={() => handleRedirectUpdate(toy?._id)}
                              className="text-indigo-600 hover:text-indigo-900 mr-2"
                            >
                              Update
                            </button>
                            <br />
                            <button
                              onClick={() =>
                                handleDeleteToy(toy?._id, toy?.name)
                              }
                              className="text-red-600 hover:text-red-900"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyToys;
