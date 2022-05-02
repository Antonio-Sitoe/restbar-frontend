import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';

const App = () => {
  const [state, setState] = React.useState(0);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='About' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
