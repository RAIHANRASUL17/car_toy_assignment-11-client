import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/icons/logo.svg";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import ActiveLink from "../../../ActiveLink/ActiveLink";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  // navItems
  const navItems = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/allToy">All Toy</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/blog">Blog</ActiveLink>
      </li>
     
      <li>
        {" "}
        {user ? (
          <>
            <ActiveLink to="/addToy">Add Toy</ActiveLink>
            <ActiveLink to="/myToy">My Toy</ActiveLink>

            {user && (
              <>
                <FaUserCircle
                  title={user ? user.email : "Github doesn't display email"}
                  style={{ fontSize: "5rem" }}
                  className="my-auto"
                ></FaUserCircle>

                <img
                  src={user?.photoURL}
                  title={user?.photoURL}
                  alt=""
                  style={{ borderRadius: "90%"}}
                  className="w-16 h-16 my-auto"
                />
              </>
            )}

            <button
              onClick={handleLogOut}
              className="btn btn-ghost ml-2 my-auto"
              title="You are successfully LogIn"
            >
              LogOut
            </button>
          </>
        ) : (
          <ActiveLink to="/login">
            <button className="btn btn-ghost lg:ml-52" title="Please Login !!!">
              Login
            </button>
          </ActiveLink>
        )}
      </li>
    </>
  );
  return (
    <div className="container mx-auto">
      <div className="navbar fixed z-10 max-w-7xl mx-auto bg-slate-950 lg:text-white h-12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" className="my-auto" />
          </Link>
          <h4 className="lg:text-2xl font-extrabold text-white">Supreme Toy</h4>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        {/* ai khanee kisu dork hole div kortay paro (navbar-end)*/}
      </div>
    </div>
  );
};

export default NavBar;
