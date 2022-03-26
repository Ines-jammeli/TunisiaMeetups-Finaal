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
            </div>

            <div
              className='p-2 pointer text-center ms-auto menu-icon'
            
            >
            
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
                    

                      <li>
                        <NavLink
                          href="/eventlist"
                          className="nav-content-bttn open-font"
                        >
                          <i className="font-xl text-current feather-map-pin me-3"></i>
                          <span>All Events </span>
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
