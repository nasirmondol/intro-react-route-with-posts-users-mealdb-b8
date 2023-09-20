import { Link, useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const { name } = user;

    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <Link ><button onClick={handleGoBack}>Go back</button></Link>
        </div>
    );
};

export default UserDetails;