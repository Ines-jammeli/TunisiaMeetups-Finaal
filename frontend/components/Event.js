import React, { Component, Fragment } from "react";
import Header from "./Header";

import Slider from "react-slick";


const Event = (props) => {


    return (
      <Fragment>
        <Header />
        <div className="main-content right-chat-active">
          <div className="middle-sidebar-bottom">
            <div className="middle-sidebar-left pe-0">
              <div className="row">
                
                <div className="col-lg-5 mb-4 shop-slider">
                      <div
                        className="pt-lg--10 pb-lg--10 bg-white rounded-3"
                      >
                        <img
                          src={props.image}
                          alt="avater"
                          className="rounded-3 img-fluid"
                        />
                      </div>

                </div>

                <div className="col-lg-6  col-md-12 pad-top-lg-200 pad-bottom-lg-100 pad-top-100 pad-bottom-75 ps-md--5">

                  <h2 className="fw-700 text-grey-900 display1-size lh-3 porduct-title display2-md-size">
                    {" "}
                    {props.title}
                  </h2>
                 
                
                  <div className="clearfix"></div>
                  <p className="font-xsss fw-400 text-grey-500 lh-30 pe-5 mt-3 me-5">
                    {props.description}
                  </p>


                  <div className="card-body d-flex ps-5 pe-0 pb-0 ">
                        <div className="bg-greylight me-3 p-3 border-light-md rounded-xxl theme-dark-bg">
                          <h4 className="fw-700 font-lg ls-3 text-grey-900 mb-0">
                            <span className="ls-3 d-block font-xsss text-grey-500 fw-500">
                                {props.month}
                            </span>
                                {props.date}
                          </h4>
                        </div>
                        </div>


                  <div className="clearfix"></div>

                  <div className="clearfix"></div>
                  <ul className="product-feature-list mt-5">
                    <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left">
                      <b className="text-grey-900"> Created by : </b>  {props.createdBy}
                    </li>

                    <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left">
                      <b className="text-grey-900">Association : </b> {props.association}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

export default Event;
