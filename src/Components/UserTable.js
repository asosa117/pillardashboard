import React from 'react'
import { useNavigate } from "react-router-dom";
import UserList from "../Lists/userList.js";
import "../App.css";



function UserTable() {
    const navigate = useNavigate();
 
    const medsPage = () => {
        navigate("/MedTable")
    }


  return (
    <body>
      <h1 className='UserDashHeader'>
        Users Dashboard
        <div className='UserMedButtons'>
          <button onClick={medsPage}>
            Go To Medications
          </button>
        </div>
      </h1>
        <div>
          <UserList/>
        </div>
    </body>
  )
}

export default UserTable;
