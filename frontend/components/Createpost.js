import React, { useState } from "react";
import { useContext , useRef} from "react";
import { auth , db} from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import {  setDoc, doc , serverTimestamp} from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";
// import { NavLink } from "./NavLink";
import NavLink from "../components/NavLink";
import Router from "next/router";

const Createpost=(props) =>{
  // const router = new useRouter();

const messageInputRef=useRef();
const imageInputRef = useRef();

const { currentUser } = useContext(AuthContext);
// const [user] = useAuthState(auth);
// console.log('this is the data releted to user ' + user)
async function addPost() {
  const enteredMessage = messageInputRef.current.value;
  const enteredImage = imageInputRef.current.value;
  const uid= Math.random();
  const creatorUid = currentUser.uid
  await setDoc(
    doc(db,
      "posts",
      `${uid}`),
    {
       createdBy: currentUser.displayName,
      //  association: props.userData.association,
       message: enteredMessage,
       likes: 0,
       comments: null,
       photo: enteredImage,
       video: null,
       createAt: serverTimestamp(),
       id: uid,
       creatorPhoto: currentUser.photoURL,
       creatorUid: creatorUid,
          timestamp: serverTimestamp(),
    }
  )
  // router.push('/')
  Router.reload(window.location.pathname)
   }

   const  [isOpen,setIsOpen]=useState(false)

  const toggleOpen = () => setIsOpen(true);

  // const authUser = JSON.parse(localStorage.getItem('authUser'));

    const menuClass = `${isOpen ? " show" : ""}`;
    

    return (
      <div className="card w-100 shadow-xss rounded-xxl border-0 ps-4 pt-4 pe-4 pb-3 mb-3">
        <div className="card-body p-0">
          <i
            // href="/"
            className="font-xssss fw-600 text-grey-500 card-body p-0 d-flex align-items-center"
          >
            <i className="btn-round-sm font-xs text-primary feather-edit-3 me-2 bg-greylight"></i>
            Create Post
          </i>
        </div>
        <div className="card-body p-0 mt-3 position-relative">
          <figure className="avatar position-absolute ms-2 mt-1 top-5">
            <img
              src={currentUser.photoURL}
              alt="icon"
              className="shadow-sm rounded-circle w30"
            />
          </figure>
          <textarea
            name="message"
            className="h100 bor-0 w-100 rounded-xxl p-2 ps-5 font-xssss text-black-500 fw-500 border-light-md theme-dark-bg"
            cols="30"
            rows="10"
            placeholder="What's on your mind?"
            ref={messageInputRef}
          ></textarea>
          <textarea
            name="photo/video"
            className="h20 bor-0 w-100 rounded-xxl p-2 ps-2 font-xssss text-black-500 fw-500 border-light-md theme-dark-bg"
            cols="30"
            rows="1"
            placeholder="photo/video url?"
            ref={imageInputRef}
          ></textarea>
        </div>
        <div className="card-body d-flex p-0 mt-0">
          {/* <a
            href="#video"
            className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
          >
            <i className="font-md text-danger feather-video me-2"></i>
            <span className="d-none-xs">Live Video</span>
          </a>
          <a
            href="#photo"
            className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
          >
            <i className="font-md text-success feather-image me-2"></i>
            <span className="d-none-xs">Photo/Video</span>
          </a> */}

          <a
            // href="/createEvent"
            href={`/createEvent/${currentUser.uid}`}
            className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
          >
            <i className="font-md text-warning feather-map-pin me-2"></i>
            <span className="d-none-xs">Event</span>
          </a>
          <div className="ms-auto pointer ">
            <a
              className="font-xsss fw-600 text-blue-600 card-body p-0 d-flex align-items-center"
onClick = { addPost }
            >
              <i className="btn-round-sm font-xs text-primary feather-edit-3 me-3 bg-grey"></i>
              Post
            </a>
          </div>
        </div>
      </div>
    );
  }


export default Createpost;


