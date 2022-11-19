import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Calculator from './Calculator';

function App() {
  return(
    <>
    <Router>
      <Routes>
        <Route exact path ="/" element = {<Home />} />
        <Route exact path ="/calculator" element = {<Calculator />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
