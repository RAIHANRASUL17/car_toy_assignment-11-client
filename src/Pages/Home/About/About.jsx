import React from "react";
import shop from "../../../assets/images/about_us/shop.jpg";
import toy from "../../../assets/images/about_us/toy.jpg";
import toy1 from "../../../assets/images/about_us/toy1.jpg"

const About = () => {
  return (
    <div className="container mx-auto">
    <h1 className="text-3xl font-bold text-center bg-gray-300 rounded mt-12">About Us Briefly</h1>
      <div className="hero min-h-screen bg-base-200 mb-5">
        <div className="hero-content flex-col lg:flex-row">

          <div className="lg:w-1/2 relative">
          <img src={shop} className="w-3/4 rounded-lg shadow-2xl" />
          <img src={toy} className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-gray-500 p-2" />
          <img src={toy1} className="w-1/2 rounded-lg shadow-2xl absolute bottom-1/3 left-12 border-8 border-gray-500 p-2" />
          </div>

          <div className="lg:w-1/2 space-y-5 p-4">
            <h3 className="text-3xl text-orange-500 font-bold">About Us</h3>
            <h1 className="text-5xl font-bold">The Most Popular Toys Around the World for Last Minute Gifters!</h1>
            <p className="py-6">
            A toy is an object that's made for a child to play with. Your favorite childhood toy might have been a dollhouse, a stuffed animal, or a set of blocks. Some toys are specifically designed for play, like a small wooden train set or a baby's shape sorter. 
            </p>
            <p>
            The toy should be age-appropriate, interesting, and safe. It is also important that the toy is well-made and will withstand hours of play. Age-appropriate toys are important because they help children learn and develop at the right pace. Toys that are too challenging or too simple can be frustrating for children. 
            </p>
            <button className="btn bg bg-slate-500">Explore Us</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
