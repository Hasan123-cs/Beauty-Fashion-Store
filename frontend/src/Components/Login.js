import { useState } from "react";
import "../Css/Login.css";
// icons
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [emailAddress, setemailAddress] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  var showsignInBtn =
    Password.length > 0 && emailAddress.length > 0 ? true : false;
  //   handlers
  function handleRemeberMe() {
    setRememberMe(rememberMe == false ? true : false);
  }
  async function handleSignIn(e) {
    e.preventDefault();
    console.log(emailAddress, Password);
    try {
      const response = await fetch("https://localhost:7066/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: emailAddress,
          Password: Password,
          RememberMe: rememberMe,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.message);
        console.log(error);

        return;
      }

      // Save JWT token
      localStorage.setItem("token", data.token);

      // Redirect
      navigate("/home");
    } catch (error) {
      setError("Server error");
    }
  }

  // Google login handler
  async function handleGoogleSuccess(response) {
    console.log(response);

    const googleToken = response.credential;

    try {
      const res = await fetch("https://localhost:7066/api/auth/google-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: googleToken,
        }),
      });

      const data = await res.json();

      console.log(data);

      if (!res.ok) {
        setError(data.message);
        return;
      }

      localStorage.setItem("token", data.token);

      navigate("/home");
    } catch (error) {
      setError("Google login failed");
    }
  }
  // === handlers ===
  return (
    <div className="login-page">
      <div className="overlay"></div>

      <div className="login-card">
        <p className="welcome">WELCOME BACK</p>

        <h1>
          Sign <span>In</span>
        </h1>

        <form onSubmit={handleSignIn}>
          <label style={{ textAlign: "left" }}>Email address</label>
          <input
            type="email"
            placeholder="emma@example.com"
            onChange={(e) => {
              setemailAddress(e.target.value);
            }}
          />
          <div className="password-header">
            <label>Password</label>
          </div>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

          <div className="remember">
            <input type="checkbox" onClick={handleRemeberMe} />
            <span>Remember me for 30 days</span>
          </div>

          <button
            disabled={!showsignInBtn}
            style={
              !showsignInBtn
                ? {
                    backgroundColor: "lightgray",
                    cursor: "not-allowed",
                  }
                : {}
            }
            className="login-btn"
            type="submit"
          >
            Sign In →
          </button>

          <div className="divider">
            <span>or continue with</span>
          </div>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => {
              console.log("Google Login Failed");
            }}
          />

          <p className="signup-text">
            Don't have an account? <Link to="/register">Create one free</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
