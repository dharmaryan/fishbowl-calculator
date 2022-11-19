import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home.js';
import Projects from './Projects.js';
import Layout from './Layout.js';


function App() {
  return (
      <Router>
        <Routes>
          <Route element = {<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path = "/projects" element = {<Projects/>}></Route>
          </Route>
        </Routes>
      </Router>
  )
}

export default App;
