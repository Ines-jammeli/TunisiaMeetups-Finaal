import  { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";
import { collection, query, where, getDocs } from "firebase/firestore";

import db from "../firebase/clientApp"

import { handleUserProfile } from "../context/handleUserProfile";

import EmailPasswordAuthLogin from "../components/EmailPasswordAuthLogin";

const Login = () => {

  
    const { currentUser } = useContext(AuthContext)
  const Router = useRouter()

  if (currentUser) {
   
    handleUserProfile();
    Router.push("/home")
    return <></>
  } else {
  return <EmailPasswordAuthLogin />;
};
}

export default Login
