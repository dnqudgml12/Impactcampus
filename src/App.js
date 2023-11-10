import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import Home from './Pages/Home';
import Chat from './Pages/Chat';
import Mentoprofile from './Components/Web/Mento/Mentoprofile';
import Mento from './Components/Web/Mento/Mento';
import { MentoinformProvider } from './Components/Contextapi/Context';
import Boarddetail from './Components/Web/Board/Boarddetail';
import Policyboard from './Components/Web/Policy/Policyboard';

import Policysuggest from './Components/Web/Policy/Policysuggest';
function App() {
  return (
    <MentoinformProvider>
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
         
          <Route path= '/mento' element={<Mento/>}/>
          <Route path='/mento/:id' element={<Mentoprofile/>}/>
         
      </Routes>
      <Routes>
        <Route path='/Chat' element={<Chat/>}/>
      </Routes>
      <Routes>
        <Route path='/board/:id' element={<Boarddetail/>}/>
      </Routes>

      <Routes>
        <Route path='/policyboard/:id' element={<Policyboard/>}/>
      </Routes>
      <Routes>
        <Route path='/policysuggest/:id' element={<Policysuggest />}/>
      </Routes>
    </Router>
    </MentoinformProvider>
  );
}

export default App;
