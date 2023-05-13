
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Views/Home';
import Create from './Views/Create';
import Update from './Views/Update';




function App() {
  return (
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Update/:id" element={<Update />} />
        
      </Routes>
      <div className='text-center'>
        <small id="helpId" class="text-center text-muted">DEVELOP BY SUTTHIPHONG SINGKHAM</small>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
