import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Yourorder from './components/Yourorder';
import OrderState from './context/order/OrderState';
import Profile from './components/Profile';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import Faq from './components/Faq';
import Forms from './components/Forms';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import Alert from './components/Alert';
import backroundwallpaper from './background.jpg'
import Footer from './components/footer';
import Contact from './components/Contact';
import Forgot from './components/Forgot';
import Signup1 from './components/Signup1';
import Getotp from './components/Getotp';
import Yourcart from './components/Yourcart';

function App() {
  const [alert,setAlert] = useState(null);
  const showAlert =(message,type)=>
  { 
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);

  }
  
  return (
    <>
    <OrderState>
      
      <Router>
         
        <Navbar element={<Navbar showAlert={showAlert}/>}/>
       <Alert alert={alert}/>
        <div  style={{backgroundImage:`url(${backroundwallpaper})`,marginLeft:0,marginRight:0,paddingLeft:20,paddingRight:10,backgroundRepeat:"repeat",marginTop:0,marginBottom:0}}>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/about" Component={About}/>
            <Route exact path="/faq" Component={Faq}/>
            <Route exact path="/login" element={<Login showAlert={showAlert}/>}/>
            <Route exact path="/signup" element={<Signup showAlert={showAlert}/>}  /> 
            <Route exact path="/yourorder" Component={Yourorder}/>
            <Route exact path="/yourcart" Component={Yourcart}/>
            <Route exact path="/profile" Component={Profile}/>
            <Route exact path="/men" Component={Men}/>
            <Route exact path="/women" Component={Women}/>
            <Route exact path="/kid" Component={Kids}/>
            <Route exact path="/form" element={<Forms showAlert={showAlert}/>}/>
            <Route exact path="/contactus" Component={Contact}/>
            <Route exact path="/forgotpassword" element={<Forgot showAlert={showAlert}/>}/>
            <Route exact path="/emailforsignup" element={<Signup1 showAlert={showAlert}/>}/>
            <Route exact path="/getotp" element={<Getotp showAlert={showAlert}/>}/>    
          </Routes>
          <Footer/>
          </div>
      </Router>
    </OrderState>
    </>
  );
  }

export default App;
