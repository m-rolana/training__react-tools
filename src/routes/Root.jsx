import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
import "./root.scss";

export default function Root() {
    return (
        <div className="root">
            <Navigation />
            <div id="detail">
                <Outlet />
            </div>
        </div>
    );
}

