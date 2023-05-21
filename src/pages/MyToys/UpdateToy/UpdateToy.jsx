import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { AuthContext } from "../../../contexts/AuthProvider";
import PageTitle from "../../../components/PageTitle/PageTitle";

const UpdateToy = () => {
  const { user } = useContext(AuthContext);
  const { id: toyId } = useParams();
  const [toyDetails, setToyDetails] = useState([]);
  const [formErrorMessage, setFormErrorMessage] = useState("");

  useEffect(() => {
    fetch(`https://b7a11-toy-marketplace-server-side-skmajumder.vercel.app/toy/${toyId}`)
      .then((response) => response.json())
      .then((data) => {
        setToyDetails(data);
      });
  }, [toyId, formErrorMessage]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    let defaultValues = {};
    defaultValues.price = toyDetails?.price;
    defaultValues.availableQuantity = toyDetails?.availableQuantity;
    defaultValues.description = toyDetails?.description;
    reset({ ...defaultValues });
  }, [toyDetails]);

  const handleUpdateToyInfo = (data) => {
    data.updateBy = user?.email;
    fetch(`https://b7a11-toy-marketplace-server-side-skmajumder.vercel.app/update-toy/${data.toyID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setFormErrorMessage("");
          swal(
            "Update Successfully!",
            `${toyDetails.name} Information Update Successfully`,
            "success"
          );
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        setFormErrorMessage(errorMessage);
      });
  };

  return (
    <>
      <PageTitle pageTitle={`Update Toy - ${toyDetails?.name}`} />
      <section className="section-update-toy">
        <div className="container px-10">
          <div className="flex flex-col items-center justify-center min-h-screen my-10">
            <div className="max-w-xl w-full px-6 py-8 bg-gray-100 shadow-md rounded-md">
              <h2 className="text-3xl font-semibold text-center mb-2">
                Update
              </h2>
              <p className="text-center">{toyDetails?.name}</p>
              <form
                className="mt-8 space-y-6"
                onSubmit={handleSubmit(handleUpdateToyInfo)}
              >
                <div>
                  <label htmlFor="name" className="font-medium hidden">
                    ID
                  </label>
                  <input
                    id="toyID"
                    {...register("toyID", { required: true })}
                    type="text"
                    autoComplete="off"
                    value={toyDetails?._id}
                    readOnly
                    className="mt-1 w-full p-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 hidden"
                  />
                  {errors.toyID && (
                    <p className="text-red-500 mt-1">toyID is required</p>
                  )}
                </div>
                <div>
                  <label htmlFor="price" className="block font-medium">
                    Price
                  </label>
                  <input
                    id="price"
                    {...register("price", { required: true })}
                    type="number"
                    autoComplete="off"
                    className="mt-1 block w-full p-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  {errors.price && (
                    <p className="text-red-500 mt-1">price is required</p>
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
                    {...register("availableQuantity", { required: true })}
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
                    {...register("description", { required: true })}
                    autoComplete="off"
                    className="mt-1 block w-full p-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    rows={4}
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

export default UpdateToy;
