import Link from 'next/link'
import React, { useCallback, Fragment ,useRef} from "react";
import db from "../firebase/clientApp"
import { auth } from "../firebase/clientApp";
import {
  updateDoc,
  doc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

const EmailPasswordAuthSignup = () => {
 const Router = useRouter();
  const fullNameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
 const signupHandler = useCallback(
   async (event) => {
   const enteredFullName = fullNameInputRef.current.value;
   const enteredEmail = emailInputRef.current.value;
   const enteredPassword = passwordInputRef.current.value;
console.log(enteredFullName, enteredEmail, enteredPassword);

     event.preventDefault();

     try {

       await createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword);

       Router.push("/home");
     } catch (error) {
       alert(error);
     }
   },
   [Router]
 );



  return (
    <Fragment>
      <div className="main-wrap">
        <div className="nav-header bg-transparent shadow-none border-0">
          <div className="nav-top w-100">
            <Link href="/">
            <a>
              <i className="feather-zap text-success display1-size me-2 ms-0"></i>
              <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">
                Tunisia Meetups
              </span>
            </a>
            </Link>
            <button className="nav-menu me-0 ms-auto"></button>
            <Link href="/login">
            <a
              className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl"
            >
              Login
            </a>
            </Link>
          </div>
        </div>

        <div className="row">
          <div
            className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
            style={{
              backgroundImage: `url("http://uitheme.net/sociala/images/login-bg-2.jpg")`,
            }}
          ></div>
          <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
            <div className="card shadow-none border-0 ms-auto me-auto login-card">
              <div className="card-body rounded-0 text-left">
                <h2 className="fw-700 display1-size display2-md-size mb-4">
                  Create <br />
                  your account
                </h2>
                <form>
                  <div className="form-group icon-input mb-3">
                    <i className="font-sm ti-user text-grey-500 pe-0"></i>
                    <input
                      type="text"
                      className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                      placeholder="Your Name"
                      ref={fullNameInputRef}
                    />
                  </div>
                  <div className="form-group icon-input mb-3">
                    <i className="font-sm ti-email text-grey-500 pe-0"></i>
                    <input
                      type="Email"
                      className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                      placeholder="Your Email Address"
                      ref={emailInputRef}
                    />
                  </div>
                  <div className="form-group icon-input mb-3">
                    <input
                      type="Password"
                      className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                      placeholder="Password"
                      ref={passwordInputRef}
                    />
                    <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                  </div>
                </form>

                <div className="col-sm-12 p-0 text-left">
                  <div className="form-group mb-1"></div>
                  <div className="form-group mb-1">
                    <button
                      type="submit"
                      onClick={signupHandler}
                      className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
                    >
                      Register
                    </button>
                  </div>
                  
                  
                  <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                    Already have account{" "}
                    <Link href="/login">
                    <a className="fw-700 ms-1">
                      Login
                    </a>
                    </Link>
                  </h6>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};


export default EmailPasswordAuthSignup;
