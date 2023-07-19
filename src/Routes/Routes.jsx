import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import ViewDetail from "../Pages/ViewDetail/ViewDetail";
import AddToy from "../Pages/AddToy/AddToy";
import ViewDetailAddToy from "../Pages/DisplayAddToy/ViewDetailAddToy";
import AllToy from "../Pages/AllToy/AllToy";
import MyToy from "../Pages/MyToy/MyToy";
import Blog from "../Pages/Blog/Blog";
import MyToyRowUpdate from "../Pages/MyToy/MyToyRowUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "viewDetail/:Id",
        element: 
          <PrivateRoute>
            <ViewDetail></ViewDetail>
          </PrivateRoute>,
          loader: ({params})=>fetch(`https://car-toy-assignment-11-server.vercel.app/${params.Id}`)
      },
      {
        path: "addToy",
        element: <PrivateRoute>
          <AddToy></AddToy>
        </PrivateRoute>
      },
      {
        path: "viewDetailAddToy/:Id",
        element: <ViewDetailAddToy></ViewDetailAddToy>,
        loader: ({params})=>fetch(`https://car-toy-assignment-11-server.vercel.app/${params.Id}`)
      },
      {
        path: "allToy",
        element: <PrivateRoute><AllToy></AllToy></PrivateRoute>
      },
      {
        path: "myToy",
        element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
      },{
        path: "myToyRowUpdate/:Id",
        element: <PrivateRoute><MyToyRowUpdate></MyToyRowUpdate></PrivateRoute>
      }
    ],
  },
]);

export default router;
