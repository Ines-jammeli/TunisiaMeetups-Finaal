import React, { Component, Fragment, useRef } from "react";

import Header from "../components/Header";
import {
  updateDoc,
  doc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase/clientApp";
import NavLink from "../components/NavLink";
import { useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext";
import { useAuthState } from "react-firebase-hooks/auth";

const Info = (props) => {
console.log(props.userData.name);
  const { currentUser } = useContext(AuthContext);

  const router = new useRouter();
  const fullNameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const associationInputRef = useRef();
  const aboutInputRef = useRef();
  const locationInputRef = useRef();
  const coverInputRef = useRef();

  async function updateInfo() {
    const enteredPhone = phoneInputRef.current.value;
    const enteredAssociation = associationInputRef.current.value;
    const entrededAbout = aboutInputRef.current.value; 
    const enteredLocation = locationInputRef.current.value;
    const enteredCoverURL = coverInputRef.current.value;

    await updateDoc(doc(db, "users", `${currentUser.displayName}`), {
      coverURL: enteredCoverURL,
      location: enteredLocation,

      coverURL: enteredCoverURL,
      association: enteredAssociation,
      phone: enteredPhone,
      about: entrededAbout,
    });
router.reload(window.location.pathname);
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
                  <a href="/defaultsettings" className="d-inline-block mt-2">
                    <i className="ti-arrow-left font-sm text-white"></i>
                  </a>
                  <h4 className="font-xs text-white fw-600 ms-4 mb-0 mt-2">
                    Account Details
                  </h4>
                </div>
                <div className="card-body p-lg-5 p-4 w-100 border-0 ">
                  <div className="row justify-content-center">
                    <div className="col-lg-4 text-center">
                      <figure className="avatar ms-auto me-auto mb-0 mt-2 w100">
                        <img
                          src={currentUser.photoURL}
                          alt="avater"
                          className="shadow-sm rounded-3 w-100"
                        />
                      </figure>
                      <h2 className="fw-700 font-sm text-grey-900 mt-3">
                        {currentUser.displayName}
                      </h2>
                      <h4 className="text-grey-500 fw-500 mb-3 font-xsss mb-4">
                        {props.userData.location}
                      </h4>
                    </div>
                  </div>

                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={props.userData.name}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss mb-2">
                            Association
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={props.userData.association}
                            ref={associationInputRef}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss mb-2">
                            Email
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={props.userData.email}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss mb-2">
                            Phone
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={props.userData.phone}
                            ref={phoneInputRef}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-12 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss mb-2">
                            Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={props.userData.location}
                            ref={locationInputRef}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss mb-2">
                            Cover Photo
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={props.userData.coverURL}
                            ref={coverInputRef}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-12 mb-3">
                        <label className="mont-font fw-600 font-xsss mb-2 text-dark">
                          Description
                        </label>
                        <textarea
                          className="form-control mb-0 p-3 h100 bg-greylight lh-16"
                          rows="5"
                          placeholder="Write your message..."
                          defaultValue={props.userData.about}
                          ref={aboutInputRef}
                        ></textarea>
                      </div>

                      <div className="col-lg-12">
                        <a
                          className="bg-primary text-center text-white font-xsss fw-600 p-3 w175 rounded-3 d-inline-block"
                          onClick={updateInfo}
                        >
                          Save
                        </a>
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
};

export default Info;

