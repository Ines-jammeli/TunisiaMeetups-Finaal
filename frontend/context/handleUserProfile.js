import {
  setDoc,
  doc,
  getDoc

} from "firebase/firestore";
import  {useEffect } from "react";
import { auth, db } from "../firebase/clientApp";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

export async function handleUserProfile() {
  const [user] = useAuthState(auth);
console.log(user.uid);
const docRef = doc(db, "users", `${user.displayName}`);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
    setDoc(doc(db, "users", `${user.displayName}`), {
      userId: user.uid,
      email: user.email,
      name: user.displayName,
      phone: user.phoneNumber,
      createAt: user.metadata.creationTime,
      photoURL: user.photoURL,
      location: null,
      association: null,
      instagram: null,
      facebook: null,
      linkedin: null,
      youtube: null,
      twitter: null,
      coverURL: null,
      about: null,
    });
  }


};
  
