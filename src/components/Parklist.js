import firebase from "../firebase";
import Park from "./Park";
import { onValue, getDatabase, ref } from "firebase/database";
import { useState, useEffect } from "react";

const Parklist = () => {
    
    const [parklist, setParklist] = useState([]);
  
    useEffect(() => {
    // create  a variable that holds our database details
    const database = getDatabase(firebase)
    // create a variable that makes a reference to our database
    const dbRef = ref(database)

    // add an event listener to that variable that will fire
    // from the database, and call that data 'response'

    const arrayOfParks = [];

    onValue(dbRef,(response) => {

    // here we use Firebase's .val() method to parse our database info the way we want it
    //   console.log(response.val()[0])


      const dbObj = response.val();

      for (let key in dbObj){

        const parkObj = {
          id: key,
          title: dbObj[key].park.name
        }

        console.log(parkObj)

        arrayOfParks.push(parkObj)
      }

      setParklist(arrayOfParks)

      
    });
  }, []);

  return (
    <section>
        <h2>Gorgeous list of parks</h2>
        <ul className="parklist">
            {
                parklist.map(({id,title}) => {
                    return <Park
                                key={id}
                                title={title}
                                id={id}
                    />
                })
            }
        </ul>
    </section>
  )
}

export default Parklist;