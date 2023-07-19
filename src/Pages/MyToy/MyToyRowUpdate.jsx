import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const MyToyRowUpdate = () => {
  const { Id } = useParams();
  console.log(Id);

  const { user, loading } = useContext(AuthContext);

  const handleUpdate = (event) => {
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
    console.log(objectMaking)

    fetch(`https://car-toy-assignment-11-server.vercel.app/updated/${Id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(objectMaking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // alert("updated status and title successfully done");
          let timerInterval;
          Swal.fire({
            title: "Update Process!",
            html: "Please Wait <b></b> patiently.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const b = Swal.getHtmlContainer().querySelector("b");
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft();
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log("I was closed by the timer");
            }
          });
        }
        form.reset();
      });
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
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
                //   defaultValue={name}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                name="sellerName"
                type="text"
                //   defaultValue={sellerName}
                placeholder="Seller Name Please"
                className="input input-bordered"
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
                defaultValue={user?.email}
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
            <input type="submit" value="POST TOY" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <div className="flex justify-end">
      <Link to="/myToy"><button className="btn btn-xs">close</button></Link>
      </div>
    </div>
  );
};

export default MyToyRowUpdate;
