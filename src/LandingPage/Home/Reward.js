import React from "react";

function Reward() {
  return (
    <div className="container py-5">
      <h3 className="text-center mb-3">Thank You, Donors!</h3>
      <p className="text-center mb-5">
        Every contribution brings us closer to a healthier future. Here's to the
        ones who made it possible.
      </p>
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <img
            src="/media/Images/herodonar.jpg"
            className="img-fluid mb-2"
            alt="Top Donor"
          />
          <h5>Top Donor</h5>
          <p>Recognizing our highest contributor this month.</p>
        </div>
        <div className="col-md-4 mb-4">
          <img
            src="/media/Images/community.jpg"
            className="img-fluid mb-2"
            alt="Community Hero"
          />
          <h5>Community Hero</h5>
          <p>Someone who made a difference where it mattered most.</p>
        </div>
        <div className="col-md-4 mb-4">
          <img
            src="/media/Images/Volunteerstar.jpg"
            className="img-fluid mb-2 pt-4"
            alt="Volunteer Star"
          />
          <h5>Volunteer Star</h5>
          <p>Dedicated volunteer going the extra mile.</p>
        </div>
      </div>
    </div>
  );
}

export default Reward;
