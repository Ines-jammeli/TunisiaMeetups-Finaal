import React, { Fragment } from "react";
import { useContext , useRef} from "react";
import Header from "../components/Header";
import Appfooter from "../components/Appfooter";
import Createpost from "../components/Createpost"
import Postview from "../components/Postview";
import { AuthContext } from "../context/AuthContext";

const HomePage =(props)=> {
  const { currentUser } = useContext(AuthContext);
 return (
   <Fragment>
     <Header />

     <div className="main-content right-chat-active">
       <div className="middle-sidebar-bottom">
         <div className="middle-sidebar-left pe-0">
           <div className="row">
             <div className="col-xl-12 col-xxl-12 col-lg-11">
             <Createpost userData={props} />

               {props.postsData.posts.map((post) => (
                 <Postview
                   key={post.id}
                   id={post.id}
                   image={post.image}
                   body={post.body}
                   creatorName={post.userName}
                   creatorPhoto={post.creatorPhoto}
                   likes={post.likes}
                   timestamp={post.timestamp}
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
  }


export default HomePage;

