import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <h1>error</h1>
            <Link to='/'>Back to Home</Link>
        </>
    );
};

export default ErrorPage;