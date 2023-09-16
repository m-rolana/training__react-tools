import { useRouteError } from "react-router-dom";
import "./error.scss";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="container">
            <h1 className="title">Oops!</h1>
            <p className="description">Sorry, an unexpected error has occurred.</p>
            <p className="details">{error.statusText || error.message}</p>
        </div>
    );
}
