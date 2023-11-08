import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import Home from './Pages/Home';
import Chat from './Pages/Chat';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path='/Chat' element={<Chat/>}/>
      </Routes>


    </Router>
  );
}

export default App;
