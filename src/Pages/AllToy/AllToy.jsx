import React, { useContext, useEffect, useState } from "react";
import AllToyRow from "./AllToyRow";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";
import { AuthContext } from "../../Providers/AuthProvider";
import useTitleSet from "../../hooks/useTitleSet";

const AllToy = () => {
  // routing coming from hook js
  useTitleSet("allToy");

  const [allToys, setAllToys] = useState([]) || {};
  const { loading } = useContext(AuthContext);
  useEffect(() => {
    fetch("https://assignment-server-raihanrasul17.vercel.app/getPostToys")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setAllToys(data);
      });
  }, []);
  /*______________________________________________________________*/
  // searchIndexing
  const [searchTex, setSearchText] = useState(" ");

  const handleSearch = () => {
    fetch(
      `https://assignment-server-raihanrasul17.vercel.app/indexing/${searchTex}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToys(data);
        // e.target.value.reset()
      });
  };
  /*______________________________________________________________*/
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
      <NavBar></NavBar>
      <>
        <div className="text-center mb-6">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="implement name and subcategory"
            className="input input-bordered w-full max-w-xs mr-2"
          />
          <button onClick={handleSearch} className="btn btn-active">
            Search Button
          </button>
        </div>
      </>
      <div className="flex justify-center">
        <table className="table" style={{ width: "98%" }}>
          {/* head */}
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Modal</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {allToys.map((allToy) => (
              <AllToyRow key={allToy._id} allToy={allToy}></AllToyRow>
            ))}

            {/* row 2 */}
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AllToy;
