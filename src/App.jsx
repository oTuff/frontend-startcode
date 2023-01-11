import {useState} from 'react'
import Header from "./components/Header.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import userFacade from "./utils/userFacade.js";

function App() {
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <div className="App">
            <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
            <Routes>
                <Route path="/"
                       element={<Home userFacade={userFacade} setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>}/>
            </Routes>
        </div>
    )
}

export default App
