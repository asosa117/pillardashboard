import React from 'react'
import { useNavigate } from "react-router-dom";
import MedList from "../Lists/medList.js";
import "../App.css";



function MedTable() {
    const navigate = useNavigate();
 
    const usersPage = () => {
        navigate("/UserTable")
    }
  return (
    <body>
      <h1 className='UserDashHeader'>
        Medication Dashboard
        <div className='UserMedButtons'>
          <button onClick={usersPage}>
            Go To Users
          </button>
        </div>
      </h1>
      <div>
        <MedList/>
      </div>
    </body>
  )
}
export default MedTable;
