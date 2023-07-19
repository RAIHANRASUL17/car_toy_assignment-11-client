import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaArrowLeft, FaBeer } from 'react-icons/fa';
import useTitleSet from '../../hooks/useTitleSet';

const ViewDetailAddToy = () => {
  // routing coming from hook js
  useTitleSet("viewDetails");

    const viewAddToy = useLoaderData()
    console.log(viewAddToy)
    const { user } = useContext(AuthContext)
    const { _id, photo, email, description, quantity, price, sellerName, subcategory, title, rating} =
    viewAddToy;
    return (
        <>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={photo}
              className="lg:w-1/2 h-80 rounded-lg shadow-2xl"
            />
            <div className='w-1/2'>
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
             <div className='flex justify-around'>
             <Link to='/'><button className="btn bg-slate-500 mr-4">
                <FaArrowLeft className='mr-1'></FaArrowLeft>
                Back to Home</button></Link>
              <Link to='/allToy'><button className="btn bg-slate-500">
                <FaArrowLeft className='mr-1'></FaArrowLeft>
                Back to All ToY</button></Link>
             </div>
            </div>
          </div>
        </div>
    
        </>
    );
};

export default ViewDetailAddToy;