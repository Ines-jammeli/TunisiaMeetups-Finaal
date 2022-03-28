import React, { Component , Fragment,useRef } from "react";
import Link from "next/link";
import {
  updateDoc,
  doc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { auth, db } from "../firebase/clientApp";
import Header from '../components/Header';
import NavLink from '../components/NavLink';
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
const Socialaccount =(props)=> {
     const { currentUser } = useContext(AuthContext);
     console.log(currentUser)
     const data= props.userData.selectedUser
     console.log(data)

const facebookInputRef=useRef();
const youtubeInputRef=useRef();
const twitterInputRef=useRef();
const instagramInputRef=useRef();
const linkedinInputRef=useRef();

      const router = new useRouter();
 
 async function updateInfo() {
 const enteredFacebook = facebookInputRef.current.value;
     const enteredTwitter = twitterInputRef.current.value;
     const enteredInstagram = instagramInputRef.current.value;
     const enteredYouTube = youtubeInputRef.current.value;
     const enteredLinkedin = linkedinInputRef.current.value;

    await updateDoc(doc(db, "users", `${currentUser.displayName}`), {
      facebook: enteredFacebook,
      youtube: enteredYouTube,
      linkedin: enteredLinkedin,
      twitter: enteredTwitter,
      instagram: enteredInstagram,
    });
router.reload(window.location.pathname);
  }
        return (
          <Fragment>
            <div className="main-wrapper">
              <Header />
              <div className="main-content bg-lightblue theme-dark-bg right-chat-active">
                <div className="middle-sidebar-bottom">
                  <div className="middle-sidebar-left">
                    <div className="middle-wrap">
                      <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                        <div className="card-body p-4 w-100 bg-current border-0 d-flex rounded-3">
                          <Link href="/defaultsettings"> 
                          <a
                            className="d-inline-block mt-2"
                          >
                            <i className="ti-arrow-left font-sm text-white"></i>
                          </a>
                          </Link>
                          <h4 className="font-xs text-white fw-600 ms-4 mb-0 mt-2">
                            Social Network
                          </h4>
                        </div>
                        <div className="card-body p-lg-5 p-4 w-100 border-0">
                          <form action="#">
                            <div className="row">
                              <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                  <label className="mont-font fw-600 font-xsss">
                                    Facebook
                                  </label>
                                  <input
                                    type="text"
                                    name="comment-name"
                                    className="form-control"
                                    defaultValue={data.facebook}
                                    ref={facebookInputRef}
                                  />
                                </div>
                              </div>

                              <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                  <label className="mont-font fw-600 font-xsss">
                                    Twitter
                                  </label>
                                  <input
                                    type="text"
                                    name="comment-name"
                                    className="form-control"
                                    defaultValue={data.twitter}
                                    ref={twitterInputRef}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                  <label className="mont-font fw-600 font-xsss">
                                    Linkedin
                                  </label>
                                  <input
                                    type="text"
                                    name="comment-name"
                                    className="form-control"
                                    defaultValue={data.linkedin}
                                    ref={linkedinInputRef}
                                  />
                                </div>
                              </div>

                              <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                  <label className="mont-font fw-600 font-xsss">
                                    Instagram
                                  </label>
                                  <input
                                    type="text"
                                    name="comment-name"
                                    className="form-control"
                                    defaultValue={data.instagram}
                                    ref={instagramInputRef}
                                  />
                                </div>
                              </div>

                              <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                  <label className="mont-font fw-600 font-xsss">
                                    Youtube
                                  </label>
                                  <input
                                    type="text"
                                    name="comment-name"
                                    className="form-control"
                                    defaultValue={data.youtube}
                                    ref={youtubeInputRef}
                                  />
                                </div>
                              </div>

                              <div className="col-lg-12 mb-0 mt-2">
                                <button

                                  className="bg-primary text-center text-white font-xsss fw-600 p-3 w175 rounded-3 d-inline-block"
                                  onClick={updateInfo}
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
            </div>
          </Fragment>
        );
    }


export default Socialaccount;