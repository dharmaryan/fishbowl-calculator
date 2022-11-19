import { withRouter } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import Home from "./Home.js";
import Projects from "./Projects.js";
import './App.css';

const Layout = () => {
    return <>
    <div className="App">
          <header className="navbar">
          &nbsp; Ryan Dharma &nbsp;
            <Link to="/">
            <button className="nav-button">Home</button>
            </Link>&nbsp;
            <Link to="/projects">
            <button className="nav-button">Projects</button>
            </Link>
          </header> 
          <Outlet/>

      </div>
    </>        
  }

export default Layout;
