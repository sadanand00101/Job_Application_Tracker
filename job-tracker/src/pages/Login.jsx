import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <Link to="/" className="auth-logo">JobTracker</Link>

        <div className="auth-heading">
          <h1>Welcome back</h1>
          <p>Log in to continue tracking your applications.</p>
        </div>

        <div className="oauth-buttons">
          <button className="oauth-btn">
            <span>G</span>
            Continue with Google
          </button>

          <button className="oauth-btn">
            <span>◉</span>
            Continue with GitHub
          </button>
        </div>

        <div className="divider"><span>or</span></div>

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input type="email" placeholder="you@example.com" required />

          <div className="password-label">
            <label>Password</label>
            <Link to="/forgot-password">Forgot password?</Link>
          </div>

          <input type="password" placeholder="Enter your password" required />

          <button className="auth-submit" type="submit">
            Log in
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
