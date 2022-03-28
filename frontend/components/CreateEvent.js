import React, { Component, Fragment , useRef} from "react";
import Link from 'next/link'

import Header from "../components/Header";
import { updateDoc , doc, getDocs , collection , query, where } from "firebase/firestore";
import { auth , db} from "../firebase/clientApp";
import NavLink from './NavLink'
import { useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext";
import { useAuthState } from "react-firebase-hooks/auth";

const  Info =(props)=> {
  const { currentUser } = useContext(AuthContext);
  const [user] = useAuthState(auth);
  const router = new useRouter();
  const fullNameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const phoneInputRef = useRef();
    const photoInputRef = useRef();
    const associationInputRef = useRef();
    const descriptionInputRef = useRef();
    const cityInputRef = useRef();
    const youtubeInputRef = useRef();
    const facebookInputRef = useRef();
    const twitterInputRef = useRef();
    const linkedInInputRef = useRef();
    const instagramInputRef = useRef();
    const coverInputRef=useRef();

async function updateInfo() {

   const enteredPhone = phoneInputRef.current.value;
   const enteredPhoto = photoInputRef.current.value;
   const enteredAssociation=associationInputRef.current.value;
   const enteredDescription=descriptionInputRef.current.value ;
   const enteredCity=cityInputRef.current.value;
   const enteredFacebook=facebookInputRef.current.value;
   const enteredYouTube=youtubeInputRef.current.value;
   const enteredLinkedIn=linkedInInputRef.current.value;
   const enteredInstagram=instagramInputRef.current.value;
   const enteredTwitter=twitterInputRef.current.value;
   const enteredCoverURL=coverInputRef.current.value;

    updateDoc(doc(db, "users", `${props.userData.name}`), {

       coverURL: enteredCoverURL,
       city: enteredCity,
       description: enteredDescription,
       photoURL: enteredPhoto,
       association: enteredAssociation,
       phone: enteredPhone,
       facebook: enteredFacebook,
       instagram: enteredInstagram,
       linkedIn: enteredLinkedIn,
       youtube: enteredYouTube,
       twitter: enteredTwitter,
       youtube: enteredYouTube,
     });
     router.push('/home')
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
                    <NavLink href="/defaultsettings" className="d-inline-block mt-2">
                      <i className="ti-arrow-left font-sm text-white"></i>
                    </NavLink>
                    <h4 className="font-xs text-white fw-600 ms-4 mb-0 mt-2">
                      Account Details
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
                              Your Association
                            </label>
                            <input type="text" className="form-control" defaultValue={props.userData.association} ref={associationInputRef}/>
                          </div>
                        </div>

                        <div className="col-lg-6 mb-3">
                          <div className="form-group">
                            <label className="mont-font fw-600 font-xsss mb-2">
                              Phone
                            </label>
                            <input type="text" className="form-control" defaultValue={props.userData.phone} ref={phoneInputRef}/>
                          </div>
                        </div>
                      </div>


                        <div className="row">
                        <div className="col-lg-6 mb-3">
                          <div className="form-group">
                            <label className="mont-font fw-600 font-xsss mb-2">
                            Twon / City
                            </label>
                            <input type="text" className="form-control" defaultValue={props.userData.location} ref={cityInputRef}/>
                          </div>
                        </div>

                        <div className="col-lg-6 mb-3">
                          <div className="form-group">
                            <label className="mont-font fw-600 font-xsss mb-2">
                            Youtube URL
                            </label>
                            <input type="url" className="form-control" defaultValue={props.userData.youtube} ref={youtubeInputRef}/>
                          </div>
                        </div>
                        </div>

                        
                        <div className="row">
                        <div className="col-lg-6 mb-3">
                          <div className="form-group">
                            <label className="mont-font fw-600 font-xsss mb-2">
                              LinkedIn URL
                            </label>
                            <input type="url" className="form-control" defaultValue={props.userData.linkedIn} ref={linkedInInputRef}/>
                          </div>
                        </div>

                        <div className="col-lg-6 mb-3">
                          <div className="form-group">
                            <label className="mont-font fw-600 font-xsss mb-2">
                              Twitter URL
                            </label>
                            <input type="url" className="form-control" defaultValue={props.userData.twitter} ref={twitterInputRef}/>
                          </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-6 mb-3">
                          <div className="form-group">
                            <label className="mont-font fw-600 font-xsss mb-2">
                              Facebook URL
                            </label>
                            <input type="url" className="form-control" defaultValue={props.userData.facebook} ref={facebookInputRef}/>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <div className="form-group">
                            <label className="mont-font fw-600 font-xsss mb-2">
                              Instagram URL
                            </label>
                            <input type="url" className="form-control" defaultValue={props.userData.instagram} ref={instagramInputRef}/>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <div className="form-group">
                            <label className="mont-font fw-600 font-xsss mb-2">
                              Your Photo URL
                            </label>
                            <input type="url" className="form-control" defaultValue={props.userData.photoURL} ref={photoInputRef}/>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <div className="form-group">
                            <label className="mont-font fw-600 font-xsss mb-2">
                              Your Cover Photo URL
                            </label>
                            <input type="url" className="form-control" defaultValue={props.userData.coverURL} ref={coverInputRef}/>
                          </div>
                        </div>

                        <div className="col-lg-12 mb-3">
                          <label className="mont-font fw-600 font-xsss mb-2 text-dark">
                            Description
                          </label>
                          <textarea
                            className="form-control mb-0 p-3 h100 bg-greylight lh-16"
                            rows="5"
                            placeholder="Write your message..."
                            defaultValue={props.userData.about}
                            ref={descriptionInputRef}
                          ></textarea>
                        </div>

                        <div className="col-lg-12">
                        <button onClick={updateInfo}
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

export default Info;
