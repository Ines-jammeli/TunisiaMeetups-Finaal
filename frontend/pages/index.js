
import Landing from "../components/Landing"
import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";


export default function Home() {
      const { currentUser } = useContext(AuthContext)
  const Router = useRouter()

  if (currentUser) {

    Router.push("/home")
    return <></>
  } else {
  return (

   <Landing/>
  );
  }
}
