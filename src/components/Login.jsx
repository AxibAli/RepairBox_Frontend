import React from "react";
import Loginlogo from '../images/logohome.png'

import '../App.css'

const Workshopage=()=>{
    return(
        <div style={{backgroundColor:'#edf8f3',display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',width:"100vw"}}>
{/* 
        <h1>Workshopage Page</h1> */}
        <div style={{backgroundColor:'#ffffff',height:'650px',width:"500px",borderRadius:'20px'}}>
            <div  style={{display:'flex',justifyContent:'center',alignItems:'center',paddingTop:'20px'}}>
            <img src={Loginlogo} style={{height:'100px',width:'100px',}}/>
            </div>
            <div style={{margin:20,padding:20}} >
     <label style={{paddingLeft:10,fontSize:'20px',fontWeight:'400'}} >Email</label><br/>
      <input style={{width:'400px',height:50,padding:20,margin:5,border:"1px solid grey",borderRadius:'10px'}}   name='email' type="email" placeholder="Email Address"  /> <br />
      <label style={{paddingLeft:10,marginTop:20,fontSize:'20px',fontWeight:'400'}} >Password</label><br/>
      <input style={{width:'400px',height:50,padding:20,margin:5,border:"1px solid grey",borderRadius:'10px'}}   name='password' type="password" placeholder="Password"  /> <br />
      <button style={{backgroundColor:'#3b82f6',borderRadius:10,marginTop:12,float:'right',color:"#fff",border:"1px solid blue",padding:"8px 16px",fontSize:'18px',fontWeight:500,}}>Sign In</button>
        </div>
        <p style={{paddingLeft:50,fontSize:'14px',fontWeight:'600',marginTop:200}}>You can not access your account?<span style={{fontSize:'18px',fontWeight:'600',color:'blue'}}> Recover account </span></p>
        </div>
        
        </div>
    );
}
export default Workshopage;