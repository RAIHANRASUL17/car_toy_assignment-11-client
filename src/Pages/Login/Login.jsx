import React, { useContext, useState } from "react";
import imgLogin from "../../assets/images/login/login&signup.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { FaGithub, FaGithubAlt, FaGoogle } from "react-icons/fa";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";
import useTitleSet from "../../hooks/useTitleSet";

const Login = () => {
  // routing coming from hook js
  useTitleSet("loginPage")
  const { signIn, googleSignIn, githubLogin } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  /*_______________________________________________*/
  //step-a.1:- go exactly your destination to use location with useLocation
  const navigate = useNavigate();
  let location = useLocation();
  console.log("location check from login", location);
  let from = location.state?.from?.pathname || "/";
  /*_______________________________________________*/

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    /*___________________________________________________________________*/
    // password validation
    setError("");
    if (password.length < 6) {
      setError("please add at lest 6 characters in your password");
      return;
    }
    /*___________________________________________________________________*/
    // signIn/Login
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        // step-a.3: for location
        navigate(from, { replace: true });
        // setError
        setError("");
        // setSuccess
        setSuccess("The user has successfully logged in");
        // for clear form
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        // setError
        setError(error.message);
      });
  };
    // googleSignIn
    const handleGoogleLogin = () => {
      googleSignIn(GoogleAuthProvider)
        .then((result) => {
          const loggedUser = result.user;
          console.log("----google", loggedUser);
          navigate(from, { replace: true });
        })
        .then((error) => {
          console.log(error);
        });
    };
    // handleGithubLogin
  const [user, setUser]= useState(null)
  const handleGithubLogin = () => {
    console.log("github login");
    githubLogin(GithubAuthProvider)
    .then((result)=>{
      const loggedUser= result.user;
      console.log('--git', loggedUser)
      navigate(from, { replace: true })
      setUser(loggedUser)
    })
    .then((error)=>{
      console.log(error)
    })
  };
  return (
<>
<NavBar></NavBar>
<div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <p className="mr-24">
            <img src={imgLogin} alt=""/>
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin}>
            <div className="card-body">
              <h1 className="text-3xl font-bold text-center">Login!!!</h1>
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
                  value="Login"
                  className="btn btn-primary"
                />
                <button onClick={handleGoogleLogin} className="btn btn-primary my-3"><FaGoogle className="me-2"></FaGoogle> Login With Google</button>
                <button onClick={handleGithubLogin} className="btn btn-primary mb-3"><FaGithub className="me-2"></FaGithub> Login With Github</button>
                <div>
                  <p className="text-red-500">{error}</p> <br />
                  <p className="text-green-500">{success}</p>
                </div>
              </div>
              <h3>
                New to here? Please{" "}
                <Link to="/signUp" className="text-blue-500">
                  Sign-Up/Resister
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

export default Login;
