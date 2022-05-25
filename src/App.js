import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import $ from 'jquery';
import Home from './components/Home';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/menu' element={<Menu/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
