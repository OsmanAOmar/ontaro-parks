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
          title: dbObj[key].park.name,
          activity: dbObj[key].activities
        }



        console.log(parkObj)

        arrayOfParks.push(parkObj)
      }

      setParklist(arrayOfParks)

      
    });
  }, []);

  
    // Create a state variable to store selected activites. Initialize as an empty array
    const [selectedActivities, setSelectedActivities] = useState([]);


    // Update the state when an activity is selected or deselected
    // Attach an "onChange" event handler to each radio button input
    const handleActivityChange = (event) => {
        const { value } = event.target;
        const updatedActivities = [...selectedActivities];
      
        if (updatedActivities.includes(value)) {
          // Activity is already selected, so remove it
          const index = updatedActivities.indexOf(value);
          updatedActivities.splice(index, 1);
        } else {
          // Activity is not selected, so add it
          updatedActivities.push(value);
        }
      
        setSelectedActivities(updatedActivities);
      };
      
      const filteredParks = parklist.filter((park) => {
        return selectedActivities.every((activity) => park.activities[activity]);
      });

  return (
    <section>

<div>
            <h2>Choose your park activities!</h2>
            <form action="">
                <label htmlFor="park" className="sr-only">Hiking</label>
                <input type="radio" id="hiking" name="orderType" value="hiking" required onChange={handleActivityChange} />
                
                <label htmlFor="park" className="sr-only">Swimming</label>
                <input type="radio" id="swimming" name="orderType" value="swimming" required onChange={handleActivityChange} 

                />

            </form>

            <ul>
  {filteredParks.map((park) => (
    <li key={park.id}>{park.name}</li>
  ))}
</ul>

        </div>


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