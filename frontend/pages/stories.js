
import Story from "../components/Story"
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../firebase/clientApp";

const Stories =(props)=>{
    return(


        <Story  postsData={props}/>
    )

}

export default Stories



export async function getStaticProps() {
    let posts = [];
  
    const q = query(collection(db, "posts") , where("photo", "!=", ''));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data().body);
      posts.push({
        body: doc.data().message,
        image: doc.data().photo,
        id: doc.data().id,
        userName: doc.data().createdBy,
        creatorPhoto: doc.data().creatorPhoto,
      });
    });
  
    return {
      props: {
        posts,
      },
      revalidate: 2,
    };
  }