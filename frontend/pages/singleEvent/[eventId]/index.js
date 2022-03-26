import Event from "../../../components/Event";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/clientApp";

const singleEvent = (props) => {

    return <Event events={props.selectedEvent}
    key={props.selectedEvent.id}
                  id={props.selectedEvent.id}
                  image={props.selectedEvent.image}
                  month={props.selectedEvent.month}
                  date={props.selectedEvent.date}
                  createdBy={props.selectedEvent.createdBy}
                  title={props.selectedEvent.title}
                  association={props.selectedEvent.association}
                  description={props.selectedEvent.description}/>;
                  
  }


export default singleEvent;


export async function getStaticPaths() {
  let eventIds = [];

  const q = query(collection(db, "events"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    eventIds.push({ id: doc.data().id });

  });

  return {
    fallback: "blocking",
    paths: eventIds.map((event) => ({
      params: { eventId: event.id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  console.log(eventId)
  let selectedEvent = {};
  const q = query(collection(db, "events"), where("id", "==", parseFloat(eventId)));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {

      (selectedEvent.title= doc.data().title),
      (selectedEvent.image= doc.data().image),
      (selectedEvent.id= doc.data().id),
      (selectedEvent.createdBy= doc.data().createdBy),
      (selectedEvent.month= doc.data().month),
      (selectedEvent.date= doc.data().date),
      (selectedEvent.association= doc.data().association),
      (selectedEvent.description= doc.data().description);
  });

  return {
    props: {
      selectedEvent,
    },
  };
}
