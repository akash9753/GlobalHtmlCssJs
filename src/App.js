import './App.css';
import Index from './html/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import General from './html/General';
import Web from './html/Web'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Index />} />
         <Route path="/web" element={<Web />} />
         <Route path="/general" element={<General />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
