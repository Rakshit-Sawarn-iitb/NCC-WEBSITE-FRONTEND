import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Album from './Components/album';

function App(){
    return(
        <Router>
            <div>
                <Routes>
                    <Route path='/albums' element={<Album/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;