
// import Navbar2 from './Components/nav2';
import Footer from './Components/footer';
import Login from'./Components/login';
import Signup from'./Components/signUp';
import Otp from'./Pages/otp';
import Forgotpass from'./Pages/forgotpass';
import Resetpass from'./Pages/resetpassword';
import UploadCourse from'./Educator/uploadCourse';
import Home from './Pages/home';
import Eduhome from './Educator/Eduhome';
import ProductDetails from './Educator/ProductDetails.jsx';
import WatchCourse from './Educator/watchCourse';
import Addlesson from './Educator/addlesson';
import Coursedesc from './Pages/coursedesc';
import Popup from './Pages/Popup/Popup'
import Cart from './Pages/cart/cart';
import Pur_courses from './Pages/Purchased Courses/Pur_Courses'
import { AuthContextProvider } from "./Components/shared/authContext";

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './index.css';

function App() {
  return (
    
      <Router>
        <AuthContextProvider>
       
          <div className="App">
            <div className="content">
              <Routes>
                <Route exact path="/uploadcourse" element={<UploadCourse/>}/>
                <Route exact path="/eduhome" element={<Eduhome/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/signup" element={<Signup/>}/>
                <Route exact path="/otp" element={<Otp/>}/>
                <Route exact path="/forgotpassword" element={<Forgotpass/>}/>
                <Route exact path="/resetpassword" element={<Resetpass/>}/>
                <Route exact path="/coursedesc/:key" element={<Coursedesc/>}/>
                <Route exact path="/eduhome/:key" element={<ProductDetails/>}/>
                <Route exact path="/eduhome/video/:key" element={<WatchCourse/>}/>
                <Route exact path="/eduhome/mycart" element={<Cart/>}/>
                <Route exact path="/eduhome/uploadlesson/:key" element={<Addlesson/>}/>
                <Route exact path="/purchased-courses" element={<Pur_courses/>}/>
                <Route exact path="/popup" element={<Popup/>}/>
                
                
                {/* <Route exact path="/uploadvideo" element={<Uploadvideo/>}/> */}
                <Route exact path="/" element={<Home/>}/> 
              </Routes>

            </div>
            <Footer/>  
          </div>
          </AuthContextProvider>
         
      </Router>
     
 
  );
}

export default App;
