import Navbar1 from './Components/nav1';
// import Navbar2 from './Components/nav2';
import Footer from './Components/footer';
import Login from'./Components/login';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './index.css';

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar1/>
          <div className="content">
            <Routes>
              <Route exact path="/login" element={<Login/>}/>
              </Routes>

          </div>
          <Footer/>  
        </div>
    </Router>
  );
}

export default App;
