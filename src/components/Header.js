import { useEffect } from "react";

const Header = () => {

    useEffect( () => {
        document.title = "Ontario Parks";
    }, [] );

    return (
        <header>
            <div className="wrapper">
                <h1>Toronto's Closest Provincial Parks</h1>
            </div>
        </header>
    )
}

export default Header;