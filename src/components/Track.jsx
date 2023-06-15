import React from "react";
import Footer from "./Footer";

<<<<<<< Updated upstream
const TrackPage=()=>{
    return(
        <div>
        {/* <h1>Track Page</h1> */}
        <Footer/>
        </div>
=======
// const TrackPage=()=>{
//     return(
//         <>
//         <h1>Track Page</h1>
//         </>

const TrackPage = () => {
    return (
        <div>
            {/* <h1>Track Page</h1> */}
            <div style={{ backgroundColor: '#fde047', width: '97vw', borderRadius: '20px', marginLeft: 20, height: '300px', }}>
                <div>
                    <h1 style={{ fontSize: "30px", padding: '10px', fontFamily: 'sans-serif', height: '30px', width: '568px', fontWeight: "bolder", lineHeight: 2 }}>Want to track repair order ?</h1>
                    <p style={{ fontSize: "18px", padding: '10px', fontFamily: 'sans-serif', fontWeight: "500", marginTop: 30, color: '#4B5563' }}>Please enter your invoice tracking identity number to trace your repair order status.</p>

                </div>
                <div >
                <label style={{ paddingLeft: 10, marginTop: 20, marginLeft: 15, fontSize: '16px', fontWeight: '600' }} >ENTER TRACK ID</label><br />
                <input style={{ width: '95vw', height: 50, padding: 20, marginLeft: 15, border: "1px solid grey", borderRadius: '10px' }} name='ENTER TRACK ID' type="integer" placeholder="ENTER TRACK ID" /> <br />
                <button style={{ backgroundColor: '#6b7280',marginLeft:550, borderRadius: 10,display:'flex',justifyContent:'center',alignItems:'center', marginTop: 12, color: "#fff", border: "1px solid blue", padding: "8px 16px", fontSize: '18px', fontWeight: 500, }}>TRACK YOUR ORDER STATUS</button>
                </div>
            </div>
            <Footer />
        </div>
        
>>>>>>> Stashed changes
    );
}
export default TrackPage;