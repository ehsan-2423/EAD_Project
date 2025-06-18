
import './App.css';
import Login from './Login.jsx';
import MovieApp from './MovieApp.jsx';
import Footer from './footer.jsx'
import Signup from './Signup.jsx';
import {BrowserRouter, Routes , Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<MovieApp/>}/>

      </Routes>

      
    
    </BrowserRouter>
    </>
  );
}

export default App;
