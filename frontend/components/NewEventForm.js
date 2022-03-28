import React, { Component, Fragment , useRef} from "react";
import Link from "next/link";

import Header from "./Header";
import {  setDoc, doc , serverTimestamp} from "firebase/firestore";
import { auth , db} from "../firebase/clientApp";
import NavLink from "./NavLink";
import { useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext";
import { useAuthState } from "react-firebase-hooks/auth";

function NewEventForm(props) {
    const router = useRouter();
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const cityInputRef = useRef();
    const descriptionInputRef = useRef();
    const dayInputRef = useRef();
    const monthInputRef = useRef();
  
    function submitHandler(event) {
      event.preventDefault();
  
      const enteredTitle = titleInputRef.current.value;
      const enteredImage = imageInputRef.current.value;
      const enteredAddress = cityInputRef.current.value;
      const enteredDescription = descriptionInputRef.current.value;
      const enteredDay = dayInputRef.current.value;
      const enteredMonth = monthInputRef.current.value;
      const uid=Math.random()

      setDoc(doc(db, "events", `${uid}`), {
        id: uid,
        title: enteredTitle,
        image: enteredImage,
        city: enteredAddress,
        description: enteredDescription,
        createdBy: props.userData.name,
        email: props.userData.email,
        createAt: serverTimestamp(),
        phone: props.userData.phone,
        createByPhoto: props.userData.photoURL,
        association: props.userData.association,
        date: enteredDay,
        month: enteredMonth,
      });
      router.push('/')
    }
  
    return (
            <Fragment>
              <Header />
      
      
              <div className="main-content bg-lightblue theme-dark-bg right-chat-active">
                <div className="middle-sidebar-bottom">
                  <div className="middle-sidebar-left">
                    <div className="middle-wrap">
                      <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                        <div className="card-body p-4 w-100 bg-current border-0 d-flex rounded-3">
                          <Link href="/defaultsettings"> 
                          <a  className="d-inline-block mt-2">
                            <i className="ti-arrow-left font-sm text-white"></i>
                          </a>
                          </Link>
                          <h4 className="font-xs text-white fw-600 ms-4 mb-0 mt-2">
                            Create a New Event
                          </h4>
                        </div>
                        <div className="card-body p-lg-5 p-4 w-100 border-0 ">
                          <div className="row justify-content-center">
                            <div className="col-lg-4 text-center">
                              <figure className="avatar ms-auto me-auto mb-0 mt-2 w100">
                                <img
                                  src={props.userData.photoURL}
                                  alt="avater"
                                  className="shadow-sm rounded-3 w-100"
                                />
                              </figure>
                              <h2 className="fw-700 font-sm text-grey-900 mt-3">
      {props.userData.name}
                              </h2>
                              <h4 className="text-grey-500 fw-500 mb-3 font-xsss mb-4">
                              {props.userData.email}
                              </h4>
                            </div>
                          </div>
      
                          <form action="#">
                            <div className="row"> 
                              <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                  <label className="mont-font fw-600 font-xsss mb-2">
                                    Event Title
                                  </label>
                                  <input type="text" className="form-control" placeholder="Add the Event's Title" ref={titleInputRef}/>
                                </div>
                              </div>
                            </div>
      
                              <div className="row">
                              <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                  <label className="mont-font fw-600 font-xsss mb-2">
                                  Twon / City
                                  </label>
                                  <input type="text" className="form-control" placeholder="Add the Event's Location" ref={cityInputRef}/>
                                </div>
                              </div>
                            
                              <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                  <label className="mont-font fw-600 font-xsss mb-2">
                                    Event Photo URL
                                  </label>
                                  <input type="url" className="form-control"  placeholder="Add an Image describing your Event" ref={imageInputRef}/>
                                </div>
                              </div>
                            
                              <div className="col-lg-6 mb-3">
                          <div className="form-group">
                            <label className="mont-font fw-600 font-xsss mb-2">
                              Day
                            </label>
                            <input type="number" className="form-control" placeholder='Add the day of the Event' ref={dayInputRef}/>
                          </div>
                        </div>
                      

                      <div className="col-lg-6 mb-3">
                          <div className="form-group">
                            <label className="mont-font fw-600 font-xsss mb-2">
                              Month
                            </label>
                            <input type="text" className="form-control" placeholder="Add the Event's Month in Letters" ref={monthInputRef}/>
                          </div>
                        </div>
      
                              <div className="col-lg-12 mb-3">
                                <label className="mont-font fw-600 font-xsss mb-2 text-dark">
                                  Description
                                </label>
                                <textarea
                                  className="form-control mb-0 p-3 h100 bg-greylight lh-16"
                                  rows="5"
                                  placeholder="Describe your event"
                                  ref={descriptionInputRef}
                                ></textarea>
                              </div>
      
                              <div className="col-lg-12">
                              <button onClick={submitHandler}
                                  className="bg-primary text-center text-white font-xsss fw-600 p-3 w175 rounded-3 d-inline-block"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      
      
      
            </Fragment>
          );
      
          }
      
      export default NewEventForm;
      