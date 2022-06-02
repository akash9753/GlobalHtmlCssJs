import './App.css';
import Index from './html/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Web from './html/Web'
import Test from './html/Test';
import General from './html/General';
import Css from './html/Css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Index />} />
         <Route path="/web" element={<Web />} />
         <Route path="/general" element={<General />} />
         <Route path="/test" element={<Test />} />
         <Route path="/css" element={<Css />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
