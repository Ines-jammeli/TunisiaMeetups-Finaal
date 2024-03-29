import { doc, increment, updateDoc } from "firebase/firestore";
import React, { Component, useState } from "react";
import db from "../firebase/clientApp"
export default function Heart(props) {
  console.log(props)

const [click,setClick]=useState(false)
  const addHeart = async () => {
  
      await updateDoc(doc(db, "posts", `${props.id}`), {
        likes: increment(1)
      });
      setClick(true);
      Router.reload(window.location.pathname);
  };

  const removeHeart = async () => {
      await updateDoc(doc(db, "posts", `${props.id}`), {
        likes: increment(-11),
      });
      Router.reload(window.location.pathname);
      setClick(false);
  };

  return !click ? (
    <button onClick={removeHeart}>💔 Unheart</button>
  ) : (
    <button onClick={addHeart}>💗 Heart</button>
  );
}
