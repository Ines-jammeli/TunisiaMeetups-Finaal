import React, { Component, Fragment } from "react";
import Header from "./Header";
import Pagetitle from "../components/Pagetitle";
import Appfooter from "./Appfooter";


const Story =(props)=> {

  console.log(props)
    return (
      <Fragment>
        <Header />


        <div className="main-content right-chat-active">
          <div className="middle-sidebar-bottom">
            <div className="middle-sidebar-left pe-0">
              <div className="row">
                <div className="col-xl-12">
                  <Pagetitle title="Photos" />

                  <div className="row ps-2 pe-1">
                    {props.postsData.posts.map((post) => (
                      <div key={post.id} className="col-md-3 col-xss-6 pe-2 ps-2">
                        <div
                          className="card h300 d-block border-0 shadow-xss rounded-3 bg-gradiant-bottom overflow-hidden mb-3 bg-image-cover"
                          style={{
                            backgroundImage: `url(${post.image})`,
                            backgroundPosition: 'center',
                          }}
                        >
                          <div className="card-body d-block w-100 position-absolute bottom-0 text-center">
                            <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                              <img
                                src={post.creatorPhoto}
                                alt="avater"
                                className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                              />
                            </figure>
                            <div className="clearfix"></div>
                            <h4 className="fw-600 position-relative z-index-1 ls-3 font-xssss text-white mt-2 mb-1">
                              {post.createdBy}
                            </h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <Appfooter />
      </Fragment>
    );
  }


export default Story;
