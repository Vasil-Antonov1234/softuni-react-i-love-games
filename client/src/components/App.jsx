import { Route, Routes } from "react-router"
import Footer from "./footer/Footer.jsx"
import Header from "./header/Header.jsx"
import Home from "./home/Home.jsx"
import Register from "./register/Register.jsx"
import Games from "./games/Games.jsx"
import Details from "./details/Details.jsx"

function App() {

    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Games />} />
                <Route path="/games/details" element={<Details />} />
                <Route path="/register" element={<Register />} />
            </Routes>

            

            <Footer />

        </>
    )
}

export default App
