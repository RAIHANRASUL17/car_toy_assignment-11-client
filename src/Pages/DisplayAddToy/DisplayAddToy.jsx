import React from "react";
import { Link } from "react-router-dom";

const DisplayAddToy = ({ toy }) => {
  // console.log(toy)
  const { photo, name, price, rating, _id } = toy;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-4">
      <figure className="px-10 pt-10">
        <img src={photo} alt="Shoes" className="rounded-xl h-52 w-72" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-lg">$ {price}</p>
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <p className="ml-2">{rating}</p>
        </div>
        <div className="card-actions">
          <Link to={`/viewDetailAddToy/${_id}`}>
            {" "}
            <button className="btn btn-warning">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DisplayAddToy;
