
import '../ComponentStyling/App.css';
import Login from '../Component/Login.jsx';
import MovieApp from '../Component/MovieApp.jsx';
import Footer from '../Component/Footer.jsx'
import Signup from '../Component/Signup.jsx';
import {BrowserRouter, Routes , Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/home" element={<MovieApp/>}/>
        <Route path="/about" element={<Footer/>}/>

      </Routes>

      
    
    </BrowserRouter>
    </>
  );
}

export default App;
