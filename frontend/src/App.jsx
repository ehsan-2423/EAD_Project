
import '../ComponentStyling/App.css';
import Login from '../Component/Login.jsx';
import MovieApp from '../Component/MovieApp.jsx';
import Footer from '../Component/Footer.jsx'
import Signup from '../Component/Signup.jsx';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Error from '../Component/Error.jsx';
import ProtectedRoutes from '../Component/ProtectedRoutes.jsx';
import { LoginProvider } from '../Component/LoginContext.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
    <LoginProvider>
      <Routes>        
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path="/home" element={<MovieApp/>}/>
          <Route path="/about" element={<Footer/>}/>
        </Route>

        <Route path="*" element={<Error/>}/>

      </Routes>
      </LoginProvider>

      
    
    </BrowserRouter>
    </>
  );
}

export default App;
