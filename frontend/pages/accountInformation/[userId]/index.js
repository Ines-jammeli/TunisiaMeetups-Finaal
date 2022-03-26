import Info from "../../../components/Info"
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../../../firebase/clientApp";

const accountInfo=(props)=>{

    return(
<Info 
userData={props.selectedUser}
/>
    )
}
export default accountInfo;


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
    let selectedUser = {};

    const q = query(collection(db, "users"), where("userId", "==", userId));

  
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      if (doc.data().youtube !== undefined) {
    (selectedUser.youtube = doc.data().youtube)
      }else{
    selectedUser.youtube = null;
      }
    if (doc.data().city !== undefined) {
      selectedUser.location= doc.data().city;
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

    if (doc.data().association !== undefined) {
        selectedUser.association = doc.data().association;
      } else {
        selectedUser.association = null;
      }

    if (doc.data().instagram !== undefined) {
      selectedUser.instagram = doc.data().instagram;
    } else {
      selectedUser.instagram = null;
    }
    if (doc.data().description !== undefined) {
      selectedUser.about = doc.data().description;
    } else {
      selectedUser.about = null;
    }
    if (doc.data().linkedIn !== undefined) {
      selectedUser.linkedIn = doc.data().linkedIn;
    } else {
      selectedUser.linkedIn = null;
    }
    
    if (doc.data().photoURL !== undefined) {
      selectedUser.photoURL = doc.data().photoURL;
    } else {
      selectedUser.photoURL = null;
    }
    if (doc.data().coverURL !== undefined) {
        selectedUser.coverURL = doc.data().coverURL;
      } else {
        selectedUser.coverURL = null;
      }
    
  
      (selectedUser.email = doc.data().email),
        (selectedUser.name = doc.data().name),
        (selectedUser.phone = doc.data().phone),
        (selectedUser.userId = doc.data().userId);
  
  
    });
    return {
      props: {
        selectedUser,
      },
    };
  }
  