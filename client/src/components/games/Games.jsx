import { useEffect, useState } from "react";
import { Link } from "react-router";
import Game from "../game/Game.jsx";

const BASE_URL = "http://localhost:3030/jsonstore/games";

export default function Games() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const respons = await fetch(BASE_URL);
                const result = await respons.json();

                const games = Object.values(result);

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

                {games.length ? games.map((game) => <Game key={game._id} {...game} />) : <h3 className="no-articles">No Added Games Yet</h3>}

            </div>
        </section>
    );
}