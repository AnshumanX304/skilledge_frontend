import Navbar1 from './Components/nav1';
// import Navbar2 from './Components/nav2';
import Footer from './Components/footer';
import Login from'./Components/login';
import Otp from'./Pages/otp';
import Forgotpass from'./Pages/forgotpass';
import Resetpass from'./Pages/resetpassword';

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
              <Route exact path="/otp" element={<Otp/>}/>
              <Route exact path="/forgotpassword" element={<Forgotpass/>}/>
              <Route exact path="/resetpassword" element={<Resetpass/>}/>
            </Routes>

          </div>
          <Footer/>  
        </div>
    </Router>
  );
}

export default App;
