import React from "react";

function HeroSection() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="mb-4 text-center">
            Donate Unused Medicines, Help Save Lives
          </h1>
          <p className="mb-4 text-center">
            A platform to donate unused, unexpired medicines to registered
            pharmacies — reduce waste, increase impact.
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <button className="btn btn-success px-4 py-2">
              Donate Medicines
            </button>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="media/Images/docters.png"
            alt="Doctor Illustration"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
