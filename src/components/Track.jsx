import React from "react";
import '../App.css'
import Footer from "./Footer";


const TrackPage = () => {
    return (
        <div>
        <div className="track-container">
          <h1 className="track-heading">Want to track repair order?</h1>
          <p className="track-description">
            Please enter your invoice tracking identity number to trace your repair order status.
          </p>
          <label className="track-label">ENTER TRACK ID</label>
          <input
            className="track-input"
            name="ENTER TRACK ID"
            type="integer"
            placeholder="ENTER TRACK ID"
          />
          <button className="track-button">TRACK YOUR ORDER STATUS</button>
        </div>
        <Footer />
      </div>

    );
}
export default TrackPage;