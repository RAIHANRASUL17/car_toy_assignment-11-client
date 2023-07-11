import React from "react";
import { Link } from "react-router-dom";

const Category = ({ car }) => {
  //   console.log(car);
  const { img, title, price, rating, _id, subcategory } = car;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Please add url" className="rounded-xl h-52 w-72" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl">$ {price}</p>

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
          <Link to={`/viewDetail/${_id}`}>
            <button className="btn bg bg-orange-500">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
