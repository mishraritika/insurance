import React from 'react';
import { useNavigate } from 'react-router-dom';

function  NavbarHome() {

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

  async function handleHome() {
    navigate("/");
  }


  return (
    
    <div class="navbar-container">
      {/* <div class="flex justify-end"> */}   
     {/* <img src="logo"></img> */}
      {/* <div className="logo" class="float-left text-blue-100 m-6 text-2xl uppercase">Esurancy</div>    */}
      {/* <div class="flex"></div> */}
      <div class=" mr-4 navbar-container-text p-2 flex justify-end space-x-16 w-100 items-baseline"> 
      <div class=" navbar-container-labels hover:underline cursor-pointer underline-offset-8 hover:underline decoration-1 mr-80" onClick={handleHome}>HOME</div>
        <div class=" navbar-container-labels hover:underline cursor-pointer underline-offset-8 hover:underline decoration-1" onClick={handleFeedInsuranceData}>FEED INSURANCE DATA</div>
        <div class="navbar-container-labels hover:underline cursor-pointer underline-offset-8 hover:underline decoration-1" onClick={handleInsuranceDataForm}>SEARCH INSURANCE DATA</div>
        <div class="navbar-container-labels hover:underline cursor-pointer underline-offset-8 hover:underline decoration-1" onClick={handleClaimForm}>CLAIM INSURANCE</div>
        <div> <input type="text" placeholder="Search" class="navbar-searchfield"></input></div>
      </div>
    </div>
           
  
  )
}

export default NavbarHome