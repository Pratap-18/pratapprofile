import React from 'react'
import './Home.css'
import Image from './../../image/home.jpg'
import { useHistory } from "react-router-dom";


export function Home() {
    const history = useHistory();

    const handleClick = () => {
        let path = `/contact`;
        history.push(path);
    }

    return (
        <div>

            <section>
                {/* <img src={Image} /> */}
                <h3>Hi, i'm Pratap. I degin and build <br /> user interface</h3>
                <button onClick={handleClick}>HIRE ME</button>
            </section>
        </div>
    )
}


