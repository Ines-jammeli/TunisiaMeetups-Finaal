import React,{useState} from 'react';
import Darkbutton from '../components/Darkbutton';

import { NavLink } from "./NavLink"

import { useContext } from "react";


import { AuthContext } from "../context/AuthContext";
const Header =()=> {
const { currentUser } = useContext(AuthContext);

        const[isOpen,setIsOpen]= useState(false)
        const[isActive,setIsActive]=useState( false)
        const [isNoti,setIsNoti]= useState(false) 


    const toggleOpen = () => setIsOpen(true);
   const toggleActive = () => setIsActive(true);
    const toggleisNoti = () => setIsNoti(true);


        const navClass = `${isOpen ? " nav-active" : ""}`;
        const buttonClass = `${isOpen ? " active" : ""}`;

        const notiClass = `${isNoti ? " show" : ""}`;


        return (
          <div className="nav-header bg-white shadow-xs border-0">
            <div className="nav-top">
              <NavLink href="/">
                <i className="feather-zap text-success display2-size me-3 ms-0"></i>
                <span className="d-inline-block fredoka-font ls-3 fw-400 text-current font-xxl logo-text mb-0">
                  Tunisia Meetups{" "}
                </span>
              </NavLink>
              <NavLink
                href="/defaultmessage"
                className="mob-menu ms-auto me-2 chat-active-btn"
              >
                <i className="feather-message-circle text-grey-900 font-sm btn-round-md bg-greylight"></i>
              </NavLink>
              <NavLink href="/defaultvideo" className="mob-menu me-2">
                <i className="feather-video text-grey-900 font-sm btn-round-md bg-greylight"></i>
              </NavLink>
              <span
                onClick={toggleActive}
                className="me-2 menu-search-icon mob-menu"
              >
                <i className="feather-search text-grey-900 font-sm btn-round-md bg-greylight"></i>
              </span>
              <button
                onClick={toggleOpen}
                className={`nav-menu me-0 ms-2 ${buttonClass}`}
              ></button>
            </div>

            <span
              className={`p-2 pointer text-center ms-auto menu-icon ${notiClass}`}
              id="dropdownMenu3"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={toggleisNoti}
            >
              <span className="dot-count bg-warning"></span>
              <i className="feather-bell font-xl text-current"></i>
            </span>
            <div
              className={`dropdown-menu p-4 right-0 rounded-xxl border-0 shadow-lg ${notiClass}`}
              aria-labelledby="dropdownMenu3"
            >
              <h4 className="fw-700 font-xss mb-4">Notification</h4>
              <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                <img
                  src="assets/images/user.png"
                  alt="user"
                  className="w40 position-absolute left-0"
                />
                <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                  Hendrix Stamp{" "}
                  <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                    {" "}
                    3 min
                  </span>
                </h5>
                <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                  There are many variations of pass..
                </h6>
              </div>
              <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                <img
                  src="assets/images/user.png"
                  alt="user"
                  className="w40 position-absolute left-0"
                />
                <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                  Goria Coast{" "}
                  <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                    {" "}
                    2 min
                  </span>
                </h5>
                <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                  Mobile Apps UI Designer is require..
                </h6>
              </div>

              <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                <img
                  src="assets/images/user.png"
                  alt="user"
                  className="w40 position-absolute left-0"
                />
                <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                  Surfiya Zakir{" "}
                  <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                    {" "}
                    1 min
                  </span>
                </h5>
                <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                  Mobile Apps UI Designer is require..
                </h6>
              </div>
              <div className="card bg-transparent-card w-100 border-0 ps-5">
                <img
                  src="assets/images/user.png"
                  alt="user"
                  className="w40 position-absolute left-0"
                />
                <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                  Victor Exrixon{" "}
                  <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                    {" "}
                    30 sec
                  </span>
                </h5>
                <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                  Mobile Apps UI Designer is require..
                </h6>
              </div>
            </div>

            <Darkbutton />
            <NavLink href="/settings" className="p-1 ms-3 menu-icon  ">
              <img
                src={currentUser.photoURL}
                alt="user"
                className="w40 mt--1 rounded-3"
              />
            </NavLink>

            <nav className={`navigation scroll-bar ${navClass}`}>
              <div className="container ps-0 pe-0">
                <div className="nav-content">
                  <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
                    {/* <div className="nav-caption fw-600 font-xssss text-grey-500">
                      <span>New </span>Feeds
                    </div> */}
                    <ul className="mb-1 top-content">
                      <li className="logo d-none d-xl-block d-lg-block"></li>
                      <li>
                        <NavLink
                          href="/home"
                          className="nav-content-bttn open-font"
                        >
                          <i className="feather-tv btn-round-md bg-red-gradiant me-3"></i>
                          <span>Home Page</span>
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          href="/stories"
                          className="nav-content-bttn open-font"
                        >
                          <i className="feather-globe btn-round-md bg-gold-gradiant me-3"></i>
                          <span>Photos</span>
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          href={`/${currentUser.uid}`}
                          className="nav-content-bttn open-font"
                        >
                          <i className="feather-user btn-round-md bg-blue-gradiant me-3"></i>
                          <span>My Profile </span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2">
                    <div className="nav-caption fw-600 font-xssss text-grey-500">
                      <span>More </span>Pages
                    </div>
                    <ul className="mb-3">
                      {/* <li>
                        <NavLink
                          href="/emails"
                          className="nav-content-bttn open-font"
                        >
                          <i className="font-xl text-current feather-inbox me-3"></i>
                          <span>Email Box</span>
                          <span className="circle-count bg-warning mt-1">
                            584
                          </span>
                        </NavLink>
                      </li> */}

                      <li>
                        <NavLink
                          href="/eventlist"
                          className="nav-content-bttn open-font"
                        >
                          <i className="font-xl text-current feather-map-pin me-3"></i>
                          <span>All Events </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          href="/associationEventList"
                          className="nav-content-bttn open-font"
                        >
                          <i className="font-xl text-current feather-map-pin me-3"></i>
                          <span>My Association Events </span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1">
                    <div className="nav-caption fw-600 font-xssss text-grey-500">
                      <span></span> Account
                    </div>
                    <ul className="mb-1">
                      <li className="logo d-none d-xl-block d-lg-block"></li>
                      <li>
                        <NavLink
                          href="/settings"
                          className="nav-content-bttn open-font h-auto pt-2 pb-2"
                        >
                          <i className="font-sm feather-settings me-3 text-grey-500"></i>
                          <span>Settings</span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        );
    }


export default Header;