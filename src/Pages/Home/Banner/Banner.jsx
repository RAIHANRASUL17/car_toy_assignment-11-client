import React, { useContext } from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/gallery/6.jpg";
import img3 from "../../../assets/images/gallery/4.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/gallery/1.jpg";
import img6 from "../../../assets/images/gallery/2.jpg";
import img7 from "../../../assets/images/gallery/7.jpg";
import img8 from "../../../assets/images/gallery/8.jpg";
import img9 from "../../../assets/images/gallery/9.jpg";
import img10 from "../../../assets/images/gallery/12.jpg";
import img11 from "../../../assets/images/gallery/6.jpg";

import { AuthContext } from "../../../Providers/AuthProvider";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <progress
        className="progress progress-info w-56"
        value="70"
        max="100"
      ></progress>
    );
  }
  return (
    <div>
      <Carousel>
        <div>
          <img src={img1}/>
          <div className="absolute flex items-end h-[750px] left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7  px-12">
              <h2 className="text-5xl font-bold">
                Your Choice Our Priority!!!
              </h2>
              <p>
                A toy is an object that's made for a child to play with. Your
                favorite childhood toy might have been a dollhouse, a stuffed
                animal, or a set of blocks. Some toys are specifically designed
                for play, like a small wooden train set or a baby's shape
                sorter.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={img2}/>
          <div className="absolute flex items-end h-[750px] left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7  px-12">
              <h2 className="text-5xl font-bold">
                Your Choice Our Priority!!!
              </h2>
              <p>
                A toy is an object that's made for a child to play with. Your
                favorite childhood toy might have been a dollhouse, a stuffed
                animal, or a set of blocks. Some toys are specifically designed
                for play, like a small wooden train set or a baby's shape
                sorter.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={img3} />
          <div className="absolute flex items-end h-[750px] left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7  px-12">
              <h2 className="text-5xl font-bold">
                Your Choice Our Priority!!!
              </h2>
              <p>
                A toy is an object that's made for a child to play with. Your
                favorite childhood toy might have been a dollhouse, a stuffed
                animal, or a set of blocks. Some toys are specifically designed
                for play, like a small wooden train set or a baby's shape
                sorter.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={img4} />
          <div className="absolute flex items-end h-[750px] left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7  px-12">
              <h2 className="text-5xl font-bold">
                Your Choice Our Priority!!!
              </h2>
              <p>
                A toy is an object that's made for a child to play with. Your
                favorite childhood toy might have been a dollhouse, a stuffed
                animal, or a set of blocks. Some toys are specifically designed
                for play, like a small wooden train set or a baby's shape
                sorter.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={img5} />
          <div className="absolute flex items-end h-[750px] left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7  px-12">
              <h2 className="text-5xl font-bold">
                Your Choice Our Priority!!!
              </h2>
              <p>
                A toy is an object that's made for a child to play with. Your
                favorite childhood toy might have been a dollhouse, a stuffed
                animal, or a set of blocks. Some toys are specifically designed
                for play, like a small wooden train set or a baby's shape
                sorter.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={img6} />
          <div className="absolute flex items-end h-[750px] left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7  px-12">
              <h2 className="text-5xl font-bold">
                Your Choice Our Priority!!!
              </h2>
              <p>
                A toy is an object that's made for a child to play with. Your
                favorite childhood toy might have been a dollhouse, a stuffed
                animal, or a set of blocks. Some toys are specifically designed
                for play, like a small wooden train set or a baby's shape
                sorter.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={img7} />
          <div className="absolute flex items-end h-[750px] left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7  px-12">
              <h2 className="text-5xl font-bold">
                Your Choice Our Priority!!!
              </h2>
              <p>
                A toy is an object that's made for a child to play with. Your
                favorite childhood toy might have been a dollhouse, a stuffed
                animal, or a set of blocks. Some toys are specifically designed
                for play, like a small wooden train set or a baby's shape
                sorter.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={img8} />
          <div className="absolute flex items-end h-[750px] left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7  px-12">
              <h2 className="text-5xl font-bold">
                Your Choice Our Priority!!!
              </h2>
              <p>
                A toy is an object that's made for a child to play with. Your
                favorite childhood toy might have been a dollhouse, a stuffed
                animal, or a set of blocks. Some toys are specifically designed
                for play, like a small wooden train set or a baby's shape
                sorter.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={img9} />
          <div className="absolute flex items-end h-[750px] left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7  px-12">
              <h2 className="text-5xl font-bold">
                Your Choice Our Priority!!!
              </h2>
              <p>
                A toy is an object that's made for a child to play with. Your
                favorite childhood toy might have been a dollhouse, a stuffed
                animal, or a set of blocks. Some toys are specifically designed
                for play, like a small wooden train set or a baby's shape
                sorter.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={img10} />
          <div className="absolute flex items-end h-[750px] left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7  px-12">
              <h2 className="text-5xl font-bold">
                Your Choice Our Priority!!!
              </h2>
              <p>
                A toy is an object that's made for a child to play with. Your
                favorite childhood toy might have been a dollhouse, a stuffed
                animal, or a set of blocks. Some toys are specifically designed
                for play, like a small wooden train set or a baby's shape
                sorter.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={img11} />
          <div className="absolute flex items-end h-[750px] left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7  px-12">
              <h2 className="text-5xl font-bold">
                Your Choice Our Priority!!!
              </h2>
              <p>
                A toy is an object that's made for a child to play with. Your
                favorite childhood toy might have been a dollhouse, a stuffed
                animal, or a set of blocks. Some toys are specifically designed
                for play, like a small wooden train set or a baby's shape
                sorter.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
