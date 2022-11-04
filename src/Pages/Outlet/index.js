import React from "react";
import Home from "../Home/index";
import {
    BrowserRouter as Router,
    Link as ReactRouterLink,
    Routes,
    Route,
  } from 'react-router-dom';

function Outlet(props){
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
      </Router>
    );
}

export default Outlet;