import firebase from "../firebase";
import {get, getDatabase, ref, remove} from 'firebase/database';

// destructure the title and id value from within the props object

const Park = ({ id, title }) => {

    // define an event handler which will use the unique park id to remove the park from the database

    const handleClick = () => {
        const database = getDatabase(firebase);
        const parkId = id;
        const dbRef = ref(database/`${id}`);
        remove(dbRef)
    }

    return (
        <li>
            <p>{title}</p>
            <button onClick={ handleClick } >I have visited this park✅</button>
        </li>
    )
}

export default Park;