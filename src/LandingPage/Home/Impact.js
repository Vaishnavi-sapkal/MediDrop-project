import React from "react";
function Impact() {
  return (
    <div className="container2  row mx-5 p-5">
      <h2 className="mb-5" style={{ color: "#00796B" }}>
        We are designing to lift humanity , break the barries and heal our
        world.
      </h2>
      <div className="col-5 text-center  p-5" style={{ background: "#F8F8f8" }}>
        <h4 style={{ color: "#37474F" }}>
          Every unused medicine you donate can become a lifeline for someone in
          need . With Medidrop we've already redirected dozones of life-saving
          medication to verified clinics.
        </h4>
      </div>
      <div className="col-6 row p-5 ">
        <div className="col-6">
          <p>
            <i class="fa-solid fa-capsules" style={{ color: "red" }}></i>{" "}
            <b> 1200+ medicine Donated</b>
          </p>
          <p>
            {" "}
            <i
              class="fa-solid fa-house-medical"
              style={{ color: "#87CEFA" }}
            ></i>{" "}
            <b>75+ Pharmacies Helped </b>
          </p>
          <p>
            <i
              class="fa-solid fa-person-walking-dashed-line-arrow-right"
              style={{ color: "green" }}
            ></i>{" "}
            <b>5000+Lives Impacted </b>
          </p>
        </div>
        <div className="col-6">
          <p>
            <i
              class="fa-solid fa-house-medical"
              style={{ color: "#87CEFA" }}
            ></i>{" "}
            <b> 1200+ medicine Donated</b>
          </p>
          <p>
            {" "}
            <i class="fa-solid fa-capsules" style={{ color: "red" }}></i>{" "}
            <b>75+ Pharmacies Helped </b>
          </p>
          <p>
            <i class="fa-solid fa-person-walking-dashed-line-arrow-right"></i>{" "}
            <b>5000+Lives Impacted </b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Impact;
