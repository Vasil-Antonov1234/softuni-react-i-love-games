import { useNavigate } from "react-router";
import request from "../../utils/request.js";
import { useEffect, useState } from "react";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase.js";

export default function Create() {
    const [imageUpload, setImageUpload] = useState(false);
    const [imagePreview, setImagePreview] = useState(null)

    useEffect(() => {
        setImagePreview(null);
    }, [imageUpload])

    const navigate = useNavigate();

    async function createGameHandler(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const { image, ...newGameData } = Object.fromEntries(formData);

        if (imageUpload) {
            const imageRef = ref(storage, `images/${image.name}`);
            await uploadBytes(imageRef, image);
            newGameData.imageUrl = await getDownloadURL(imageRef);
        } else {
            newGameData.imageUrl = image;
        }

        newGameData.players = Number(newGameData.players);
        newGameData._createdOn = Date.now();

        try {
            await request("/games", "POST", { "content-type": "application/json" }, newGameData);

            navigate("/games");
        } catch (error) {
            alert(error.message)
        };
    };

    function imageUploadClickHandler() {

        setImageUpload(state => !state);
    };

    function imageChangeHandler(event) {
        const image = event.target.files[0];
        const imageUrl = URL.createObjectURL(image);

        setImagePreview(imageUrl);
    }

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
                        <label htmlFor="image">{imageUpload ? "Image Upload:" : "Image URL:"}</label>
                        <button type="button" className="details-button" onClick={imageUploadClickHandler}>{imageUpload ? "Image Url" : "Image Upload"}</button>
                        {imageUpload ?
                            <input type="file" id="image" name="image" placeholder="Upload File" onChange={imageChangeHandler} /> :
                            <input type="text" id="image" name="image" placeholder="Enter image URL..." />}

                        {imagePreview && <img src={imagePreview} alt="Image Preview"></img>}
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