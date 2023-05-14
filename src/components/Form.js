import { useEffect, useState } from "react";
import firebase from "../firebase";
import { getDatabase, ref, push, set } from "firebase/database";

const Form = () => {
    const [ radioValue, setRadioValue ] = useState("");

    useState(() => {
        setRadioValue("hiking");
    }, [])

    const changeSelection = (e) => {
        setRadioValue(e.target.value);
    }

    return (
        <div>
            <h2>Choose your park activities!</h2>
            <form action="">
                <label htmlFor="park" className="sr-only">Hiking</label>
                <input type="radio" id="hiking" name="orderType" value="hiking" required onChange={changeSelection} checked={radioValue === 'hiking'}/>
                
                <label htmlFor="park" className="sr-only">Swimming</label>
                <input type="radio" id="swimming" name="orderType" value="swimming" required onChange={changeSelection} checked={radioValue === 'swimming'}

                />

            </form>
        </div>
    )
}

export default Form;