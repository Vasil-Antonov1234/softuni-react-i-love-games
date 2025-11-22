import { useState } from "react";
import request from "../../utils/request.js";
import { useParams } from "react-router";

export default function CreateComment({
    user
}) {
    const [comment, setComment] = useState("");
    const { gameId } = useParams();
    
    function changeHandler(event) {
        setComment(event.target.value);
    };

    async function submitHandler() {

        await request("/comments", "POST", {"content-type": "application/json"},
            {
            author: user.email,
            message: comment,
            gameId
        })
    }

    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" action={submitHandler}>
                <textarea 
                    onChange={changeHandler}
                    value={comment}
                    name="comment" 
                    placeholder="Comment......">
                </textarea>
                <input className="btn submit" type="submit" value="Add Comment" disabled={user ? false : true} />
            </form>
        </article>
    );
}