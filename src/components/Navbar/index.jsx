import React from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

function  Navbar() {

  let navigate = useNavigate();

  async function handleClaimForm() {
    navigate("/claiminsurance");
  }


  async function handleInsuranceDataForm() {
    navigate("/searchinsurancedata");
  }

  async function handleFeedInsuranceData() {
    navigate("/feedinsurancedata");
  }


  return (
    
    <div class="navbar-container">
      {/* <div class="flex justify-end"> */}   
     {/* <img src="logo"></img> */}
      <div className="logo" class="float-left text-blue-100 m-6 text-2xl uppercase">Esurancy</div>   

      <div class=" mr-4 navbar-container-text p-2 flex justify-end space-x-16 w-100 items-baseline"> 
        <div class="hover:underline cursor-pointer underline-offset-8 hover:underline decoration-1" onClick={handleClaimForm}>FEED INSURANCE DATA</div>
        <div class="hover:underline cursor-pointer underline-offset-8 hover:underline decoration-1" onClick={handleInsuranceDataForm}>SEARCH INSURANCE DATA</div>
        <div class="hover:underline cursor-pointer underline-offset-8 hover:underline decoration-1" onClick={handleFeedInsuranceData}>CLAIM INSURANCE</div>
        <div> <input type="text" placeholder="Search" class="navbar-searchfield"></input></div>
      </div>
    </div>
           
  
  )
}

export default Navbar