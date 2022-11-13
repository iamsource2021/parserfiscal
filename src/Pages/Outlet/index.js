import React from "react";
import Home from "../Home/index";
// import AgendaConsultoria from "./../AgendaConsultoria/index";
import { AgendaConsultoriavdos } from "./../AgendaConsultoriav2/index";

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
                {/* <Route exact path="/agenda-consultoria" element={<AgendaConsultoria />} /> */}
                <Route exact path="/agenda-consultoria" element={<AgendaConsultoriavdos />} />
            </Routes>
      </Router>
    );
}

export default Outlet;