import { Route, Routes } from "react-router"
import Footer from "./footer/Footer.jsx"
import Header from "./header/Header.jsx"
import Home from "./home/Home.jsx"
import Register from "./register/Register.jsx"
import Games from "./games/Games.jsx"
import Details from "./details/Details.jsx"
import Create from "./create/Create.jsx"
import { useState } from "react"

function App() {
    const [user, setUser] = useState(null);

    function userHandler(email) {
        if (email) {
            setUser({
                email
            })
        } else {
            setUser(null);
        }
    }


    return (
        <>
            <Header user={user} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Games />} />
                <Route path="/games/:gameId/details" element={<Details />} />
                <Route path="/register" element={<Register onRegister={userHandler} user={user} />} />
                <Route path="games/create" element={<Create />} />
            </Routes>



            <Footer />

        </>
    )
}

export default App
