import React, { Component, Fragment } from "react";
import Header from "./Header";
import Appfooter from "./Appfooter";
import Profiledetail from "../components/Profiledetail";
import ProfilecardThree from "../components/ProfilecardThree";
import Postview from "../components/Postview";
import Createpost from "../components/Createpost";
const UserPage = (props) => {
  console.log(props.postsData);

  return (
    <Fragment>
      <Header />

      <div className="main-content right-chat-active">
        <div className="middle-sidebar-bottom">
          <div className="middle-sidebar-left pe-0">
            <div className="row">
              <div className="col-xl-12 mb-3">
                <ProfilecardThree userData={props} />
              </div>
              <div className="col-xl-4 col-xxl-3 col-lg-4 pe-0">
                <Profiledetail userData={props} />
                {/* <Profilephoto userData={props} /> */}
              </div>
              <div className="col-xl-8 col-xxl-9 col-lg-8">
                <Createpost />
                {props.postsData.map((post) => (
                  <Postview
                    key={post.id}
                    id={post.id}
                    image={post.image}
                    body={post.body}
                    creatorName={post.userName}
                    creatorPhoto={post.creatorPhoto}
                    timestamp={post.timestamp}
                    likes={post.likes}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Appfooter />
    </Fragment>
  );
};

export default UserPage;
