import './App.css';
import Index from './html/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PositionProperty from './html/PositionProperty';
import Web from './html/Web'
import Test from './html/Test';
import General from './html/General';
import Css from './html/Css';
import BoxModel from './html/BoxModel';
import MinMaxWidth from './html/MinMaxWidth';
import ResumeProject from './html/ResumeProject';
import Flex from './html/Flex';
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
         <Route path="/position-property" element={<PositionProperty/>} />
         <Route path="/box-model" element={<BoxModel/>} />
         <Route path="/minmaxwidth" element={<MinMaxWidth/>} />
         <Route path="/resumeproject" element={<ResumeProject/>} />
         <Route path="/flex" element={<Flex/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