// import React, { useState, useRef } from "react";
// import { setDoc, doc } from "firebase/firestore";
// import { useContext ,useEffect} from "react";
// import { db } from "../firebase/clientApp";
// import Router from "next/router";
// import { AuthContext } from "../context/AuthContext";



// const Createpost = (props) => {

//   const { currentUser } = useContext(AuthContext);
//   const bodyInputRef = useRef();
//   const imageInputRef = useRef();

// async function submitHandler(event) {
//     event.preventDefault();

//     const enteredBody = bodyInputRef.current.value;
//     const enteredImage = imageInputRef.current.value;
//     const enteredId = Math.random().toString();
//     const creatorName = currentUser.displayName
//     const creatorPhoto = currentUser.photoURL
//     const creatorUid = currentUser.uid

//     const meetupData = {
//       body: enteredBody,
//       image: enteredImage,
//       id: enteredId,
//       creatorName: creatorName,
//       creatorPhoto: creatorPhoto,
//       creatorUid: creatorUid

//     };

//     let unsubscribe;
//    await setDoc(
//       doc(db, "users", `${currentUser.displayName}/posts/${meetupData.id}`),
//       {
//         title: meetupData.body,
//         image: meetupData.image,
//         id: meetupData.id,
//         creatorName: creatorName,
//         creatorPhoto: creatorPhoto,
//         creatorUid: creatorUid,
//       }
//     );
//    await setDoc(doc(db, "posts", `${meetupData.id}`), {
//       body: meetupData.body,
//       image: meetupData.image,
//       id: meetupData.id,
//       creatorName: meetupData.creatorName,
//       creatorPhoto: meetupData.creatorPhoto,
//       creatorUid: meetupData.creatorUid,
//     });


// Router.reload(window.location.pathname)


//   }
 

//   return (
//     <div className="card w-100 shadow-xss rounded-xxl border-0 ps-4 pt-4 pe-4 pb-3 mb-3">
//       <div className="card-body p-0">
//         <a className="font-xssss fw-600 text-grey-500 card-body p-0 d-flex align-items-center">
//           <i className="btn-round-sm font-xs text-primary feather-edit-3 me-2 bg-greylight"></i>
//           Create Post
//         </a>
//       </div>
//       <div className="card-body p-0 mt-3 position-relative">
//         <figure className="avatar position-absolute ms-2 mt-1 top-5">
//           <img
//             src={currentUser.photoURL}
//             alt="icon"
//             className="shadow-sm rounded-circle w30"
//           />
//         </figure>
//         <textarea
//           name="message"
//           className="h100 bor-0 w-100 rounded-xxl p-2 ps-5 font-xssss text-black-500 fw-500 border-light-md theme-dark-bg"
//           cols="30"
//           rows="10"
//           placeholder="What's on your mind?"
//           ref={bodyInputRef}
//         ></textarea>
//         <textarea
//           name="photo/video"
//           className="h20 bor-0 w-100 rounded-xxl p-2 ps-2 font-xssss text-black-500 fw-500 border-light-md theme-dark-bg"
//           cols="30"
//           rows="1"
//           placeholder="photo/video url?"
//           ref={imageInputRef}
//         ></textarea>
//       </div>
//       <div className="card-body d-flex p-0 mt-0">
//         <a
//           href="#photo"
//           className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
//         >
//           <i className="font-md text-success feather-image me-2"></i>
//           <span className="d-none-xs">Photo/Video</span>
//         </a>
//         <a
//           href="#activity"
//           className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
//         >
//           <i className="font-md text-warning feather-map-pin me-2"></i>
//           <span className="d-none-xs">Event</span>
//         </a>
//         <div className="ms-auto pointer ">
//           <a
//             className="font-xsss fw-600 text-blue-600 card-body p-0 d-flex align-items-center"
//             onClick={submitHandler}
//           >
//             <i className="btn-round-sm font-xs text-primary feather-edit-3 me-3 bg-grey"></i>
//             Post
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Createpost;






