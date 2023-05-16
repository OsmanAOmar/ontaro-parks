import firebase from "../firebase";
import {get, getDatabase, ref, remove} from 'firebase/database';

// destructure the title and id value from within the props object

const Park = ({ id, title, location, activity }) => {

    // define an event handler which will use the unique park id to remove the park from the database

    const handleClick = () => {
        const database = getDatabase(firebase);
        const parkId = id;
        const dbRef = ref(database/`${id}`);
        remove(dbRef)
    }

    return (
        <ul>
            <p>{title} Provincial Park in {location}, Ontario</p>
            <p>This park has the following:</p>
            <li key={activity}></li>
            <button onClick={ handleClick } >I have visited this park✅</button>
        </ul>
    )
}

export default Park;