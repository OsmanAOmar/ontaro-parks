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
        
        //

        let matchedFilteredActivity = true;
        for (const activity in filters) {
          // for example, if you want biking...
          if (filters[activity] === true
            // ...and the park doesn't have biking...
            && allActivities[activity] === false) {
              // ...do not display the park
              matchedFilteredActivity = false;
          }
        }
        if (matchedFilteredActivity === true) {
          // if there is a match between checked activity and said activity in a park, display the park
          arrayOfParks.push(parkObj);
        }


         // Object.keys returns an array of the keys (ie. discovery)
        // .filter(key => filters[key]) is a function on the array that returns elements of the array where the condition function returns true
        // filter function access the filters variable based controlled by the toggle function below
        // .every takes the array of elements, runs a function on every key. If every case the condition function returns true, .every returns true.(ex. if biking and fishing were true, .every is true)
        // if (Object.keys(filters)
        //   .filter(key => filters[key])
        //   .every(key => allActivities[key])) {
        //     arrayOfParks.push(parkObj)
        // }

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

    const newFilters = {...filters};
    newFilters[activity] = event.target.checked;
    setFilters(newFilters);
    // setFilters({
    //   ...filters,
    //   ...{[activity]: event.target.checked}
    // })
  }


  return (
    <section>
        <h2>Choose your preferred activites</h2>
        <fieldset>
          Biking:<input type="checkbox" id="biking" onClick={toggle}/>
          Boating:<input type="checkbox" id="boating" onClick={toggle}/>
          Canoeing:<input type="checkbox" id="canoeing" onClick={toggle}/>
          Dark Sky Preserves:<input type="checkbox" id="darksky" onClick={toggle}/>
          Disc Golf:<input type="checkbox" id="discgolf" onClick={toggle}/>
          Discovery Program:<input type="checkbox" id="discovery" onClick={toggle}/>
          Dog Sledding:<input type="checkbox" id="dogsledding" onClick={toggle}/>
          Fishing:<input type="checkbox" id="fishing" onClick={toggle}/>
          Hiking:<input type="checkbox" id="hiking" onClick={toggle}/>
          Overnight Hiking:<input type="checkbox" id="night-hiking" onClick={toggle}/>
          Horseback Riding:<input type="checkbox" id="horseback" onClick={toggle}/>
          Hunting:<input type="checkbox" id="hunting" onClick={toggle}/>
          Kite Surfing:<input type="checkbox" id="kite" onClick={toggle}/>
          Mountaing Biking:<input type="checkbox" id="mountainbiking" onClick={toggle}/>
          Whitewater Rafting:<input type="checkbox" id="rafting" onClick={toggle}/>
          Rock Climbing:<input type="checkbox" id="rockclimbing" onClick={toggle}/>
          Ice Skating:<input type="checkbox" id="skating" onClick={toggle}/>
          Snowmobiling:<input type="checkbox" id="snowmobiling" onClick={toggle}/>
          Snowshoeing:<input type="checkbox" id="snowshoeing" onClick={toggle}/>
          Swimming:<input type="checkbox" id="swimming" onClick={toggle}/>
          Tobaggoning:<input type="checkbox" id="tobogganing" onClick={toggle}/>
          Cross Country Skiing:<input type="checkbox" id="xcskiing" onClick={toggle}/>
        </fieldset>
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