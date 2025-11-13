import { Route, Routes } from "react-router"
import Footer from "./footer/Footer.jsx"
import Header from "./header/Header.jsx"
import Home from "./home/Home.jsx"
import Register from "./register/Register.jsx"

function App() {

    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
            </Routes>

            

            <Footer />

        </>
    )
}

export default App
