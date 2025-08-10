import React from "react";
import "./SignUp.css";

function SignUp() {
  const handleLogIn = () => {
    alert("Log In button clicked!");
  };

  const handleSignUp = () => {
    alert("Sign Up button clicked!");
  };

  return (
    <>
      <div className="signup-container">
        <div className="login-box">
          <h2>Log In</h2>
          <div className="social-icons">
            <button>G</button>
            <button>F</button>
            <button>+</button>
            <button>in</button>
          </div>
          <p>or use your email password</p>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button className="login-btn" onClick={handleLogIn}>
            LOG IN
          </button>
        </div>

        <div className="signup-box">
          <h2>Hello, Friend!</h2>
          <p>Register with your personal details to use all of site features</p>
          <button className="signup-btn" onClick={handleSignUp}>
            SIGN UP
          </button>
        </div>
      </div>
    </>
  );
}

export default SignUp;
