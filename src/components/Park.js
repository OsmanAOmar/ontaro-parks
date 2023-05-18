// destructure the title and id value from within the props object
const Park = ({ id, title, location, activity }) => {
    return (
        <section className="allParksContainer" >
            <div className="wrapper">
                <div className="parkContainer">
                    <li className="parks" >
                        <h2>{title} Provincial Park in {location}, Ontario</h2>
                        <h3>This park has the following:</h3>
                        <ul>
                            {
                                activity.map((activityString, index) =>{
                                    return (
                                        <li key={index} >{activityString}</li>
                                    )
                                })
                            }
                        </ul>
                    </li>
                </div>
            </div>
        </section>
    )
}

export default Park;