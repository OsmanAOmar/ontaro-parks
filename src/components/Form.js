// import { useEffect, useState } from "react";
// import firebase from "../firebase";
// import { getDatabase, ref, push, set } from "firebase/database";

// const Form = () => {

//     // Create a state variable to store selected activites. Initialize as an empty array
//     const [selectedActivities, setSelectedActivities] = useState([]);


//     // Update the state when an activity is selected or deselected
//     // Attach an "onChange" event handler to each radio button input
//     const handleActivityChange = (event) => {
//         const { value } = event.target;
//         const updatedActivities = [...selectedActivities];
      
//         if (updatedActivities.includes(value)) {
//           // Activity is already selected, so remove it
//           const index = updatedActivities.indexOf(value);
//           updatedActivities.splice(index, 1);
//         } else {
//           // Activity is not selected, so add it
//           updatedActivities.push(value);
//         }
      
//         setSelectedActivities(updatedActivities);
//       };
      
//       const filteredParks = parklist.filter((park) => {
//         return selectedActivities.every((activity) => park.activities[activity]);
//       });
      




//     return (
//         <div>
//             <h2>Choose your park activities!</h2>
//             <form action="">
//                 <label htmlFor="park" className="sr-only">Hiking</label>
//                 <input type="radio" id="hiking" name="orderType" value="hiking" required onChange={handleActivityChange}/>
                
//                 <label htmlFor="park" className="sr-only">Swimming</label>
//                 <input type="radio" id="swimming" name="orderType" value="swimming" required onChange={handleActivityChange} 

//                 />

//             </form>

//             <ul>
//   {filteredParks.map((park) => (
//     <li key={park.id}>{park.name}</li>
//   ))}
// </ul>

//         </div>
//     )
// }

// export default Form;