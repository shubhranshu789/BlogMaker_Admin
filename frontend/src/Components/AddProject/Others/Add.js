import React from "react";
import Navbar from "../../Home/Navbar";
// import './CSS/AddEconomy.css'
import "../CSS/AddEconomy.css";

import { useState, Link, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import addpic from "../../Images/photo.JPG";

function Add() {

    const loadFile = (event) => {
        var output = document.getElementById("output");
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
          URL.revokeObjectURL(output.src); // free memory
        };
      };
    
      const navigate = useNavigate();
    
      const notifyA = (msg) => toast.error(msg);
      const notifyB = (msg) => toast.success(msg);
    
      const [Desc, setDesc] = useState("");
      const [Title, setTitle] = useState("");
      const [Link, setLink] = useState("");
      const [pic, setPic] = useState("");
      const [About, setAbout] = useState("");
    
      const [url, setUrl] = useState("");
    
      useEffect(() => {
        if (url) {
          fetch("/createOthers", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
            body: JSON.stringify({
              title: Title,
              desc: Desc,
              pic: url,
              link: Link,
              about: About,
    
              //pic is not setting
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.error) {
                notifyA(data.error);
              } else {
                notifyB(data.message);
                // alert(data.message)
                navigate("/");
              }
              console.log(data);
            })
            .catch((err) => console.log(err));
        }
      }, [url]);
    
      const post = () => {
        if (Title == "") {
          notifyA("Please enter a name of the Blog");
        } else if (Link == "") {
          notifyA("Please enter a Link of the Blog");
        } else if (Desc == "") {
          notifyA("Please enter a Desc of the Blog");
        } else if (pic == "") {
          notifyA("Please select a pic for the Blog");
        } else if (About == "") {
          notifyA("Please add about ");
        }
    
        // console.log(heading,desc,price,pic)
        const data = new FormData();
        data.append("file", pic);
        data.append("upload_preset", "ProtFolioMaker");
        data.append("cloud_name", "shubh1234");
        fetch("https://api.cloudinary.com/v1_1/shubh1234/image/upload", {
          method: "post",
          body: data,
        })
          .then((res) => res.json())
          .then((data) => setUrl(data.url))
          .catch((err) => console.log(err));
      };

  return (
    <div>
      <Navbar />

      <h3 className="productInfo-heading">Add a New Others Blog</h3>

      <div className="appProduct">
        <div className="file-Image">
          <img id="output" className="preview" src={addpic} />
          <input
            type="file"
            accept="image/*"
            className="file"
            onChange={(event) => {
              loadFile(event);
              setPic(event.target.files[0]);
            }}
          />
        </div>

        <div className="productInfo">
          <div className="ap-input-container">
            <label htmlFor="">Blog Name</label>
            <input
              type="text"
              className=""
              placeholder="Title"
              value={Title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="ap-input-container">
            <label htmlFor="">Blog Link</label>
            <input
              type="text"
              className=""
              placeholder="Link"
              value={Link}
              onChange={(e) => {
                setLink(e.target.value);
              }}
            />
          </div>
          <div className="ap-input-container">
            <label htmlFor="">Blog About</label>
            <input
              type="text"
              className=""
              placeholder="About"
              value={About}
              onChange={(e) => {
                setAbout(e.target.value);
              }}
            />
          </div>

          <div className="ap-input-container">
            <label htmlFor="">Blog Description</label>
            {/* <textarea name="" id=""  placeholder='Description'  onChange={(e) => { setDesc(e.target.value) }}> */}
            <textarea
              name=""
              id=""
              placeholder="Description"
              value={Desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="ap-button adt-buttons">
            <button
              onClick={() => {
                post();
              }}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add