import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import Home from './pages/home/Home';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