// import React, { useState } from "react";
// import { useContext , useRef} from "react";
// import { auth , db} from "../firebase/clientApp";
// import { useAuthState } from "react-firebase-hooks/auth";
// import {  setDoc, doc , serverTimestamp} from "firebase/firestore";
// import { AuthContext } from "../context/AuthContext";
// import { useRouter } from "next/router";
// // import { NavLink } from "./NavLink";
// import NavLink from "../components/NavLink";
// import Router from "next/router";

// const Createpost=(props) =>{
//   // const router = new useRouter();

// const messageInputRef=useRef();
// const imageInputRef = useRef();

// const { currentUser } = useContext(AuthContext);
// // const [user] = useAuthState(auth);
// // console.log('this is the data releted to user ' + user)
// async function addPost() {
//   const enteredMessage = messageInputRef.current.value;
//   const enteredImage = imageInputRef.current.value;
//   const uid= Math.random();
//   const creatorUid = currentUser.uid
//   await setDoc(
//     doc(db,
//       "posts",
//       `${uid}`),
//     {
//        createdBy: currentUser.displayName,
//       //  association: props.userData.association,
//        message: enteredMessage,
//        likes: 0,
//        comments: null,
//        photo: enteredImage,
//        video: null,
//        createAt: serverTimestamp(),
//        id: uid,
//        creatorPhoto: currentUser.photoURL,
//        creatorUid: creatorUid
//     }
//   )
//   // router.push('/')
//   Router.reload(window.location.pathname)
//    }

//    const  [isOpen,setIsOpen]=useState(false)

//   const toggleOpen = () => setIsOpen(true);

//   // const authUser = JSON.parse(localStorage.getItem('authUser'));

//     const menuClass = `${isOpen ? " show" : ""}`;
    

//     return (
//       <div className="card w-100 shadow-xss rounded-xxl border-0 ps-4 pt-4 pe-4 pb-3 mb-3">
//         <div className="card-body p-0">
//           <a
//             onClick={addPost}
//             // href="/"
//             className="font-xssss fw-600 text-grey-500 card-body p-0 d-flex align-items-center"
//           >
//             <i className="btn-round-sm font-xs text-primary feather-edit-3 me-2 bg-greylight"></i>
//             Create Post
//           </a>
//         </div>
//         <div className="card-body p-0 mt-3 position-relative">
//           <figure className="avatar position-absolute ms-2 mt-1 top-5">
//             <img
//               src={currentUser.photoURL}
//               alt="icon"
//               className="shadow-sm rounded-circle w30"
//             />
//           </figure>
//           <textarea
//             name="message"
//             className="h100 bor-0 w-100 rounded-xxl p-2 ps-5 font-xssss text-black-500 fw-500 border-light-md theme-dark-bg"
//             cols="30"
//             rows="10"
//             placeholder="What's on your mind?"
//             ref={messageInputRef}
//           ></textarea>
//           <textarea
//           name="photo/video"
//           className="h20 bor-0 w-100 rounded-xxl p-2 ps-2 font-xssss text-black-500 fw-500 border-light-md theme-dark-bg"
//           cols="30"
//           rows="1"
//           placeholder="photo/video url?"
//           ref={imageInputRef}
//         ></textarea>
//         </div>
//         <div className="card-body d-flex p-0 mt-0">
//           {/* <a
//             href="#video"
//             className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
//           >
//             <i className="font-md text-danger feather-video me-2"></i>
//             <span className="d-none-xs">Live Video</span>
//           </a>
//           <a
//             href="#photo"
//             className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
//           >
//             <i className="font-md text-success feather-image me-2"></i>
//             <span className="d-none-xs">Photo/Video</span>
//           </a> */}
          
//           <a
//             href="/createEvent"
//             className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
//           >
//             <i className="font-md text-warning feather-map-pin me-2"></i>
//             <span className="d-none-xs">Event</span>
//           </a>
       
//         </div>
       
//       </div>
//     );
//   }


// export default Createpost;


// // import React, { useState, useRef } from "react";
// // import { setDoc, doc } from "firebase/firestore";
// // import { useContext ,useEffect} from "react";
// // import { db } from "../firebase/clientApp";
// // import Router from "next/router";
// // import { AuthContext } from "../context/AuthContext";



