import { useEffect, useState } from "react";
import Game from "../game/Game.jsx";
import request from "../../utils/request.js";

export const BASE_URL = "http://localhost:3030/jsonstore/games";

export default function Games() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                // const respons = await fetch(BASE_URL);
                // const result = await respons.json();
                const result = await request(BASE_URL)

                const games = Object.entries(result);
                
                setGames(games);
            } catch (error) {
                alert(error.message);
            };
        })();
    }, [])

    return (
        <section id="catalog-page">
            <h1>Catalog</h1>
            <div className="catalog-container">
                {games.length ? games.map((game) => <Game key={game[0]} {...game[1]} />) : <h3 className="no-articles">No Added Games Yet</h3>}
            </div>
        </section>
    );
}