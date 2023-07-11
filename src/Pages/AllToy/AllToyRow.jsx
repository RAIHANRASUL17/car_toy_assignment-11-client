import React, { useContext } from "react";
import { FaCar } from 'react-icons/fa';
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const AllToyRow = ({ allToy }) => {
  // console.log(allToy);
  const {user, loading} = useContext(AuthContext)
  const {name, sellerName, quantity, price, _id} = allToy;
  if (loading) {
    return <progress className="progress progress-success w-56" value="70" max="100"></progress>;
  }

  return (
    <>
        <tr>
        <td>
          <label>
            <FaCar></FaCar>
          </label>
        </td>
        <td>
          <div className="flex items-center space-x-3">
          <div className="font-bold">{name}</div>
          </div>
        </td>
        <td>
         {sellerName?sellerName:'none'}
        </td>
        <td>{quantity}</td>
        <td>
            {price}
        </td>
        <td>
          <Link to={`/viewDetailAddToy/${_id}`}><button className="btn  bg-orange-500">view Detail</button></Link>
        </td>
      </tr>
    </>
  );
};

export default AllToyRow;
