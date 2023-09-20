import { useRouteError } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>This page is not found!!</h1>
            <p>{error.message}</p>
        </div>
    );
};

export default NotFound;