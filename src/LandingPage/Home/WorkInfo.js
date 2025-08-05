import React from "react";
function WorkInfo() {
  return (
    <div className="container1 p-3 mx-3" style={{ height: "300px" }}>
      <div className="row h-100">
        <div className="col-5">
          <img
            src="media/Images/work.png"
            alt="workflow Img"
            style={{ height: "100%", width: "100%", objectFit: "fit" }}
          />
        </div>
        <div className="col-7" style={{ maxHeight: "100%", overflowY: "auto" }}>
          {[
            "Fill the Donation form",
            "we will verify the medicine and collect it from you",
            "sell to pharmacy",
            "Pharmacy receives the donation",
          ].map((step, index) => (
            <div
              className="mt-4"
              key={index}
              style={{ background: "#F8F8f8", height: "100px" }}
            >
              <div>Step {index + 1}</div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkInfo;
