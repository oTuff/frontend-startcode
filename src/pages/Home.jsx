import React from 'react';
import {Outlet} from "react-router-dom";
import SignUpHomeBtn from "../components/SignUpHomeBtn.jsx";
// import BookNowHomeBtn from "../components/BookNowHomeBtn.jsx";
// import ptbackground from "../images/pt2.png"
import "../styles/main.css";
import userFacade from "../utils/userFacade.js";

function Home({loggedIn, setLoggedIn}) {

    return (
        <div>
            {/*<div className="pt-img" style={{*/}
            {/*    // backgroundImage: `url(${ptbackground})`*/}
            {/*}}>*/}

                {/*{!loggedIn ? <h1 className="home-h1">JOIN ME NOW!</h1> :*/}
                {/*    <h1 className="home-h1">Welcome {userFacade.getUserName()}</h1>}*/}
                {/*<h3 className="home-h3">Start your training adventure today</h3>*/}

                {/*{!loggedIn ? (<SignUpHomeBtn setLoggedIn={setLoggedIn}/>) :*/}
                {/*    (<BookNowHomeBtn setLoggedIn={setLoggedIn}/>)}*/}
            <div className="contentleft">
                <h2>About me</h2>
                <p>
                    Join me now, and let me help you!
                </p>
            </div>

            <div className="contentright">
                <h2>Contact</h2>
                <p><strong>Phone Number:</strong> <br/>29922992</p>
                <p><strong>Based in:</strong> <br/> Denmark</p>
                <p><strong>Location:</strong> <br/> Nørgaardsvej 30 - Kongens Lyngby, 2800</p>
            </div>
        </div>
    );
}

export default Home;