import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Album from './Components/album';
import Alum from './Components/alum';
import Council from './Components/councils';
import ResponsiveAppBar from './Components/navbar';
import Login from './Components/login';
import Logout from './Components/logout';
import { useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState(false);
  const [loginShow, setLoginShow] = useState(false);
  const [logoutShow, setLogoutShow] = useState(false);
  useEffect(() => {
    // Check if a token exists in local storage
    const token = localStorage.getItem('token');
    console.log(token)
    if (token) {
      // Token exists, set user to true
      setUser(true);
    } else {
      // Token doesn't exist, set user to false
      setUser(false);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <div>
        <ResponsiveAppBar theme={theme} toggleTheme={toggleTheme} user={user} setLoginShow={setLoginShow} setLogoutShow={setLogoutShow} />
        <Routes>
          <Route path='/album' element={<Album theme={theme}/>} />
          <Route path='/Council' element={<Council theme={theme} />} />
          <Route path='/Alum' element={<Alum theme={theme}/>} />
        </Routes>
        <Login show={loginShow} onHide={() => setLoginShow(false)} setUser={setUser} />
        <Logout show={logoutShow} onHide={() => setLogoutShow(false)} setUser={setUser} />
      </div>
    </Router>
  );
}

export default App;
