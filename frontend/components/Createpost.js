import React, { useState } from "react";
import { useContext , useRef} from "react";
import { auth , db} from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import {  setDoc, doc , serverTimestamp} from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";
import NavLink from "../components/NavLink";
import Router from "next/router";

const Createpost=(props) =>{

const messageInputRef=useRef();
const imageInputRef = useRef();

const { currentUser } = useContext(AuthContext);
async function addPost() {
  const enteredMessage = messageInputRef.current.value;
  const enteredImage = imageInputRef.current.value;
  const uid= Math.random();
  const creatorUid = currentUser.uid
  await setDoc(
    doc(db,
      "posts",
      `${uid}`),
    {
       createdBy: currentUser.displayName,
       message: enteredMessage,
       likes: 0,
       comments: null,
       photo: enteredImage,
       video: null,
       createAt: serverTimestamp(),
       id: uid,
       creatorPhoto: currentUser.photoURL,
       creatorUid: creatorUid,
          timestamp: serverTimestamp(),
    }
  )
  Router.reload(window.location.pathname)
   }

   const  [isOpen,setIsOpen]=useState(false)

  const toggleOpen = () => setIsOpen(true);
    const menuClass = `${isOpen ? " show" : ""}`;
    

    return (
      <div className="card w-100 shadow-xss rounded-xxl border-0 ps-4 pt-4 pe-4 pb-3 mb-3">
        <div className="card-body p-0 mt-3 position-relative">
          <figure className="avatar position-absolute ms-2 mt-1 top-5">
            <img
              src={currentUser.photoURL}
              alt="icon"
              className="shadow-sm rounded-circle w30"
            />
          </figure>
          <textarea
            name="message"
            className="h100 bor-0 w-100 rounded-xxl p-2 ps-5 font-xssss text-black-500 fw-500 border-light-md theme-dark-bg"
            cols="30"
            rows="10"
            placeholder="What's on your mind?"
            ref={messageInputRef}
          ></textarea>
          <textarea
            name="photo/video"
            className="h20 bor-0 w-100 rounded-xxl p-2 ps-2 font-xssss text-black-500 fw-500 border-light-md theme-dark-bg"
            cols="30"
            rows="1"
            placeholder="photo/video url?"
            ref={imageInputRef}
          ></textarea>
        </div>
        <div className="card-body d-flex p-0 mt-0">

          <a
            href={`/createEvent/${currentUser.uid}`}
            className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
          >
            <i className="font-md text-warning feather-map-pin me-2"></i>
            <span className="d-none-xs">Event</span>
          </a>
          <div className="ms-auto pointer ">
            <a
              className="font-xsss fw-600 text-blue-600 card-body p-0 d-flex align-items-center"
onClick = { addPost }
            >
              <i className="btn-round-sm font-xs text-primary feather-edit-3 me-3 bg-grey"></i>
              Post
            </a>
          </div>
        </div>
      </div>
    );
  }


export default Createpost;
