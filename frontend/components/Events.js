import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Appfooter from "../components/Appfooter";
import Pagetitle from "../components/Pagetitle";
import { NavLink } from "./NavLink"

import GoogleMapReact from "google-map-react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const Event =(props)=> {
  const { currentUser } = useContext(AuthContext);
    return (
      <Fragment>
        <Header />

        <div className="main-content right-chat-active">
          <div className="middle-sidebar-bottom">
            <div className="middle-sidebar-left pe-0">
              <div className="row">
                
                {props.eventsData.events.map((event) => (
                  <div key={event.id} className="col-lg-4 col-md-6 pe-2 ps-2">
                    <div className="card p-3 bg-white w-100 hover-card border-0 shadow-xss rounded-xxl border-0 mb-3 overflow-hidden ">
                      <div className="card-image w-100">
                        <img
                          src={event.image}
                          alt="event"
                          className="w-100 rounded-3"
                          height='220px'
                          width="360px"
                        />
                      </div>
                      <div className="card-body d-flex ps-0 pe-0 pb-0">
                        <div className="bg-greylight me-3 p-3 border-light-md rounded-xxl theme-dark-bg">
                          <h4 className="fw-700 font-lg ls-3 text-grey-900 mb-0">
                            <span className="ls-3 d-block font-xsss text-grey-500 fw-500">
                              {event.month}
                            </span>
                            {event.date}
                          </h4>
                        </div>
                        <h2 className="fw-700 lh-3 font-xss">
                          {event.title}
                          <span className="d-flex font-xssss fw-500 mt-2 lh-3 text-grey-500">
                            {" "}
                            <i className="ti-location-pin me-1"></i>
                            {event.city}{" "}
                          </span>
                          <span className="d-flex font-xssss fw-500 mt-2 lh-3 text-grey-500">
                            {" "}
                            {event.association}{" "}
                          </span>
                        </h2>
                      </div>
                      <div className="card-body p-0">
                      
                        <NavLink
                          href={`/singleEvent/${event.id}`}
                          className="font-xsssss fw-700 ps-3 pe-3 lh-32 float-right mt-4 text-uppercase rounded-3 ls-2 bg-success d-inline-block text-white me-1"
                        >
                          Check The Event
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Appfooter />
      </Fragment>
    );
  }

export default Event;