import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Appfooter from "../components/Appfooter";
import Pagetitle from "../components/Pagetitle";

import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const Event =(props)=> {

 async function eventHandler() { 
  Router.push("/home")
 }
  const  center= {
      lat: 59.95,
      lng: 30.33,
    };

    const zoom= 11;

  // render() {
    return (
      <Fragment>
        <Header />

        <div className="main-content right-chat-active">
          <div className="middle-sidebar-bottom">
            <div className="middle-sidebar-left pe-0">
              <div className="row">
                <div className="col-xl-12">
                  <div className="card w-100 border-0 shadow-none rounded-xxl border-0 mb-3 overflow-hidden ">
                    <div style={{ height: "400px", width: "100%" }}>
                      <Pagetitle title="Latest Events" />
                      <GoogleMapReact
                        defaultCenter={center}
                        defaultZoom={zoom}
                      >
                        <AnyReactComponent
                          lat={59.955413}
                          lng={30.337844}
                          text="My Marker"
                        />
                      </GoogleMapReact>
                    </div>
                  </div>
                </div>
                
                {props.eventsData.events.map((event) => (
                  <div key={event.id} className="col-lg-4 col-md-6 pe-2 ps-2">
                    <div className="card p-3 bg-white w-100 hover-card border-0 shadow-xss rounded-xxl border-0 mb-3 overflow-hidden ">
                      <div className="card-image w-100">
                        <img
                          src={event.image}
                          alt="event"
                          className="w-100 rounded-3"
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
                        <a
                        onClick={eventHandler}
                          href="/defaultevent"
                          className="font-xsssss fw-700 ps-3 pe-3 lh-32 float-right mt-4 text-uppercase rounded-3 ls-2 bg-success d-inline-block text-white me-1"
                        >
                          Check The Event 
                        </a>
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
