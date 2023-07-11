import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useTitleSet from "../../hooks/useTitleSet";

const MyToyRow = ({ toy, handleDelete }) => {
  // routing coming from hook js
  useTitleSet("update");
  
  const { user } = useContext(AuthContext);
  // console.log(toy);
  const { photo, name, rating, sellerName, quantity, price, _id } = toy || {};
  // Update
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

    fetch(`https://assignment-server-raihanrasul17.vercel.app/updated/${_id}`, {
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
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl mt-12">
        <figure className="w-1/2">
          <img src={photo} alt="Album" className="rounded-xl h-52 w-72" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price= $ {price}</p>
          <p>Quantity= {quantity}</p>
          <p>Rating= {rating}</p>
          <div className="card-actions">
            <>
              {/* modal start */}
              {/* The button to open modal */}
              <label htmlFor="my-modal-5" className="btn">
                Update
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-5" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box lg:w-1/2  lg:max-w-5xl">
                  <h3 className="font-bold text-lg">Update</h3>
                  <>
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
                              defaultValue={name}
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
                              defaultValue={sellerName}
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
                          <input
                            type="submit"
                            value="POST TOY"
                            className="btn btn-primary"
                          />
                        </div>
                      </div>
                    </form>
                  </>
                  <div className="modal-action">
                    <label htmlFor="my-modal-5" className="btn">
                      close!
                    </label>
                  </div>
                </div>
              </div>
              {/* modal end */}
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
