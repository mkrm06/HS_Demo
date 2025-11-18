import React from "react";
import "../index.css";

const Login = () => {
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

          <h2 className="left-title">Welcome Back!</h2>

          <p className="left-subtitle">
            Sign in to explore our exclusive collection of kurtas, traditional wear,
            and modern fashion for the entire family.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="register-right">
        <div className="register-box">

          {/* TITLES */}
          <h1 className="reg-title">Sign In</h1>
          <p className="reg-subtitle">Welcome back to House of Salaga</p>

          {/* SOCIAL BUTTONS */}
          <div className="social-section">

            <button className="social-btn">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                alt="Google"
              />
              Continue with Google
            </button>

            <button className="social-btn">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                alt="Facebook"
              />
              Continue with Facebook
            </button>

            <button className="social-btn">
              <img
                src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                alt="Email"
              />
              Continue with Email
            </button>

          </div>

          {/* DIVIDER */}
          <div className="divider-row">
            <div className="line"></div>
            <span>Or sign in with password</span>
            <div className="line"></div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="form-area">

            <label>Email Address</label>
            <input type="email" placeholder="your.email@example.com" required />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />

            <div className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>

              <a href="#" className="forgot">Forgot Password ?</a>
            </div>

            <button className="submit-btn" type="submit">
              Sign In
            </button>
          </form>

          {/* FOOTER */}
          <p className="bottom-login">
            Don't have an account?{" "}
            <a href="/register" className="link">Sign up</a>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;
