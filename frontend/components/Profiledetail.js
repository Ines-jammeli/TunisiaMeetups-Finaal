import React, { Component } from "react";
import Link from "next/link";

const Profiledetail = (props) => {
  let object = props.userData;
  let detailsObject = {};

  for (const [key, value] of Object.entries(object)) {
    if (value !== null) {
      detailsObject[key] = value;
    }
  }

  return (
    <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
      <div className="card-body d-block p-4">
        <h4 className="fw-700 mb-3 font-xsss text-grey-900">About</h4>
        <p className="fw-500 text-grey-500 lh-24 font-xssss mb-0">
          {object.about}
        </p>
      </div>

      {object.location?(
  <div className="card-body d-flex pt-0">
        <i className="feather-map-pin text-grey-500 me-3 font-lg"></i>
        <h4 className="fw-700 text-grey-900 font-xssss mt-1">
          {object.location}
        </h4>
      </div>
      ):(
        ""
      )}
    {object.facebook?(
  <div className="card-body d-flex pt-0">
        <i className="feather-facebook text-grey-500 me-3 font-lg"></i>
        <h4 className="fw-700 text-grey-900 font-xssss mt-1">
          <Link href={object.facebook}> 
          <a target="_blank">
            {" "}
Facebook
          </a>
          </Link>
        </h4>
      </div>
    ):(
      ""
    )}
{object.twitter?(
  <div className="card-body d-flex pt-0">
        <i className="feather-twitter text-grey-500 me-3 font-lg"></i>
        <h4 className="fw-700 text-grey-900 font-xssss mt-1">
          <Link href={object.twitter}> 
          <a target="_blank">
            {" "}
Twitter
          </a>
          </Link>
        </h4>
      </div>
):(
  ""
)}
    
    {object.linkedin?(
  <div className="card-body d-flex pt-0">
        <i className="feather-linkedin text-grey-500 me-3 font-lg"></i>
        <h4 className="fw-700 text-grey-900 font-xssss mt-1">
          <Link href={object.linkedin} > 
          <a target="_blank">
            {" "}
Linkedin
          </a>
          </Link>
        </h4>
      </div>
    ):(
      ""
    )}

    {object.instagram?(
    <div className="card-body d-flex pt-0">
        <i className="feather-instagram text-grey-500 me-3 font-lg"></i>
        <h4 className="fw-700 text-grey-900 font-xssss mt-1">
          <Link href={object.instagram}> 
          <a target="_blank">
            {" "}
Instagram
          </a>
          </Link>
        </h4>
      </div>
    ):(
      ""
    )}
  
      {object.youtube? (
  <div className="card-body d-flex pt-0">
        <i className="feather-youtube text-grey-500 me-3 font-lg"></i>
        <h4 className="fw-700 text-grey-900 font-xssss mt-1">
          <Link href={object.youtube}> 
          <a target="_blank">
            {" "}
Youtube
          </a>
          </Link>
        </h4>
      </div>
      ):(
        ""
      )}
    
    </div>
  );
};

export default Profiledetail;
