import { Route, Routes } from "react-router"
import Footer from "./footer/Footer.jsx"
import Header from "./header/Header.jsx"
import Home from "./home/Home.jsx"
import Register from "./register/Register.jsx"
import Games from "./games/Games.jsx"
import Details from "./details/Details.jsx"
import Create from "./create/Create.jsx"
import { useState } from "react"
import Login from "./login/Login.jsx"
import Logout from "./logout/Logout.jsx"
import Edit from "./edit/Edit.jsx"

function App() {
    const [user, setUser] = useState(null);
    const [registredUsers, setRegistredUsers] = useState([])

    function userHandler(email, password, isRegister) {
        if (email && isRegister) {
            
            if (registredUsers.some(user => user.email === email)) {
                throw new Error("This email is already in use!")
            }
            
            setUser({
                email
            })

            setRegistredUsers((state) => [...state, { email, password }]);
        } else if (email && !isRegister) {

            const logUser = registredUsers.find((user) => user.email === email && user.password === password)

            if (!logUser) {
                throw new Error ("Invalid email or password!");
            }

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
                <Route path="/register" element={<Register onRegister={userHandler} />} />
                <Route path="/games/create" element={<Create />} />
                <Route path="/login" element={<Login onLogin={userHandler} />} />
                <Route path="/logout" element={<Logout onLogout={userHandler}/>} />
                <Route path="/games/:gameId/edit" element={<Edit />} />
            </Routes>



            <Footer />

        </>
    )
}

export default App
