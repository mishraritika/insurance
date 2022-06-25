import React from "react";
import Home from "./pages/Home";
import { Routes ,Route, BrowserRouter } from 'react-router-dom';
import "./styles/main.css"
import FeedInsuranceData from "./pages/FeedInsuranceData";
import ClaimInsurance from "./pages/ClaimInsurance";
import InsuranceData from './pages/InsuranceData';



function App() {
  return (
    <div >
      <BrowserRouter>
    <Routes>
      
    <Route path='/' element={<Home/>} />
    <Route path="/feedinsurancedata" element={<FeedInsuranceData/>} />
    <Route path="/claiminsurance" element={<ClaimInsurance/>} />
    <Route path="/searchinsurancedata" element={<InsuranceData/>} />

          </Routes>
          </BrowserRouter>

    
    </div>
  );
}

export default App;