// // const Createpost = (props) => {

// //   const { currentUser } = useContext(AuthContext);
// //   const bodyInputRef = useRef();
// //   const imageInputRef = useRef();

// // async function submitHandler(event) {
// //     event.preventDefault();

// //     const enteredBody = bodyInputRef.current.value;
// //     const enteredImage = imageInputRef.current.value;
// //     const enteredId = Math.random().toString();
// //     const creatorName = currentUser.displayName
// //     const creatorPhoto = currentUser.photoURL
// //     const creatorUid = currentUser.uid

// //     const meetupData = {
// //       body: enteredBody,
// //       image: enteredImage,
// //       id: enteredId,
// //       creatorName: creatorName,
// //       creatorPhoto: creatorPhoto,
// //       creatorUid: creatorUid

// //     };

// //     let unsubscribe;
// //    await setDoc(
// //       doc(db, "users", `${currentUser.displayName}/posts/${meetupData.id}`),
// //       {
// //         title: meetupData.body,
// //         image: meetupData.image,
// //         id: meetupData.id,
// //         creatorName: creatorName,
// //         creatorPhoto: creatorPhoto,
// //         creatorUid: creatorUid,
// //       }
// //     );
// //    await setDoc(doc(db, "posts", `${meetupData.id}`), {
// //       body: meetupData.body,
// //       image: meetupData.image,
// //       id: meetupData.id,
// //       creatorName: meetupData.creatorName,
// //       creatorPhoto: meetupData.creatorPhoto,
// //       creatorUid: meetupData.creatorUid,
// //     });


// // Router.reload(window.location.pathname)


// //   }
 

// //   return (
// //     <div className="card w-100 shadow-xss rounded-xxl border-0 ps-4 pt-4 pe-4 pb-3 mb-3">
// //       <div className="card-body p-0">
// //         <a className="font-xssss fw-600 text-grey-500 card-body p-0 d-flex align-items-center">
// //           <i className="btn-round-sm font-xs text-primary feather-edit-3 me-2 bg-greylight"></i>
// //           Create Post
// //         </a>
// //       </div>
// //       <div className="card-body p-0 mt-3 position-relative">
// //         <figure className="avatar position-absolute ms-2 mt-1 top-5">
// //           <img
// //             src={currentUser.photoURL}
// //             alt="icon"
// //             className="shadow-sm rounded-circle w30"
// //           />
// //         </figure>
// //         <textarea
// //           name="message"
// //           className="h100 bor-0 w-100 rounded-xxl p-2 ps-5 font-xssss text-black-500 fw-500 border-light-md theme-dark-bg"
// //           cols="30"
// //           rows="10"
// //           placeholder="What's on your mind?"
// //           ref={bodyInputRef}
// //         ></textarea>
// //         <textarea
// //           name="photo/video"
// //           className="h20 bor-0 w-100 rounded-xxl p-2 ps-2 font-xssss text-black-500 fw-500 border-light-md theme-dark-bg"
// //           cols="30"
// //           rows="1"
// //           placeholder="photo/video url?"
// //           ref={imageInputRef}
// //         ></textarea>
// //       </div>
// //       <div className="card-body d-flex p-0 mt-0">
// //         <a
// //           href="#photo"
// //           className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
// //         >
// //           <i className="font-md text-success feather-image me-2"></i>
// //           <span className="d-none-xs">Photo/Video</span>
// //         </a>
// //         <a
// //           href="#activity"
// //           className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
// //         >
// //           <i className="font-md text-warning feather-map-pin me-2"></i>
// //           <span className="d-none-xs">Event</span>
// //         </a>
// //         <div className="ms-auto pointer ">
// //           <a
// //             className="font-xsss fw-600 text-blue-600 card-body p-0 d-flex align-items-center"
// //             onClick={submitHandler}
// //           >
// //             <i className="btn-round-sm font-xs text-primary feather-edit-3 me-3 bg-grey"></i>
// //             Post
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Createpost;
