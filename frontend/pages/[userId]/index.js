import UserPage from "../../components/UserPage";

import { collection, query, where, getDocs,orderBy } from "firebase/firestore";
import { db, auth } from "../../firebase/clientApp";
const User = (props) => {
  return (
    <UserPage
      postsData={props.posts}
      creatorName={props.selectedUser.creatorName}
      userId={props.selectedUser.userId}
      about={props.selectedUser.about}
      email={props.selectedUser.email}
      photoURL={props.selectedUser.photoURL}
      location={props.selectedUser.location}
      facebook={props.selectedUser.facebook}
      instagram={props.selectedUser.instagram}
      youtube={props.selectedUser.youtube}
      linkedin={props.selectedUser.linkedIn}
      twitter={props.selectedUser.twitter}
      name={props.selectedUser.name}
      association={props.selectedUser.association}
      coverURL={props.selectedUser.coverURL}
      timestamp={props.selectedUser.timestamp}
    />
  );
};

export default User;

export async function getStaticPaths() {
  let usersIds = [];

  const q = query(collection(db, "users"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    usersIds.push({ id: doc.data().userId });
  });

  return {
    fallback: "blocking",
    paths: usersIds.map((user) => ({
      params: { userId: user.id },
    })),
  };
}

export async function getStaticProps(context) {
  const userId = context.params.userId;
 let posts = [];
  let selectedUser = {};

  const q = query(collection(db, "users"), where("userId", "==", userId));
  const q2 = query(
    collection(db, "posts"),
    where("creatorUid", "==", userId),
    orderBy("timestamp", "desc")
  );

  const querySnapshot = await getDocs(q);
  const querySnapshot2 = await getDocs(q2);
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  querySnapshot2.forEach((doc) => {

    posts.push({
      likes: doc.data().likes,
      body: doc.data().message,
      image: doc.data().photo,
      id: doc.data().id,
      creatorName: doc.data().createdBy,
      creatorPhoto: doc.data().creatorPhoto,
      timestamp: doc
        .data()
        .timestamp.toDate()
        .toLocaleTimeString("en-GB", options),
      userName: doc.data().createdBy,
    });
  });
  querySnapshot.forEach((doc) => {
    if (doc.data().youtube !== undefined) {
  (selectedUser.youtube = doc.data().youtube)
    }else{
  selectedUser.youtube = null;
    }
  if (doc.data().location !== undefined) {
    selectedUser.location= doc.data().location;
  } else {
    selectedUser.location = null;
  }
  if (doc.data().twitter !== undefined) {
    selectedUser.twitter = doc.data().twitter;
  } else {
    selectedUser.twitter = null;
  }
  if (doc.data().facebook !== undefined) {
    selectedUser.facebook = doc.data().facebook;
  } else {
    selectedUser.facebook = null;
  }
  if (doc.data().instagram !== undefined) {
    selectedUser.instagram = doc.data().instagram;
  } else {
    selectedUser.instagram = null;
  }
  if (doc.data().about !== undefined) {
    selectedUser.about = doc.data().about;
  } else {
    selectedUser.about = null;
  }
  if (doc.data().linkedIn !== undefined) {
    selectedUser.linkedIn = doc.data().linkedIn;
  } else {
    selectedUser.linkedin = null;
  }
  
  if (doc.data().photoURL !== undefined) {
    selectedUser.photoURL = doc.data().photoURL;
  } else {
    selectedUser.photoURL = null;
  }

  if (doc.data().association !== undefined) {
    selectedUser.association = doc.data().association;
  } else {
    selectedUser.association = null;
  }

  if (doc.data().coverURL !== undefined) {
    selectedUser.coverURL = doc.data().coverURL;
  } else {
    selectedUser.coverURL = null;
  }
  

    (selectedUser.email = doc.data().email),
      (selectedUser.name = doc.data().name),
      (selectedUser.userId = doc.data().userId);


  });
  return {
    props: {
      selectedUser,
      posts
    },
  };
}
