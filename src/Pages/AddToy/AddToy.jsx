import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";
import Swal from "sweetalert2";
import useTitleSet from "../../hooks/useTitleSet";

const AddToy = () => {
  // routing coming from hook js
  useTitleSet("AddToy");
  
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const email = form.email.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    // to send data in db have to make object
    const objectMaking = {
      photo,
      name,
      sellerName,
      sellerName,
      email,
      subcategory,
      price,
      rating,
      quantity,
      description,
    };
    console.log(objectMaking);
    fetch("https://assignment-server-raihanrasul17.vercel.app/postToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(objectMaking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          // alert('Your Post is Successfully Done!!!')
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Good Job! Added Successfully Done!!!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        form.reset();
      });
  };
  return (
    <>
      <NavBar></NavBar>
      <div>
        <form onSubmit={handleAddToy}>
          <div className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  name="photo"
                  type="url"
                  placeholder="Put Photo Url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name Please"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Name</span>
                </label>
                <input
                  name="sellerName"
                  type="text"
                  placeholder="Seller Name Please"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              {/*  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subcategory</span>
                </label>
                <select
                  name="subcategory"
                  className="select select-bordered w-full"
                >
                  <option disabled selected>
                    Subcategory
                  </option>
                  <option>hatchback</option>
                  <option>convertible</option>
                  <option>sports</option>
                </select>
              </div>
              {/*  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  name="price"
                  type="number"
                  placeholder="Price in Dollar"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  name="rating"
                  type="text"
                  placeholder="Put Rating"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  name="quantity"
                  type="number"
                  placeholder="Quantity"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  name="description"
                  type="text"
                  placeholder="Description"
                  className="input input-bordered h-32"
                  required
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="POST TOY"
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
        <Link to="/" className="text-white btn btn-active">
          back to home
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AddToy;
