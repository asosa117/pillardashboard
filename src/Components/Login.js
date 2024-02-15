import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import "../Login.css";



function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setloginError] = useState("")

    const navigate = useNavigate();
 
    const usersPage = () => {
        navigate("/UserTable")
    }

    const onButtonClick = () => {
      setloginError("")

      if ((username !== "Pillar") || (password !== "6Pillars")){
        setloginError("Username/Password Invalid. Please Try Again")
        return
      }

      if ((username === "Pillar") && (password === "6Pillars")){
        usersPage()
      }

    }
  return (
    <body>
        <div className='loginBlock'>
          <h1 className='login'>Log in</h1>
          <input 
            type="text"
            className='username'
            placeholder='Username' 
            required 
            value={username}
            onChange={ev => setUsername(ev.target.value)}
          />
          <input
            type="password"
            placeholder='Password'
            required
            value={password}
            onChange={ev => setPassword(ev.target.value)}
            />
            <label className="errorLabel">{loginError}</label>
          <input
            type="button"
            className='loginButton'
            value="Log in"
            onClick={onButtonClick}
            />
        </div>
    </body>
  )
}
export default Login;
