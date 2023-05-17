import firebase from "../firebase";
import Park from "./Park";
// import Activity from "./Activity";
import { onValue, getDatabase, ref } from "firebase/database";
import { useState, useEffect } from "react";

const Parklist = () => {
    
  const [parklist, setParklist] = useState([]);
  const [ filters, setFilters ] = useState({ discovery: false });
  
  useEffect(() => {
    // create  a variable that holds our database details
    const database = getDatabase(firebase)
    // create a variable that makes a reference to our database
    const dbRef = ref(database)
    console.log(filters)
    window.filters = filters

    // add an event listener to that variable that will fire
    // from the database, and call that data 'response'

    const arrayOfParks = [];

    onValue(dbRef,(response) => {
      // here we use Firebase's .val() method to parse our database info the way we want it
      //   console.log(response.val().parks)


      const dbObj = response.val().parks;

      for (let key in dbObj){


        const trueActivities = [];
        const allActivities = dbObj[key].activities[0];

        for (let activityName in allActivities){
          if (allActivities[activityName] === true){
            activityName = activityName.replace('xcskiing', 'cross country skiing')
            activityName = activityName.replace('mountainbiking', 'mountain biking')
            trueActivities.push(activityName);
          }
        }

        //console.log(dbObj[key].name, trueActivities)

        const parkObj = {
          id: key,
          title: dbObj[key].name,
          location: dbObj[key].location,
          activity: trueActivities
          // activity: ["biking", "swimming", "dancing"]
        }

        // if(trueActivities.includes('discovery'))
        
        if (Object.keys(filters)
          .filter(filter => filters[filter])
          .every(filter => allActivities[filter]))
            arrayOfParks.push(parkObj)

      }

    //   ACTIVITIES
      
    //   console.log(arrayOfParks[0].activity)
      
    //   const parkActivity = arrayOfParks[0].activity

    //   const arrayOfActivities = []

    //   for (let key in parkActivity){

    //     console.log(parkActivity[key])

    //     for (let item in parkActivity[key] ){
    //         console.log(parkActivity[key][item])
    //         if (parkActivity[key][item] === true) {
    //             arrayOfActivities.push(item)
    //         }
    //     }
    //       console.log(arrayOfActivities)

    //   }
    //   End of activities
    
    
    
      setParklist(arrayOfParks)

      
    });

  }, [filters]);

  const toggle = (event) => {
    const activity = event.target.id
//    filters[activity] = !filters[activity]
    setFilters({
      ...filters,
      ...{[activity]: !filters[activity]}
    })
  }


  return (
    <section>
        <h2>Gorgeous list of parks</h2>
        discovery:<input type="checkbox" id="discovery" onClick={toggle}/>
        <ul className="parklist">
            {
                parklist.map(({id,title, location, activity}) => {
                    return <Park
                                key={id}
                                title={title}
                                id={id}
                                location={location}
                                activity={activity}
                    />
                })
            }
           
        </ul>
    </section>
  )
}

export default Parklist;