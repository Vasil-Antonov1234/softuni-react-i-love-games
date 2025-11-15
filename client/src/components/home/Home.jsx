import { useEffect, useState } from "react";
import { BASE_URL } from "../games/Games.jsx";
import Game from "../game/Game.jsx";
import request from "../../utils/request.js";

export default function Home() {
    const [latestGames, setLatestGames] = useState([]);

    useEffect(() => {

        (async () => {
            // const response = await fetch(BASE_URL);
            // const result = await response.json();

            const result = await request(BASE_URL);

            const games = Object.entries(result);
            const sortedGames = games.sort((a, b) => b[1]._createdOn - a[1]._createdOn).slice(0, 3)

            setLatestGames(sortedGames);
        })();

    }, []);

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in </h3>
                <img id="logo-left" src="../public/images/logo.png" alt="logo" />
            </div>

            <div id="home-page">
                <h1>Latest Games</h1>
                <div id="latest-wrap">
                    <div className="home-container">
                        
                        {latestGames.length ? latestGames.map((game) => <Game key={game[0]} {...game[1]} />) : <p className="no-articles">No games yet</p>}

                    </div>
                </div>
            </div>
        </section>
    );
}