import React, { Component ,useState} from "react";
import { auth , db} from "../firebase/clientApp";
import {  doc , increment, updateDoc} from "firebase/firestore";
import Router from "next/router";
import moment from "moment";
import Example from "../components/DeleteModal";
import HeartButton from "../components/HeartButton"
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Postview =(props)=> {
  const { currentUser } = useContext(AuthContext);
console.log(currentUser.displayName)

   const [isOpen,setIsOpen]=useState(false) 

  const toggleOpen = () => setIsOpen(!isOpen)


  async function increaseLikes() {


      await updateDoc(doc(db, "posts", `${props.id}`), {
        likes: increment(1),
      });
       Router.reload(window.location.pathname)
     }
  async function decreaseLikes() {


      await updateDoc(doc(db, "posts", `${props.id}`), {
        likes: increment(1),
      });
       Router.reload(window.location.pathname)
     }




    const menuClass = `${isOpen ? " show" : ""}`;

    return (
      <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
        <div className="card-body p-0 d-flex">
          <figure className="avatar me-3">
            <img
              src={props.creatorPhoto}
              alt="avater"
              className="shadow-sm rounded-circle w45"
            />
          </figure>
          <h4 className="fw-700 text-grey-900 font-xssss mt-1">
            {" "}
            {props.creatorName}
            <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
              {moment(props.timestamp, "DDMMYYYY,h:mm:ss").fromNow()}
            </span>
          </h4>
          
          {props.creatorName===currentUser.displayName  ?  (
          <div className="ms-auto pointer">
            <Example id = {props.id} />
          </div> ) : null}


        </div>
        {props.video ? (
          <div className="card-body p-0 mb-3 rounded-3 overflow-hidden uttam-die">
            <a href="/defaultvideo" className="video-btn">
              <video autoPlay loop className="float-right w-100">
                <source src={`assets/images/${props.video}`} type="video/mp4" />
              </video>
            </a>
          </div>
        ) : (
          ""
        )}
        <div className="card-body p-0 me-lg-5">
          <p className="fw-500 text-grey-black lh-26 font-xssss w-100 mb-2">
            {props.body}{" "}
          </p>
        </div>
        {props.image ? (
          <div className="card-body d-block p-0 mb-3">
            <div className="row ps-2 pe-2">
              <div className="col-sm-12 p-1">
                <img src={props.image} className="rounded-3 w-100" alt="post" />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="card-body d-flex p-0">
          <div
            className="emoji-bttn pointer d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"
            onClick={increaseLikes}
          >
            <a>💗 </a>
            {props.likes} Like
          </div>

          <div
            className={`dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg right-0 ${menuClass}`}
            aria-labelledby={`dropdownMenu${props.id}`}
          >
            <div className="card-body p-0 d-flex">
              <ul className="d-flex align-items-center justify-content-between mt-2">
                <li className="me-1">
                  <span className="btn-round-lg pointer bg-facebook">
                    <i className="font-xs ti-facebook text-white"></i>
                  </span>
                </li>
                <li className="me-1">
                  <span className="btn-round-lg pointer bg-twiiter">
                    <i className="font-xs ti-twitter-alt text-white"></i>
                  </span>
                </li>
                <li className="me-1">
                  <span className="btn-round-lg pointer bg-linkedin">
                    <i className="font-xs ti-linkedin text-white"></i>
                  </span>
                </li>
                <li className="me-1">
                  <span className="btn-round-lg pointer bg-instagram">
                    <i className="font-xs ti-instagram text-white"></i>
                  </span>
                </li>
                <li className="me-1">
                  <span className="btn-round-lg pointer bg-youtube">
                    <i className="font-xs ti-youtube text-white"></i>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Postview;




