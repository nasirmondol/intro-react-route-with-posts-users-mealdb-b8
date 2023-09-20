import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h3>Opps!!!</h3>
            <p>{error.data}</p>
            <Link to="/"><button>Go home</button></Link>
        </div>
    );
};

export default ErrorPage;