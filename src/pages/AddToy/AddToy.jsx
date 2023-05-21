import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import { AuthContext } from "../../contexts/AuthProvider";
import swal from "sweetalert";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setselectedCategory] = useState(null);
  const [formErrorMessage, setFormErrorMessage] = useState("");

  const animatedComponents = makeAnimated();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.subCategory = selectedCategory;
    data.addedBy = user?.email;

    fetch(`https://b7a11-toy-marketplace-server-side-skmajumder.vercel.app/add-toy`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result?.insertedId) {
          setFormErrorMessage("");
          swal(
            "Insert Successfully!",
            `${data.name} Information Save Successfully`,
            "success"
          );
          reset();
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        setFormErrorMessage(errorMessage);
      });
  };

  useEffect(() => {
    fetch("https://b7a11-toy-marketplace-server-side-skmajumder.vercel.app/categories")
      .then((response) => response.json())
      .then((result) => {
        setCategories(result);
      });
  }, [user?.email]);

  return (
    <>
      <section className="section-add-toy">
        <div className="container px-10">
          <div className="flex flex-col items-center justify-center min-h-screen my-10">
            <div className="max-w-xl w-full px-6 py-8 bg-gray-100 shadow-md rounded-md">
              <h2 className="text-3xl font-semibold text-center">Add Toy</h2>
              {formErrorMessage && (
                <p className="text-red-600 text-center font-semibold mt-3">
                  {formErrorMessage}
                </p>
              )}
              <form
                className="mt-8 space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label htmlFor="pictureUrl" className="block font-medium">
                    Picture URL of the toy
                  </label>
                  <input
                    id="pictureUrl"
                    {...register("pictureUrl", { required: true })}
                    type="text"
                    autoComplete="off"
                    className="mt-1 block w-full p-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  {errors.pictureUrl && (
                    <p className="text-red-500 mt-1">Picture URL is required</p>
                  )}
                </div>
                <div>
                  <label htmlFor="name" className="block font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    {...register("name", { required: true })}
                    type="text"
                    autoComplete="off"
                    className="mt-1 block w-full p-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  {errors.name && (
                    <p className="text-red-500 mt-1">Name is required</p>
                  )}
                </div>
                <div>
                  <label htmlFor="sellerName" className="block font-medium">
                    Seller Name
                  </label>
                  <input
                    id="sellerName"
                    {...register("sellerName", { required: true })}
                    type="text"
                    autoComplete="off"
                    value={user?.displayName}
                    readOnly
                    className="mt-1 block w-full p-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  {errors.sellerName && (
                    <p className="text-red-500 mt-1">Seller Name is required</p>
                  )}
                </div>
                <div>
                  <label htmlFor="sellerEmail" className="block font-medium">
                    Seller Email
                  </label>
                  <input
                    id="sellerEmail"
                    {...register("sellerEmail", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    type="email"
                    value={user?.email}
                    readOnly
                    autoComplete="off"
                    className="mt-1 block w-full p-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  {errors.sellerEmail && (
                    <p className="text-red-500 mt-1">
                      Please enter a valid email
                    </p>
                  )}
                </div>
                {categories && (
                  <div>
                    <label htmlFor="subCategory" className="block font-medium">
                      Sub-category
                    </label>
                    <CreatableSelect
                      id="subCategory"
                      className="mt-1"
                      components={animatedComponents}
                      defaultValue={selectedCategory}
                      onChange={setselectedCategory}
                      options={categories}
                      isMulti
                    />
                  </div>
                )}
                <div>
                  <label htmlFor="price" className="block font-medium">
                    Price
                  </label>
                  <input
                    id="price"
                    {...register("price", {
                      required: true,
                      pattern: /^\d+(\.\d{1,2})?$/,
                    })}
                    type="text"
                    autoComplete="off"
                    className="mt-1 block w-full p-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  {errors.price && (
                    <p className="text-red-500 mt-1">
                      Please enter a valid price
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="rating" className="block font-medium">
                    Rating
                  </label>
                  <input
                    id="rating"
                    {...register("rating", { required: true, min: 0, max: 5 })}
                    type="number"
                    autoComplete="off"
                    step="any"
                    className="mt-1 block w-full p-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  {errors.rating && (
                    <p className="text-red-500 mt-1">
                      Rating must be between 0 and 5
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="availableQuantity"
                    className="block font-medium"
                  >
                    Available Quantity
                  </label>
                  <input
                    id="availableQuantity"
                    {...register("availableQuantity", {
                      required: true,
                      min: 0,
                    })}
                    type="number"
                    autoComplete="off"
                    className="mt-1 block w-full p-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  {errors.availableQuantity && (
                    <p className="text-red-500 mt-1">
                      Quantity must be a positive number
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="description" className="block font-medium">
                    Detail Description
                  </label>
                  <textarea
                    id="description"
                    {...register("description")}
                    autoComplete="off"
                    rows={4}
                    className="mt-1 block w-full p-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="px-4 py-2 mt-4 font-medium text-white bg-indigo-500 rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddToy;
