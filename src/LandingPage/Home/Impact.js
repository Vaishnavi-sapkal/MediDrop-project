import React from "react";

function Impact() {
  return (
    <div className="container my-5">
      <h3 className="mb-4 text-center">Our Impact</h3>
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <img
            src="/media/Images/medidonated.Avif"
            alt="Medicines Donated"
            className="img-fluid mb-3"
          />
          <h5>10,000+ Medicines Donated</h5>
          <p>
            We’ve distributed medicines to over 200+ NGOs across the country.
          </p>
        </div>

        <div className="col-md-4 mb-4">
          <img
            src="/media/Images/lives.webp"
            alt="Lives Touched"
            className="img-fluid mb-3"
          />
          <h5>7,500+ Lives Touched</h5>
          <p>
            Thousands of underprivileged individuals have received timely
            treatment.
          </p>
        </div>

        <div className="col-md-4 mb-4">
          <img
            src="/media/Images/pharmacy.Avif"
            alt="Volunteers"
            className="img-fluid mb-3"
          />
          <h5>300+ Volunteers</h5>
          <p>
            Community-driven support helping us collect, verify, and distribute
            donations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Impact;
