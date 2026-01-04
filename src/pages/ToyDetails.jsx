import { Link, useParams } from "react-router";
import useToys from "../hook/useToys";
import {  useState } from "react";
import { toast } from "react-toastify";
import AuthProvider from "../context/AuthProvider";

const ToyDetails = () => {
 
  const { toyId } = useParams();
  const { toy, loading } = useToys();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  const handleTryNow = (e) => {
    e.preventDefault();

    toast.success("Toy trial request submitted successfully!");

    setName("");
    setEmail("");
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const singleToy = toy.find((t) => String(t.toyId) === toyId);

  if (!singleToy) {
    return <p className="text-center py-20">Toy not found</p>;
  }

  const { toyName, pictureURL, price, subCategory, rating, description } =
    singleToy;
  const relatedToys = toy.filter(
    (t) => t.subCategory === subCategory && t.toyId !== singleToy.toyId
  );
  return (
    <div className="bg-[#FFFDF8] ">
      <div className="max-w-7xl mx-auto px-5 py-16 ">
        <p className="text-sm text-gray-500 mb-6">
          Home / Toys / {subCategory} / {toyName}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="rounded-xl p-6 shadow-sm bg-white border border-amber-200">
            <img
              src={pictureURL}
              alt={toyName}
              className="w-full h-[400px] object-contain"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-[#3A3A3A]">{toyName}</h1>
            <p className="text-gray-500">Category: {subCategory}</p>
            <p className="text-yellow-500 font-semibold flex gap-1">
              <img className="w-5 h-5" src="../icon-ratings.png" alt="" />{" "}
              {rating}
            </p>

            <p className="text-2xl font-bold text-emerald-600">$ {price}</p>

            <p className="text-gray-700">{description}</p>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-xl bg-[#FFF7E8] border border-amber-200">
          <h2 className="text-xl font-bold mb-4 text-[#3A3A3A]">
            Try This Toy
          </h2>

          <form onSubmit={handleTryNow} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            <button
              type="submit"
              className="btn bg-amber-500 hover:bg-amber-600 text-white w-full"
            >
              Try Now
            </button>
          </form>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-6 text-[#3A3A3A]">
            Related Toys
          </h2>

          {relatedToys.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <p className="text-xl font-medium">No related toys found</p>
              <p className="text-sm mt-2">Explore other categories instead</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
              {relatedToys.map((item) => (
                <div
                  key={item.toyId}
                  className="p-4 bg-white shadow-md border border-amber-200 rounded-xl"
                >
                  {item.pictureURL ? (
                    <img
                      src={item.pictureURL}
                      alt={item.toyName}
                      className="h-40 w-full object-contain"
                    />
                  ) : (
                    <div className="h-40 flex items-center justify-center bg-gray-100 text-gray-500">
                      Related image not available
                    </div>
                  )}

                  <div className="space-y-2">
                    <h3 className="font-semibold">{item.toyName}</h3>
                    <p className="text-sm text-gray-500">${item.price}</p>
                    <Link to={`/toy/${item.toyId}`}>
                      <button className="btn btn-sm  bg-amber-500 hover:bg-amber-600 text-white 0">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="text-center pb-10">
        <Link to='/toy'  className="bg-white hover:scale-105 transition-all duration-300 shadow-md hover:shadow-2xl font-semibold px-6 py-3 rounded-lg border border-[#FDE6C8] text-center">Go Back</Link>
        
      </div>
    </div>
  );
};

export default ToyDetails;
