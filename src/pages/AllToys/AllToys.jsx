import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../contexts/AuthProvider";

const AllToys = () => {
  const { user } = useContext(AuthContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [toys, setToys] = useState([]);

  const navigate = useNavigate();
  const activeRouterLocation = useLocation();

  useEffect(() => {
    fetch("http://localhost:3000/all-toys")
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSingleToyDetailsRedirect = (toyID) => {
    if (!user?.email) {
      swal(
        "Unauthorized access",
        "You have to log in first to view details",
        "warning"
      );
    }
    navigate(`/all-toys/${toyID}`);
  };

  const filteredToys = toys.filter((toy) => {
    return toy.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <section className="section-all-toys">
        <div className="container mx-auto px-10 my-10">
          <div className="my-6">
            <h2 className="text-3xl font-semibold mb-4">All Toys</h2>
            <div className="flex items-center">
              <div className="relative mr-4">
                <input
                  type="text"
                  className="pl-10 pr-4 py-2 border rounded-md w-72 focus:outline-none focus:border-indigo-500"
                  placeholder="Search by Toy Name"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 font-semibold text-gray-700">#</th>
                  <th className="py-3 px-4 font-semibold text-gray-700">
                    Seller Name
                  </th>
                  <th className="py-3 px-4 font-semibold text-gray-700">
                    Toy Name
                  </th>
                  <th className="py-3 px-4 font-semibold text-gray-700">
                    Sub-category
                  </th>
                  <th className="py-3 px-4 font-semibold text-gray-700">
                    Price
                  </th>
                  <th className="py-3 px-4 font-semibold text-gray-700">
                    Available Quantity
                  </th>
                  <th className="py-3 px-4 font-semibold text-gray-700">
                    View Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredToys.map((toy, index) => (
                  <tr key={toy._id}>
                    <td className="py-4 px-4">{index + 1}</td>
                    <td className="py-4 px-4">{toy?.sellerName}</td>
                    <td className="py-4 px-4">{toy?.name}</td>
                    <td className="py-4 px-4">
                      {toy?.subCategory.map((category, index) => (
                        <span key={index} className="toy-category">
                          {category.label}
                        </span>
                      ))}
                    </td>
                    <td className="py-4 px-4">{toy?.price}</td>
                    <td className="py-4 px-4">{toy?.availableQuantity}</td>
                    <td className="py-4 px-4">
                      <button
                        onClick={() => handleSingleToyDetailsRedirect(toy?._id)}
                        className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllToys;
