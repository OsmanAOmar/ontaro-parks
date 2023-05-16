// import { useEffect, useState } from "react";
// import firebase from "../firebase";
// import Park from "./Park";
// import { get, getDatabase, onValue, ref, } from "firebase/database";

// const Activity = () => {

//     const [ activityList, setActivityList ] = useState([])

//     useEffect( () => {
//         const database = getDatabase(firebase)
//         const dbRef = ref(database)

//         const arrayOfActivities = [];

//         onValue (dbRef, (response) => {
//             // console.log(response.val().parks)

//             const dbObj = response.val().parks;

//             for (let key in dbObj){

//                 const actObj = {
//                     activity: dbObj[key].activities
//                 }
                
//                 const list = (actObj.activity);

//                 for (let key in list){
//                     console.log(list[key])

//                     for (let item in list[key]){
//                         // console.log(list[key][item])
//                         if (list[key][item] === true){
//                             arrayOfActivities.push(item)
//                         }
//                     }

//                     console.log(arrayOfActivities)


//                 }
//             //    console.log(arrayOfActivities.map(actObj))
//             }
           
//             setActivityList(arrayOfActivities)
            
//         })
        
//     }, [])

// }

// export default Activity;