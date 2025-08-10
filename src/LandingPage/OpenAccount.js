import React from "react";

function OpenAccount() {
  return (
    <div className="container my-5">
      <h3 className="mb-3 text-center">Open Your MediDrop Account</h3>
      <p className="text-center">
        Join MediDrop to donate unused medicines, track your impact, and support
        community health — all for free.
      </p>
      <div className="text-center mt-4">
        <a
          href="#"
          className="btn text-white px-4 py-2"
          style={{ backgroundColor: "blue" }}
        >
          Sign Up for Free
        </a>
      </div>
    </div>
  );
}

export default OpenAccount;
