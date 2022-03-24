// import React, { Component } from "react";

// const Profiledetail = (props) => {
//   const authUser=JSON.parse(localStorage.getItem('authUser'));
//   let object = props.userData;
//   let detailsObject = {};

//   for (const [key, value] of Object.entries(object)) {
//     if (value !== null) {
//       detailsObject[key] = value;
//     }
//   }

//   return (
//     <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
//       <div className="card-body d-block p-4">
//         <h4 className="fw-700 mb-3 font-xsss text-grey-900">About</h4>
//         <p className="fw-500 text-grey-500 lh-24 font-xssss mb-0">
//          {authUser.description}
//         </p>
//       </div>

//       {authUser.city ?(
//   <div className="card-body d-flex pt-0">
//         <i className="feather-map-pin text-grey-500 me-3 font-lg"></i>
//         <h4 className="fw-700 text-grey-900 font-xssss mt-1">
//         {authUser.city}
//         </h4>
//       </div>
//       ):(
//         ""
//       )}
//     {authUser.facebook?(
//   <div className="card-body d-flex pt-0">
//         <i className="feather-facebook text-grey-500 me-3 font-lg"></i>
//         <h4 className="fw-700 text-grey-900 font-xssss mt-1">
//           <a href={authUser.facebook} target="_blank">
//             {" "}
//             {authUser.name}
//           </a>
//         </h4>
//       </div>
//     ):(
//       ""
//     )}
// {authUser.twitter?(
//   <div className="card-body d-flex pt-0">
//         <i className="feather-twitter text-grey-500 me-3 font-lg"></i>
//         <h4 className="fw-700 text-grey-900 font-xssss mt-1">
//           <a href={authUser.twitter} target="_blank">
//             {" "}
//             {authUser.name}
//           </a>
//         </h4>
//       </div>
// ):(
//   ""
// )}
    
//     {authUser.linkedIn?(
//   <div className="card-body d-flex pt-0">
//         <i className="feather-linkedin text-grey-500 me-3 font-lg"></i>
//         <h4 className="fw-700 text-grey-900 font-xssss mt-1">
//           <a href={authUser.linkedin} target="_blank">
//             {" "}
//             {authUser.name}
//           </a>
//         </h4>
//       </div>
//     ):(
//       ""
//     )}

//     {authUser.instagram?(
//     <div className="card-body d-flex pt-0">
//         <i className="feather-instagram text-grey-500 me-3 font-lg"></i>
//         <h4 className="fw-700 text-grey-900 font-xssss mt-1">
//           <a href={authUser.instagram} target="_blank">
//             {" "}
//             {authUser.name}
//           </a>
//         </h4>
//       </div>
//     ):(
//       ""
//     )}
  
//       {authUser.youtube? (
//   <div className="card-body d-flex pt-0">
//         <i className="feather-youtube text-grey-500 me-3 font-lg"></i>
//         <h4 className="fw-700 text-grey-900 font-xssss mt-1">
//           <a href={authUser.youtube} target="_blank">
//             {" "}
//             {authUser.name}
//           </a>
//         </h4>
//       </div>
//       ):(
//         ""
//       )}
    
//     </div>
//   );
// };

// export default Profiledetail;





import React, { Component } from "react";

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
          <a href={object.facebook} target="_blank">
            {" "}
Facebook
          </a>
        </h4>
      </div>
    ):(
      ""
    )}
{object.twitter?(
  <div className="card-body d-flex pt-0">
        <i className="feather-twitter text-grey-500 me-3 font-lg"></i>
        <h4 className="fw-700 text-grey-900 font-xssss mt-1">
          <a href={object.twitter} target="_blank">
            {" "}
Twitter
          </a>
        </h4>
      </div>
):(
  ""
)}
    
    {object.linkedin?(
  <div className="card-body d-flex pt-0">
        <i className="feather-linkedin text-grey-500 me-3 font-lg"></i>
        <h4 className="fw-700 text-grey-900 font-xssss mt-1">
          <a href={object.linkedin} target="_blank">
            {" "}
Linkedin
          </a>
        </h4>
      </div>
    ):(
      ""
    )}

    {object.instagram?(
    <div className="card-body d-flex pt-0">
        <i className="feather-instagram text-grey-500 me-3 font-lg"></i>
        <h4 className="fw-700 text-grey-900 font-xssss mt-1">
          <a href={object.instagram} target="_blank">
            {" "}
Instagram
          </a>
        </h4>
      </div>
    ):(
      ""
    )}
  
      {object.youtube? (
  <div className="card-body d-flex pt-0">
        <i className="feather-youtube text-grey-500 me-3 font-lg"></i>
        <h4 className="fw-700 text-grey-900 font-xssss mt-1">
          <a href={object.youtube} target="_blank">
            {" "}
Youtube
          </a>
        </h4>
      </div>
      ):(
        ""
      )}
    
    </div>
  );
};

export default Profiledetail;
