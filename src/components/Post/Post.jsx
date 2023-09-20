import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Post = ({ post }) => {
    const { title, id } = post;
    const postStyle = {
        border: '1px solid lightgrey',
        borderRadius: '8px',
        padding: '5px'
    }

    const navigate = useNavigate();
    const handleShowDetails = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h2>{id}</h2>
            <p>{title}</p>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <br />
            <button onClick={handleShowDetails}>Show Details btn</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object
}

export default Post;