import React, { Fragment } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import pages from "./pages";
import components from "./componenets";
import { constRoutes } from "./constants/generalConstants";
import 'react-toastify/dist/ReactToastify.css';
/*

  This is a simulation demo for https://demo.realworld.io/#/
  you can find the apis and demo up in the website, just visit it 

*/
function App() {
    return (
        <div className="home-page">
            <components.NavBar />
            <Routes>
                <Route path={constRoutes.SIGNUP} element={<pages.Signup />} />
                <Route path={constRoutes.SIGNIN} element={<pages.Signin />} />
                <Route path={constRoutes.HOME} element={<pages.Home />} />
                <Route path="/" element={<pages.Home />} />
            </Routes>
            <components.Footer />
        </div>
    );
}

export default App;
