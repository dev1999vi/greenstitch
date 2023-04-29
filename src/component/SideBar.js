import React from 'react';
import './SideBar.css';
import logo from '../assets/Screenshot 2023-03-01 at 10.56 1Green.png';
import logo2 from '../assets/Vectordashboard.png';
import logo3 from '../assets/Vectorhelp.png';
import logo4 from '../assets/VectorFile.png';
import logo5 from '../assets/VectorArrow.png';
import logo6 from '../assets/VectorUpArrow.png';
import logo7 from '../assets/UnionUnion.png';
import logo8 from '../assets/logoutLogout.png';
import logo9 from '../assets/globeGlobe.png';

const SideBar = () => {
  return (
    <div style={{display:"flex", flexDirection: "column", justifyContent:"space-between", height: "100%"}}>
      <div className='top-container'>
        <img className='heading' src={logo} alt='logo'/>
        <div className='dashboard'>
          <p>DASHBOARD</p>
        </div>
        <div className='dashboard-container'>
          <div className='help'>
          <img src={logo2} style={{width:"15px", height:"15px"}} alt='logo' />
          <p style={{marginLeft:"10.5px", fontSize:"14px"}}>Dashboard</p>
          <img src={logo6} style={{width:"10px", height:"5px", marginLeft:"70.23px"}} alt='logo'/>
        </div>
        <div className='options'>
          <p>Record</p>
          <p>Reports</p>
          <p>Analyze</p>
          <p>Learn</p>
        </div>
        </div>
        <div className='pages'>
          <p>PAGES</p>
        </div>
        <div className='help'>
          <img src={logo3} style={{width:"15px", height:"15px"}} alt='logo' />
          <p style={{marginLeft:"10.5px", fontSize:"14px"}}>Help Center</p>
          <img src={logo5} style={{width:"10px", height:"5px", marginLeft:"70.23px"}} alt='logo'/>
        </div>
        <div className='file'>
          <img src={logo4} style={{width:"15px", height:"15px"}} alt='logo' />
          <p style={{marginLeft:"10.5px", fontSize:"14px"}}>File Manager</p>
          <img src={logo5} style={{width:"10px", height:"5px", marginLeft:"63.23px"}} alt='logo'/> 
        </div>
      </div>
      <div className='footer'>
        <img src={logo7} style={{width:"16.25px", height:"12.5px"}} alt='logo' />
        <img src={logo8} style={{width:"20px", height:"20px"}} alt='logo' />
        <img src={logo9} style={{width:"20px", height:"20px"}} alt='logo' />
      </div>
    </div>   
  )
}

export default SideBar;