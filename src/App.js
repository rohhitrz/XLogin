// import './App.css';
import Login from "./components/Login";
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Welcome from "./components/Welcome";


function App() {
  return (
    
    <div className="App">
      <h1>Login Page</h1>
      <Router>
        <Routes>
      
      <Route path="/" element={<Login/>}> </Route>
      <Route path="/Welcome" element={<Welcome/>}></Route>

      </Routes>
  
      </Router>
    </div>
   
  );
}

export default App;
