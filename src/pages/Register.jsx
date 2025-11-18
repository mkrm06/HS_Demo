import React from "react";
import "../index.css";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register-wrapper">

      {/* LEFT SIDE */}
      <div className="register-left">
        <div className="register-left-overlay"></div>

        <div className="register-left-content">
          <div className="register-logo-circle">HS</div>

          <h2 className="left-title">Join Our Family!</h2>

          <p className="left-subtitle">
            Create an account to enjoy exclusive offers, personalized
            recommendations, and seamless shopping experience.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="register-right">
        <div className="register-box">

          {/* TITLES */}
          <h1 className="reg-title">Create Account</h1>
          <p className="reg-subtitle">Join House of Salaga Today</p>

          {/* SOCIAL BUTTONS */}
          <div className="social-section">

            <button className="social-btn">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                alt="Google"
              />
              Sign up with Google
            </button>

            <button className="social-btn">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                alt="Facebook"
              />
              Sign up with Facebook
            </button>

            <button className="social-btn">
              <img
                src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                alt="Email"
              />
              Sign up with Email
            </button>

          </div>

          {/* DIVIDER */}
          <div className="divider-row">
            <div className="line"></div>
            <span>Or register with email</span>
            <div className="line"></div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="form-area">

            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />

            <label>Email Address</label>
            <input type="email" placeholder="your.email@example.com" required />

            <label>Phone Number</label>
            <input type="text" placeholder="+94 98765 43210" required />

            <label>Password</label>
            <input type="password" placeholder="Create a strong password" required />

            <label>Confirm Password</label>
            <input type="password" placeholder="Re-enter your password" required />

            <div className="terms-row">
              <input type="checkbox" required />
              <p>
                I agree to the{" "}
                <span className="link">Terms & Conditions</span> and{" "}
                <span className="link">Privacy Policy</span>.
              </p>
            </div>

            <button className="submit-btn" type="submit">
              Create Account
            </button>
          </form>

          {/* FOOTER */}
          <p className="bottom-login">
            Already have an account?{" "}
            <a href="/login" className="link">Sign in</a>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Register;
