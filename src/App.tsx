import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Album from './Components/album';
import Alum from './Components/alum';
import Council from './Components/councils';
import ResponsiveAppBar from './Components/navbar';
import Social from './Components/footer';
import Cover from './Components/cover';
import Corner from './Components/corner';
import BlogPost from './Components/blogpost';
import Faqs from './Components/faqs';
import Home from './Components/home';
import Record from './Components/record';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <div>
        <ResponsiveAppBar theme={theme} toggleTheme={toggleTheme}/>
        <Cover theme={theme} />
        <Routes>
          <Route path='/' element={<Home theme={theme}/>} />
          <Route path='/album' element={<Album theme={theme}/>} />
          <Route path='/Council' element={<Council theme={theme} />} />
          <Route path='/Alum' element={<Alum theme={theme}/>} />
          <Route path='/Corner' element={<Corner theme={theme}/>}/>
          <Route path='/Blog' element={<BlogPost theme={theme}/>}/>
          <Route path='/Faqs' element={<Faqs theme={theme}/>}/>
          <Route path='/Records' element={<Record theme={theme}/>}/>
        </Routes>
        <Social theme={theme} />
      </div>
    </Router>
  );
}

export default App;
