import React, { useContext, useState } from "react";
import img from "../assets/images/login/login&signup.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";
import useTitleSet from "../hooks/useTitleSet";

const SignUp = () => {
  // routing coming from hook js
  useTitleSet("signUp");
  
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    /*___________________________________________________________________*/
    // password validation
    setError("");
    if (password.length < 6) {
      setError("please add at lest 6 characters in your password");
      return;
    }
    /*___________________________________________________________________*/
    createUser(email, password)
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    // setError
    setError("");
    setSuccess("The user has successfully logged in");
      form.reset();
    })
    .catch((error) => {
      console.log(error);
    });
  };
  return (
<>
<NavBar></NavBar>
<div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <p className="py-6 mr-24">
            <img src={img} alt="" />
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin}>
            <div className="card-body">
              <h1 className="text-3xl font-bold text-center">Sign Up!!!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  name="photo"
                  type="url"
                  placeholder="photo Url"
                  defaultValue={'https://i.ibb.co/fHHtjZN/Raihan.jpg'}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign-Up"
                  className="btn btn-primary"
                />
              </div>
              <h3>
                Already Have an Account? Please{" "}
                <Link to="/login" className="text-blue-500 font-bold">
                  Login
                </Link>
              </h3>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer></Footer>
</>
  );
};

export default SignUp;
