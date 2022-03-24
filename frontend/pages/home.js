import HomePage from "../components/HomePage";
import { useContext } from "react";
import { collection, query, getDocs,orderBy } from "firebase/firestore";
import { db } from "../firebase/clientApp";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";
const Home = (props) => {
console.log(props)
      const { currentUser } = useContext(AuthContext)
  const Router = useRouter()

  if (!currentUser) {

    Router.push("/")
    return <></>
  } else {
  return (<HomePage postsData={props} />
  )
};
}
export default Home;



export async function getStaticProps() {
  let posts = [];

  const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
  const querySnapshot = await getDocs(q);
   const options = { year: "numeric", month: "numeric", day: "numeric" };
  querySnapshot.forEach((doc) => {
    console.log(doc.data().body);
    posts.push({
      body: doc.data().message,
      image: doc.data().photo,
      id: doc.data().id,
      userName: doc.data().createdBy,
      creatorPhoto: doc.data().creatorPhoto,
      likes: doc.data().likes,
      timestamp: doc
        .data()
        .timestamp.toDate()
        .toLocaleTimeString("en-GB", options),
    });
  });

  return {
    props: {
      posts,
    },
    revalidate: 2,
  };
}