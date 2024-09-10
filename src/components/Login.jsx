import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const[login,setLogin]=useState(false);

  const navigate=useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    if (username == "" || password == "") {
      setMessage("Please fill in both fields.");
      return;
    }

    if (username === "user" && password === "password") {
      setMessage("Welcome,user!");
    //   setLogin(true);
    navigate('/Welcome');
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    // <div>
    //     {login ? (
    //         <p>Welcome,user!</p>


    //     ):(
        <div>
         {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />{" "}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
      
        
     
   
  );
}
