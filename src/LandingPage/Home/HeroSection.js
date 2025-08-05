import React from "react";
function HeroSection() {
  return (
    <div className="container p-5   text-center" style={{ height: 600 }}>
      <div className="row  ">
        <div className="col-5 text-center pt-5 mt-5" style={{ height: 600 }}>
          <h1>Donate Unused Medicines, Help To Save Lives</h1>
          <p>
            A platform to donate unused, unexpired medicines to registered
            pharmacies.
          </p>
          <div className="button-group">
            <button
              className="donate-btn btn btn-success m-3"
              style={{
                width: "25%",
                height: "60px",
                borderRadius: "10px",
                paddingLeft: "10px",
              }}
            >
              Donate Medicines
            </button>
            <button
              className="receive-btn btn btn-primary"
              style={{
                width: "25%",
                height: "60px",
                borderRadius: "10px",
                paddingLeft: "10px",
              }}
            >
              Register Pharmacy
            </button>
          </div>
        </div>
        <div className="col-7" style={{ height: 600 }}>
          <img
            src="media/Images/docters.png"
            alt="Doctor Img"
            style={{ height: "80%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
