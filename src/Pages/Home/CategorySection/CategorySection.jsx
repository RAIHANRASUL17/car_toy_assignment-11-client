import React, { useContext, useEffect, useState } from "react";
import Category from "./Category";
import DisplayAddToy from "../../DisplayAddToy/DisplayAddToy";
import "./CategorySection.css";
import { AuthContext } from "../../../Providers/AuthProvider";

const CategorySection = () => {
  const [activeTab, setActiveTab] = useState("jjj");
  const { loading } = useContext(AuthContext);

  //   console.log(activeTab)
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch(
      `https://car-toy-assignment-11-server.vercel.app/${activeTab}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setCars(data);
      });
  }, [activeTab]);
  /*___________________________________________________________*/
  // Post api get here(app.get posted api)
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(
      `https://car-toy-assignment-11-server.vercel.app/getPostToys/${activeTab}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setToys(data);
      });
  }, [activeTab]);

  /*___________________________________________________________*/

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

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
    <>
      <div className="text-center my-12">
        <h1 className="text-3xl font-bold text-center bg-gray-300 rounded mb-6">
          Category Section
        </h1>
        <div
          onClick={() => handleTabClick("hatchback")}
          className={` tab  ${
            activeTab == "hatchback" ? "bg-orange-500 text-white" : ""
          }`}
        >
          hatchback
        </div>
        <div
          onClick={() => handleTabClick("convertible")}
          className={` tab   ${
            activeTab == "convertible" ? "bg-orange-500 text-white" : ""
          }`}
        >
          convertible
        </div>
        <div
          onClick={() => handleTabClick("sports")}
          className={` tab ${
            activeTab == "sports" ? "bg-orange-500 text-white" : ""
          }`}
        >
          sports
        </div>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {cars.map((car) => (
            <Category key={car._id} car={car}></Category>
          ))}
        </div>
      </div>
      {/* display GET POST API */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {toys.map((toy) => (
            <DisplayAddToy key={toy._id} toy={toy}></DisplayAddToy>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategorySection;
