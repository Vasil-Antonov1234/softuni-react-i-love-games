import { useNavigate } from "react-router";
import { BASE_URL } from "../games/Games.jsx";
import request from "../../utils/request.js";

export default function Create() {

    const navigate = useNavigate();

    async function createGameHandler(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newGameData = Object.fromEntries(formData);
        newGameData.players = Number(newGameData.players);
        newGameData._createdOn = Date.now();

        try {
            // const response = await fetch(BASE_URL, {
            //     method: "POST",
            //     headers: {
            //         "content-type": "application/json"
            //     },
            //     body: JSON.stringify(newGameData)
            // });

            // const result = await response.json();

            const result = await request(BASE_URL, "POST", {"content-type": "application/json"}, newGameData);

            console.log(result);

            navigate("/games");
        } catch (error) {
            alert(error.message)
        };
    };

    return (
        <section id="add-page">
            <form id="add-new-game" onSubmit={createGameHandler}>
                <div className="container">

                    <h1>Add New Game</h1>

                    <div className="form-group-half">
                        <label htmlFor="gameName">Game Name:</label>
                        <input type="text" id="gameName" name="title" placeholder="Enter game title..." />
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="genre">Genre:</label>
                        <input type="text" id="genre" name="genre" placeholder="Enter game genre..." />
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="activePlayers">Active Players:</label>
                        <input type="number" id="activePlayers" name="players" min="0" placeholder="0" />
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="releaseDate">Release Date:</label>
                        <input type="date" id="releaseDate" name="date" />
                    </div>

                    <div className="form-group-full">
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input type="text" id="imageUrl" name="imageUrl" placeholder="Enter image URL..." />
                    </div>

                    <div className="form-group-full">
                        <label htmlFor="summary">Summary:</label>
                        <textarea name="summary" id="summary" rows="5" placeholder="Write a brief summary..."></textarea>
                    </div>

                    <input className="btn submit" type="submit" value="ADD GAME" />
                </div>
            </form>
        </section>
    )
}