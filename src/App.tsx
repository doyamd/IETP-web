import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homeauto from './components/Homeauto';
import Login from './components/Login';

const App: React.FC = () => {
  
  return (
    
    <Router>
      <Routes>
        <Route path="/homeauto" element={<Homeauto />} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<Login/>} />
      </Routes>
    </Router>
  )
}



export default App;
