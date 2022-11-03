import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

function App() {
  const [dimension, setDimension] = useState({
    width: 0,
  });

  const handleResize = () => {
    setDimension({
        width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
        window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home dimension={dimension}/>}/>
      <Route path="contact" element={<Contact />}/>
    </Routes>
  );
}

export default App;
