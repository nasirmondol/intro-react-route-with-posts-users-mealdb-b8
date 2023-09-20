import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();

    const navigate = useNavigate()
    const  handlegoBack = () =>{
        navigate(-1);
    }
    const { title, body } = post;
    const detailsStyle = {
        border: '1px solid lightgrey',
        padding: '10px',
        width: '250px'
    }
    return (
        <div style={detailsStyle}>
            <img width={200} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnBj5fzx7tOJyLPXfby43X_oaz6C-_XITaEw&usqp=CAU" alt="" />
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={handlegoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;