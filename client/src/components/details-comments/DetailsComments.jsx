import { useEffect, useState } from "react";
import { useParams } from "react-router";
import request from "../../utils/request.js";

export default function DetailsComments({
    refresh
}) {
    const [comments, setComments] = useState([]);
    const { gameId } = useParams();

    useEffect(() => {
        (async function getComments() {
            const allComents = await request("/comments");

            const gameComments = Object.values(allComents).filter((comment) => comment.gameId === gameId);

            setComments(gameComments);
        })()
    }, [gameId, refresh])

    return (
        <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
                {comments.map((comment) => (
                    <li key={comment._id} className="comment">
                        <p>{comment.author}: {comment.message}</p>
                    </li>
                ))}
            </ul>
            {comments.length ? "" : <p className="no-comment">No comments.</p>}
        </div>
    );
}