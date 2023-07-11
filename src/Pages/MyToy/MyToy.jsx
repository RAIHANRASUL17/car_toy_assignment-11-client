import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";
import MyToyRow from "./MyToyRow";
import Swal from "sweetalert2";
import useTitleSet from "../../hooks/useTitleSet";

const MyToy = () => {
  // routing coming from hook js
  useTitleSet("myToy");

  const { user, loading } = useContext(AuthContext);
  const [toyAll, setToyAll] = useState([]);

  useEffect(() => {
    fetch(
      `https://assignment-server-raihanrasul17.vercel.app/toGetEmail/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToyAll(data);
      });
  }, [user]);
  // Delete
  const handleDelete = (Id) => {
    // console.log(Id);
    const proceed = confirm("R U Sure want to delete");

    if (proceed) {
      fetch(
        `https://assignment-server-raihanrasul17.vercel.app/deleted/${Id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Deleted Successful",
              showConfirmButton: false,
              timer: 1500,
            });

            const remaining = toyAll.filter((toy) => toy._id !== Id);
            // setJobs(data)
            setToyAll(remaining);
          }
        });
    }
  };
  
  if(loading){
    return <progress className="progress progress-info w-56" value="70" max="100"></progress>
  };
  
  return (
    <>
      <NavBar></NavBar>
      <div className="pt-6">
      {toyAll.map((toy) => (
        <MyToyRow
          key={toy._id}
          handleDelete={handleDelete}
          toy={toy}
        ></MyToyRow>
      ))}
      </div>
      <Footer></Footer>
    </>
  );
};

export default MyToy;
