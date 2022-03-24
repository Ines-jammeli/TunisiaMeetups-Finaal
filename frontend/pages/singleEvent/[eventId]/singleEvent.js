import Event from "../../../components/Event";

const singleEvent = (props) => {

    return <Event events={props}/>;
  }


export default singleEvent;

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  console.log(eventId);
 let events = [];

  const q = query(collection(db, "events"), where("id", "==", eventId));

  const querySnapshot = await getDocs(q);
  
  querySnapshot.forEach((doc) => {
    // console.log(doc.data().message);
    events.push({
      title: doc.data().title,
      image: doc.data().image,
      id: doc.data().id,
      createdBy: doc.data().createdBy,
      month: doc.data().month,
      date: doc.data().date,
    });
  });

  return {
    props: {
      events,
    },
  };
}
