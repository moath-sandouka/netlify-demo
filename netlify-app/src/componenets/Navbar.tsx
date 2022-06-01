import React from "react";
import { Link } from "react-router-dom";
import { constRoutes } from "../constants/generalConstants";

function NavBar(): JSX.Element | null {
    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link className="navbar-brand" to={constRoutes.HOME}>
                    conduit
                </Link>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <Link className="nav-link active" to={constRoutes.HOME}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={constRoutes.HOME}>
                            <i className="ion-compose"></i>&nbsp;New Article
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={constRoutes.HOME}>
                            <i className="ion-gear-a"></i>&nbsp;Settings
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={constRoutes.SIGNIN}>
                            Sign in
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={constRoutes.SIGNUP}>
                            Sign up
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
