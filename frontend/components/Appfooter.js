import React,{Component} from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from "./NavLink";
import Image from 'next/image';

const Appfooter =() =>{

        return (
          <div className="app-footer border-0 shadow-lg bg-primary-gradiant">
            <NavLink href="/home" className="nav-content-bttn nav-center">
              <i className="feather-home"></i>
            </NavLink>
            <NavLink href="/defaultvideo" className="nav-content-bttn">
              <i className="feather-package"></i>
            </NavLink>
            <NavLink
              href="/defaultlive"
              className="nav-content-bttn"
              data-tab="chats"
            >
              <i className="feather-layout"></i>
            </NavLink>
            <NavLink href="/shop2" className="nav-content-bttn">
              <i className="feather-layers"></i>
            </NavLink>
            <NavLink href="/defaultsettings" className="nav-content-bttn">
              <img
                src="assets/images/female-profile.png"
                alt="user"
                className="w30 shadow-xss"
              />
            </NavLink>
          </div>
        );

}

export default Appfooter;