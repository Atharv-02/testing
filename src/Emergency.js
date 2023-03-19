import React, { useState } from "react";
import Navbar from "./Navbar";
import "./style.css";
const Emergency = () => {
  const [disease, setDisease] = useState("");
  const [file, setFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  // const changeHandler = (event) => {
  //   setSelectedFile(event.target.files[0]);
  //   setIsFilePicked(true);
  // };
  return (
    <>
      <div className='total-page'>
        <Navbar />
        <div className='emergency-choice'>
          <center>
            <h3>Upload MRI scan tocheck for brain tumor</h3>
            <div class='upload'>
              <form
                id='upload_form'
                enctype='multipart/form-data'
                method='post'
              >
                <input
                  type='file'
                  name='file1'
                  id='file1'
                  onChange={(e) => setFile(e.target.value)}
                />
                <br />

                <br />
              </form>
            </div>
          </center>
          <button className='btn'>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Emergency;
