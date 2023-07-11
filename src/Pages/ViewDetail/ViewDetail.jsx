import React from "react";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useTitleSet from "../../hooks/useTitleSet";

const ViewDetail = () => {
  // routing coming from hook js
  useTitleSet("viewDetails");
  
  const loadedView = useLoaderData();
  console.log(loadedView);
  const {user} = useContext(AuthContext)
  const { _id, img, sellerEmail, description, quantity, price, sellerName, subcategory, title, rating} =
    loadedView;
    // available quantity,
  return (
    <>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={img}
          className="w-1/2 h-96 rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>

          <p className="py-1 text-2xl font-medium">
            seller name: {sellerName}
          </p>
        
          <p className="text-lg">
            seller email: {user?.email}
          </p>
          <p className="text-lg">
                Subcategory: {subcategory}
              </p>
          <p className="text-lg mb-1 text-orange-500">
           Quantity: {quantity}
          </p>
          <p className="text-lg mb-1 text-orange-500">
           $ {price}
          </p>
          <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>       
        <div className="rating">
          <input
            type="radio"
            name="rating-10"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-10"
            className="mask mask-star-2 bg-orange-400"
          />
          <input type="radio" name="rating-10" className="rating-hidden" />
          <p className="ml-3">{rating}</p>
        </div>
        <p className="py-3">
            {description}
          </p>
          <Link to='/'><button className="btn bg-slate-500">Back to Home</button></Link>
        </div>
      </div>
    </div>

    </>
  );
};

export default ViewDetail;
