import { Download, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const ToyCard = ({ toy }) => {
  const { toyName, pictureURL, rating, price, toyId, availableQuantity } = toy;
  return (
    <Link
      to={`/toy/${toyId}`}
      className="card bg-white border border-[#FDE6C8]  hover:scale-105 transition ease-in-out shadow-lg hover:shadow-xl p-4"
    >
      {
        <figure className="h-70">
          <img
            className=" w-90 overflow-hidden object-cover rounded-lg "
            src={pictureURL}
            alt="toy-image"
          />
        </figure>
      }

      <div className="card-body space-y-2">
        <h2 className="card-title font-bold">{toyName}</h2>

        <div className="card-actions justify-between items-center">
          <span className=" font-medium">
            <h3>Available pieces</h3>
            <span>({availableQuantity})</span>
          </span>
          <button className="btn bg-[#FFF0E1] text-[#FF8811] font-medium">
            <img src={"/icon-ratings.png"} className="w-4" alt="" />
            {rating}
          </button>
        </div>

        <div className="divider my-1"></div>

        <div className="flex justify-between items-center mt-3">
          <div>
            <p className="text-gray-500 font-medium">price</p>
            <p className="text-xl font-bold text-gray-900">${price}</p>
          </div>

          <button className="btn btn-md  bg-amber-500 hover:bg-amber-600 text-white ">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ToyCard;
