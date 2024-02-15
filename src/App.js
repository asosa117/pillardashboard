import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import UserTable from "./Components/UserTable";
import MedTable from "./Components/MedTable";
import Login from "./Components/Login";
import pLogo from "./pLogo.png";
import pwLogo from "./pwLogo.png";
 
function App() {
    return (
        <>
            <header>
                <img src={pLogo} alt="pLogo" className="pLogo"/>
                <img src={pwLogo} alt="pLogo" className="pwLogo"/>
            </header>
            
            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Login />}
                    />
                    <Route
                        exact
                        path="/UserTable"
                        element={<UserTable />}
                    />
                    <Route
                        exact
                        path="/MedTable"
                        element={<MedTable />}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;