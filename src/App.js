import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import UserTable from "./Components/UserTable";
import MedTable from "./Components/MedTable";
import Login from "./Components/Login";
 
 
function App() {
    return (
        <>
            <header>
                <h1 className='title'>Pillar</h1>
                {/* <h2 className="tes">
                    <button>Documents</button>
                    <button>Help</button>
                    <button>Log Out</button>
                </h2> */}
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