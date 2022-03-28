import EmailPasswordAuthSignup from "../components/EmailPasswordAuthSignup";
import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";

import { handleUserProfile } from "../context/handleUserProfile";
const Register = () => {
   const { currentUser } = useContext(AuthContext)

  const Router = useRouter()

  if (currentUser) {
    handleUserProfile();
    Router.push("/")
    return <></>
  } else {
  return <EmailPasswordAuthSignup />;
}}

export default Register;
