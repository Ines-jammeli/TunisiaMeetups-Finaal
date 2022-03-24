import { useContext } from "react";
import { db } from "../firebase/clientApp";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";
import { collection, query, where, getDocs } from "firebase/firestore";


import Events from "../components/Events"


const EventList =(props)=>{
    return (
        <Events  eventsData={props}/>
    )
    }



    export default EventList;


    export async function getStaticProps() {
        let events = [];
      //how to get the association name here
        const q = query(collection(db, "events"), where("association", "==", 'association1')) ;
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          events.push({
            title: doc.data().title,
            image: doc.data().image,
            id: doc.data().id,
            cretedBy: doc.data().createdBy,
            createByPhoto: doc.data().createByPhoto,
            email: doc.data().email,
            date: doc.data().date,
            month: doc.data().month,
            phone: doc.data().phone,
            description: doc.data().description,
            city: doc.data().city,
            association: doc.data().association,
          });
        });
      
        return {
          props: {
            events,
          },
          revalidate: 2,
        };
      }