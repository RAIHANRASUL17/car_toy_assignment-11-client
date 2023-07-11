import React from "react";
import img1 from '../../../assets/images/gallery/1.jpg'
import img2 from '../../../assets/images/gallery/2.jpg'
import img3 from '../../../assets/images/gallery/3.jpg'
import img4 from '../../../assets/images/gallery/4.jpg'
import img5 from '../../../assets/images/gallery/5.jpg'
import img6 from '../../../assets/images/gallery/6.jpg'
import img7 from '../../../assets/images/gallery/7.jpg'
import img8 from '../../../assets/images/gallery/8.jpg'
import img9 from '../../../assets/images/gallery/9.jpg'
import img10 from '../../../assets/images/gallery/10.jpg'
import img11 from '../../../assets/images/gallery/11.jpg'
import img12 from '../../../assets/images/gallery/12.jpg'


const Gallery = () => {
  return (
<>
<h1 className="text-3xl font-bold text-center bg-gray-300 rounded mt-12 flex justify-center">Our GallerY</h1>
<div className="flex justify-center">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-12 justify-center">
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img1} alt="" className="rounded-xl w-52 h-52" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Sport Speed Car</h2>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img2} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Mini Toy Car</h2>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img3} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Taxi Services</h2>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img4} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Private Sport</h2>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img5} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Racing Car Speed</h2>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img6} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Public Bus</h2>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img7} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Simple Private</h2>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img8} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Flying Dou Car</h2>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img10} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Discover Dynamic</h2>
  </div>
</div>
</div>
</div>
</>
  );
};

export default Gallery;
