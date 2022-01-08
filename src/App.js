import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import $ from 'jquery'; 
import Nav from './components/Nav';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Home />
        <Nav />
      </Router>
    </div>
  );
}

export default App;
