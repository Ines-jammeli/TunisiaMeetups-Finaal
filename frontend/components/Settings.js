import React, {  Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from '../components/Header';
import Appfooter from "./Appfooter"
import { NavLink } from "./NavLink";

import { auth } from "../firebase/clientApp";
import { signOut } from "firebase/auth";
import { useContext } from "react";


import { AuthContext } from "../context/AuthContext";
const  Settings =()=> {
  const { currentUser } = useContext(AuthContext);
      const Router = useRouter();
 const signOutHandler = async () => {
   await signOut(auth);
   localStorage.removeItem('authUser')
   localStorage.removeItem('user');
   localStorage.removeItem('ally-supports-cache')
   localStorage.removeItem('login')
Router.push("/");
 };
if(currentUser){


        return (
          <Fragment>
            <Header />

            <div className="main-content bg-lightblue theme-dark-bg right-chat-active">
              <div className="middle-sidebar-bottom">
                <div className="middle-sidebar-left">
                  <div className="middle-wrap">
                    <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                      <div className="card-body p-lg-5 p-4 w-100 border-0">
                        <div className="row">
                          <div className="col-lg-12">
                            <h4 className="mb-4 font-xxl fw-700 mont-font mb-lg-5 mb-4 font-md-xs">
                              Settings
                            </h4>
                            <br/> <br/> 
                            <div className="nav-caption fw-600 font-xssss text-grey-500 mb-2">
                              Genaral
                            </div>
                            <ul className="list-inline mb-4">
                              <li className="list-inline-item d-block border-bottom me-0">
                                <NavLink
                                  href={`/accountInformation/${currentUser.uid}`}

                                  className="pt-2 pb-2 d-flex align-items-center"
                                >
                                  <i className="btn-round-md bg-blue-gradiant text-white feather-home font-md me-3"></i>
                                  <h4 className="fw-600 font-xsss mb-0 mt-0">
                                    Acount Information
                                  </h4>
                                  <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                                </NavLink>
                              </li>

                              <li className="list-inline-item d-block me-0">
                                <NavLink
                                  href={`/socialLinks/${currentUser.uid}`}
                                  className="pt-2 pb-2 d-flex align-items-center"
                                >
                                  <i className="btn-round-md bg-red-gradiant text-white feather-twitter font-md me-3"></i>{" "}
                                  <h4 className="fw-600 font-xsss mb-0 mt-0">
                                    Social Acount
                                  </h4>
                                  <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                                </NavLink>
                              </li>
                            </ul>

                            <br/> <br/> 
                            <div className="nav-caption fw-600 font-xsss text-grey-500 mb-2">
                              Other
                            </div>
                            <ul className="list-inline">

                              <li className="list-inline-item d-block me-0">
                                <a
                                  href="javascript:void(0)"
                                  onClick={signOutHandler}
                                  className="pt-2 pb-2 d-flex align-items-center"
                                >
                                  <i className="btn-round-md bg-red-gradiant text-white feather-lock font-md me-3"></i>{" "}
                                  <h4 className="fw-600 font-xsss mb-0 mt-0">
                                    Logout
                                  </h4>
                                  <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                                </a>
                              </li>
                            </ul>
                            <br/> <br/> <br/> <br/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Appfooter />
          </Fragment>
        );
    }else{
      Router.push('/')
      return<></>
    }
  }

export default Settings;