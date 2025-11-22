import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import request from "../../utils/request.js";
import CreateComment from "../create-comment/CreateComment.jsx";
import DetailsComments from "../details-comments/DetailsComments.jsx";

export default function Details({
    user
}) {
    const [game, setGame] = useState({})
    const { gameId } = useParams();
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {

        (async () => {
            try {
                // const response = await fetch(`${BASE_URL}/${gameId}`);
                // const result = await response.json();

                const result = await request(`/games/${gameId}`)

                setGame(result);
            } catch (error) {
                alert(error.message);
            };
        })()

    }, [gameId]);

    function refreshHandler() {
        setRefresh(state => !state);
    };

    async function deleteGameHandler() {

        const isConfirm = confirm(`Are you shore you want to delete ${game.title} from catalog?`)

        if (isConfirm) {

            try {
                // await fetch(`${BASE_URL}/${gameId}`, {
                //     method: "DELETE"
                // });
                
                await request(`/games/${gameId}`, "DELETE");

                navigate("/games");
            } catch (error) {
                alert(error.message);
            };
        }
    };

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="header-and-image">
                    <img className="game-img" src={game.imageUrl} alt={game.title} />

                    <div className="meta-info">
                        <h1 className="game-name">{game.title}</h1>

                        <p className="data-row">
                            <span className="label">Genre:</span>
                            <span className="value">{game.genre}</span>
                        </p>

                        <p className="data-row">
                            <span className="label">Active Players:</span>
                            <span className="value">{game.players}</span>
                        </p>

                        <p className="data-row">
                            <span className="label">Release Date:</span>
                            <span className="value">{game.date}</span>
                        </p>
                    </div>
                    <div className="summary-section">
                        <h2>Summary:</h2>
                        <p className="text-summary">
                            {game.summary}
                        </p>
                    </div>
                </div>


                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                <div className="buttons">
                    <Link to={`/games/${game._id}/edit`} className="button">Edit</Link>
                    {/* <Link to={`games/${gameId}/delete`} className="button">Delete</Link> */}
                    <button className="button" onClick={deleteGameHandler}>Delete</button>
                </div>

                <DetailsComments refresh={refresh}/>

            </div>
            
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            { user && <CreateComment user={user} onCreate={setRefresh} />}

        </section>
    );
}