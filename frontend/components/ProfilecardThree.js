import React,{Component} from 'react';

const ProfilecardThree =(props)=> {

        return (
          <div className="card w-100 border-0 p-0 bg-white shadow-xss rounded-xxl">
            <div className="card-body h250 p-0 rounded-xxl overflow-hidden m-3">
              <img
                src={props.userData.coverURL}
                alt="avater"
                width="1200"
                height="250"
                position="absolute"
              />
            </div>
            <div className="card-body p-0 position-relative">
              <figure
                className="avatar position-absolute w100 z-index-1"
                style={{ top: "-40px", left: "30px" }}
              >
                <img
                  src={props.userData.photoURL}
                  alt="avater"
                  className="float-right p-1 bg-white rounded-circle w-100"
                />
              </figure>
              <h4 className="fw-700 font-sm mt-2 mb-lg-5 mb-4 pl-15">
                {props.userData.name}
                <span className="fw-500 font-xssss text-grey-500 mt-1 mb-3 d-block">
                  {props.userData.email}
                </span>
              </h4>
            

            </div>

            

          </div>
        );
    }


export default ProfilecardThree;