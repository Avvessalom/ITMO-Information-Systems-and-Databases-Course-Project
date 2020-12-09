import React, {Fragment} from "react";
import Image from "react-bootstrap/Image";
import BackgroundHeader from "../assets/images/Naruto_logo.svg"

const BackgroundHead = {
    backgroundImage: 'url('+ BackgroundHeader+')'
}

export const Home = () => {
    return (
        <header className="element">
            <h1>js</h1>
            <div style={BackgroundHead}> </div>
        </header>
    )
}
