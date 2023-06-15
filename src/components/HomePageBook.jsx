import React from "react";
import Types from "./typo";
import AllCollapseExample from './accor';
import MiddleSexction from './middlesec';
import Contact from './Contact';
import Footer from './Footer';




const HomePageBook=()=>{
    return(
        <div>
        {/* <h1>HomePageBook Page</h1> */}
            <Types/>
            <AllCollapseExample/>
            <MiddleSexction/>
            <Contact/>
            <Footer/>
        </div>
    );
}
export default HomePageBook;