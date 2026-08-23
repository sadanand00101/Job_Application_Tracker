import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <Link to="/" className="auth-logo">JobTracker</Link>

        <div className="auth-heading">
          <h1>Create your account</h1>
          <p>Start organizing your job search today.</p>
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

        <form onSubmit={handleSignup}>
          <label>Name</label>
          <input type="text" placeholder="Your name" required />

          <label>Email</label>
          <input type="email" placeholder="you@example.com" required />

          <label>Password</label>
          <input type="password" placeholder="Create a password" required />

          <label>Confirm password</label>
          <input type="password" placeholder="Confirm your password" required />

          <button className="auth-submit" type="submit">
            Create account
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
