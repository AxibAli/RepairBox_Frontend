import React from "react";
// import Types from "./typo";
import AllCollapseExample from './accor';
import MiddleSection from './middlesec';
import Contact from './Contact';
import Footer from './Footer';




const HomePageBook=()=>{
    return(
        <div>
        {/* <h1>HomePageBook Page</h1> */}
        <MiddleSection/>

            {/* <Types/> */}
            <AllCollapseExample/>
            <Contact/>
            <Footer/>
        </div>
    );
}
export default HomePageBook;