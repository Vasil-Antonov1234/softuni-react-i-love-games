import { useEffect, useState } from "react";
import { useParams } from "react-router";
import request from "../../utils/request.js";
import { BASE_URL } from "../games/Games.jsx";

export default function Edit() {
    
    const { gameId } = useParams();

    const initialValues = {
        title: "",
        genre: "",
        players: "",
        date: "",
        imageUrl: "",
        summary: ""
    }

    const [values, setVaslues] = useState(initialValues)

    function changeHandler(event) {
        setVaslues(state => ({
            ...state,
            [event.target.name]: event.target.value
        }))
    }

    useEffect(() => {
        
        (async function getGame() {
            
            const game = await request(`${BASE_URL}/${gameId}`);
        
            try {
                setVaslues(game);
            } catch (error) {
                alert(error.message);
            };
        })();
    }, [gameId])

    return (
        <section id="edit-page">
            <form id="add-new-game">
                <div className="container">

                    <h1>Edit Game</h1>

                    <div className="form-group-half">
                        <label htmlFor="gameName">Game Name:</label>
                        <input 
                            onChange={changeHandler}
                            value={values.title}
                            type="text" 
                            id="gameName" 
                            name="title" 
                            placeholder="Enter game title..." 
                        />
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="genre">Genre:</label>
                        <input 
                            onChange={changeHandler}
                            value={values.genre}
                            type="text" 
                            id="genre" 
                            name="genre" 
                            placeholder="Enter game genre..." 
                        />
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="activePlayers">Active Players:</label>
                        <input 
                            onChange={changeHandler}
                            value={values.players}
                            type="number" 
                            id="activePlayers" 
                            name="players" 
                            min="0" 
                            placeholder="0" 
                        />
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="releaseDate">Release Date:</label>
                        <input 
                            onChange={changeHandler}
                            value={values.date}
                            type="date" 
                            id="releaseDate" 
                            name="date" 
                        />
                    </div>

                    <div className="form-group-full">
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input 
                            onChange={changeHandler}
                            value={values.imageUrl}
                            type="text" 
                            id="imageUrl" 
                            name="imageUrl" 
                            placeholder="Enter image URL..." 
                        />
                    </div>

                    <div className="form-group-full">
                        <label htmlFor="summary">Summary:</label>
                        <textarea 
                            onChange={changeHandler}
                            value={values.summary}
                            name="summary" 
                            id="summary" 
                            rows="5"
                            placeholder="Write a brief summary...">
                        </textarea>
                    </div>

                    <input className="btn submit" type="submit" value="EDIT GAME" />
                </div>
            </form>
        </section>
    );
}