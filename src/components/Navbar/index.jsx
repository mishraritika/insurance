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
        
    <div class=" mr-4 navbar-container-text p-2 flex justify-end space-x-16 w-100 items-baseline"> 

<div class="hover:underline cursor-pointer underline-offset-8 hover:underline decoration-1" onClick={handleClaimForm}>CLAIM</div>
<div class="hover:underline cursor-pointer underline-offset-8 hover:underline decoration-1" onClick={handleInsuranceDataForm}>INSURANCE DATA</div>
<div class="hover:underline cursor-pointer underline-offset-8 hover:underline decoration-1" onClick={handleFeedInsuranceData}>FEED INSURANCE DATA</div>
<div> <input type="text" placeholder="search" class="navbar-searchfield"></input></div>


</div>

</div>
           
  
  )
}

export default Navbar