import { Link } from "react-router";

export default function Header() {
    return (
        <header>
            {/* <!-- Navigation --> */}
            <nav>
                <Link className="home" to="/"> <img src="./images/logo.png" alt="logo" /> </Link>
                <a href="#">Catalog</a>
                {/* <!-- Logged-in users --> */}
                <div id="user">
                    <a href="#">Add Game</a>
                    <a href="#">Logout</a>
                </div>
                {/* <!-- Guest users --> */}
                <div id="guest">
                    <a href="#">Login</a>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </header>
    );
}