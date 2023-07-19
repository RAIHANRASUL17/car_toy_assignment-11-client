import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useTitleSet from "../../hooks/useTitleSet";
import { Link } from "react-router-dom";

const MyToyRow = ({ toy, handleDelete,}) => {
  // routing coming from hook js
  useTitleSet("update");

  const { user, loading } = useContext(AuthContext);
  // console.log(toy);

  const { photo, name, rating, sellerName, quantity, price, _id } = toy || {};
  
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl mt-12">
        <figure className="lg:w-1/2">
          <img src={photo} alt="Album" className="rounded-xl h-52 w-72" />
        </figure>
        <div className="card-body  mx-auto">
          <h2 className="card-title">{name}</h2>
          <p>Price= $ {price}</p>
          <p>Quantity= {quantity}</p>
          <p>Rating= {rating}</p>
          <div className="card-actions">
            <>
            {/*update part  */}
            <Link to={`/myToyRowUpdate/${_id}`} className="btn btn-success">Update</Link>
              
            </>

            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-warning bg-orange-500 text-white ml-6"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyToyRow;
