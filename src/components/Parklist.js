import firebase from "../firebase";
import Park from "./Park";
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

    const arrayOfParks = [];

    onValue(dbRef,(response) => {

      // here we use Firebase's .val() method to parse our database info the way we want it
      const dbObj = response.val().parks;

      for (let key in dbObj){


        const trueActivities = [];
        const allActivities = dbObj[key].activities[0];

        for (let activityName in allActivities){
          if (allActivities[activityName] === true){
            // Change how data's wording is display for a better user experience
            activityName = activityName.replace('xcskiing', 'cross country skiing')
            activityName = activityName.replace('mountainbiking', 'mountain biking')
            activityName = activityName.replace('darksky', 'dark sky preserve')
            activityName = activityName.replace('discgolf', 'disc golf course')
            activityName = activityName.replace('dogsledding', 'dog sledding')
            activityName = activityName.replace('horseback', 'horseback riding')
            activityName = activityName.replace('kite', 'kiteboarding')
            activityName = activityName.replace('night-hiking', 'overnight hiking')
            activityName = activityName.replace('skating', 'ice skating')

            trueActivities.push(activityName);
          }
        }

        const parkObj = {
          id: key,
          title: dbObj[key].name,
          location: dbObj[key].location,
          activity: trueActivities
          // ex. activity: ["biking", "swimming", "dancing"]
        }

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
          // if there is a match between checked activity(toggle function) and said activity in a park, display the park
          arrayOfParks.push(parkObj);
        }


         // ALTERNATIVE FILTERING METHOD: Object.keys returns an array of the keys (ie. discovery)
          // .filter(key => filters[key]) is a function on the array that returns elements of the array where the condition function returns true
          // filter function access the filters variable based controlled by the toggle function below
          // .every takes the array of elements, runs a function on every key. If every case the condition function returns true, .every returns true.(ex. if biking and fishing were true, .every is true)
          // if (Object.keys(filters)
          //   .filter(key => filters[key])
          //   .every(key => allActivities[key])) {
          //     arrayOfParks.push(parkObj)
          // }

      }    
  
      setParklist(arrayOfParks)
  
    });

  }, [filters]);

  // add an event listener to that variable that will fire
  const toggle = (event) => {

    const activity = event.target.id
    const newFilters = {...filters};

    newFilters[activity] = event.target.checked;
    setFilters(newFilters);
  }


  return (
    <section>
      <div className="wrapper">
        <fieldset className="activityChoice" >
          <legend>Choose your preferred activites</legend>
          <div className="activityFlex">
            <label htmlFor="biking">Biking</label><input type="checkbox" id="biking" onClick={toggle}/>

            <label htmlFor="mountainbiking">Mountain Biking</label><input type="checkbox" id="mountainbiking" onClick={toggle}/>
          
            <label htmlFor="darksky">Dark Sky Preserves</label><input type="checkbox" id="darksky" onClick={toggle}/>
            <label htmlFor="discgolf">Disc Golf</label><input type="checkbox" id="discgolf" onClick={toggle}/>

            <label htmlFor="discovery">Discovery Program</label><input type="checkbox" id="discovery" onClick={toggle}/>

            <label htmlFor="hiking">Hiking</label><input type="checkbox" id="hiking" onClick={toggle}/>

            <label htmlFor="night-hiking">Overnight Hiking</label><input type="checkbox" id="night-hiking" onClick={toggle}/>

            <label htmlFor="horseback">Horseback Riding</label><input type="checkbox" id="horseback" onClick={toggle}/>

            <label htmlFor="hunting">Hunting</label><input type="checkbox" id="hunting" onClick={toggle}/>

            <label htmlFor="rockclimbing">Rock Climbing</label><input type="checkbox" id="rockclimbing" onClick={toggle}/>
          </div>
        </fieldset>

        <fieldset className="activityChoiceWater" >
          <legend>Water-Based Activities</legend>
          <div className="activityFlex">
            <label htmlFor="swimming">Swimming</label><input type="checkbox" id="swimming" onClick={toggle}/>

            <label htmlFor="fishing">Fishing</label><input type="checkbox" id="fishing" onClick={toggle}/>

            <label htmlFor="boating">Boating</label><input type="checkbox" id="boating" onClick={toggle}/>

            <label htmlFor="canoeing">Canoeing</label><input type="checkbox" id="canoeing" onClick={toggle}/>

            <label htmlFor="rafting">Whitewater Rafting</label><input type="checkbox" id="rafting" onClick={toggle}/>

            <label htmlFor="kite">Kite Surfing</label><input type="checkbox" id="kite" onClick={toggle}/>
          </div>
        </fieldset>

        <fieldset className="activityChoiceWinter" >
          <legend>Winter Activities</legend>
          <div className="activityFlex">
            <label htmlFor="dogsledding">Dog Sledding</label><input type="checkbox" id="dogsledding" onClick={toggle}/>
            <label htmlFor="skating">Ice Skating</label><input type="checkbox" id="skating" onClick={toggle}/>

            <label htmlFor="snowmobiling">Snowmobiling</label><input type="checkbox" id="snowmobiling" onClick={toggle}/>

            <label htmlFor="snowshoeing">Snowshoeing</label><input type="checkbox" id="snowshoeing" onClick={toggle}/>

            <label htmlFor="tobogganing">Tobaggoning</label><input type="checkbox" id="tobogganing" onClick={toggle}/>

            <label htmlFor="xcskiing">Cross Country Skiing</label><input type="checkbox" id="xcskiing" onClick={toggle}/>
          </div>
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
      </div>
    </section>
  )
}

export default Parklist;