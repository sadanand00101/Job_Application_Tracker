import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <nav className="navbar">
        <a href="/" className="logo">
          JobTracker
        </a>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#integrations">Integrations</a>
        </div>

        <div className="nav-actions">
          <button
            className="login-btn"
            onClick={() => navigate("/login")}
          >
            Log in
          </button>

          <button
            className="start-btn"
            onClick={() => navigate("/signup")}
          >
            Get Started
          </button>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="hero-tag">
              Your job search, organized.
            </span>

            <h1>
              Track every application.
              <span> Never miss an opportunity.</span>
            </h1>

            <p>
              Save jobs, track your progress, manage interviews and
              follow-ups, and understand what's working throughout
              your job search.
            </p>

            <div className="hero-actions">
              <button
                className="start-btn"
                onClick={() => navigate("/signup")}
              >
                Get Started
              </button>

              <button
                className="demo-btn"
                onClick={() => navigate("/dashboard")}
              >
                Explore Demo
              </button>
            </div>
          </div>

          <div className="hero-preview">
            <div className="preview-top">
              <span>Dashboard</span>
              <span>•••</span>
            </div>

            <div className="preview-stats">
              <div>
                <small>Total Applications</small>
                <strong>42</strong>
              </div>

              <div>
                <small>Active</small>
                <strong>12</strong>
              </div>

              <div>
                <small>Interviews</small>
                <strong>5</strong>
              </div>

              <div>
                <small>Offers</small>
                <strong>2</strong>
              </div>
            </div>

            <div className="preview-body">
              <div className="preview-chart">
                <div className="preview-title">
                  Applications
                </div>

                <div className="chart">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div className="preview-attention">
                <div className="preview-title">
                  Attention
                </div>

                <div className="attention-item">
                  <span className="status orange"></span>

                  <div>
                    <strong>Google</strong>
                    <small>Interview tomorrow</small>
                  </div>
                </div>

                <div className="attention-item">
                  <span className="status red"></span>

                  <div>
                    <strong>Microsoft</strong>
                    <small>Follow-up overdue</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features" id="features">
          <div className="section-heading">
            <span>Everything you need</span>

            <h2>
              Manage your entire job search in one place.
            </h2>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">↗</div>

              <h3>Auto-fill applications</h3>

              <p>
                Paste a job URL and automatically fill in the
                important job details.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⌕</div>

              <h3>Powerful filters</h3>

              <p>
                Find exactly what you need with search, filters
                and saved views.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">★</div>

              <h3>Prioritize jobs</h3>

              <p>
                Star important applications and quickly find the
                opportunities you care about most.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">◷</div>

              <h3>Never miss a follow-up</h3>

              <p>
                Keep track of interviews, deadlines and
                follow-ups with reminders.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">↗</div>

              <h3>Understand your search</h3>

              <p>
                See response rates, interview rates, sources and
                other useful job-search analytics.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⌁</div>

              <h3>Connect your tools</h3>

              <p>
                Connect services like Google Calendar and Notion
                when you need them.
              </p>
            </div>
          </div>
        </section>

        <section className="how-it-works" id="how-it-works">
          <div className="section-heading">
            <span>Simple workflow</span>

            <h2>From job posting to offer.</h2>
          </div>

          <div className="steps">
            <div className="step">
              <span>01</span>
              <h3>Paste the job link</h3>
              <p>
                Drop the job posting URL into JobTracker.
              </p>
            </div>

            <div className="step">
              <span>02</span>
              <h3>Review the details</h3>
              <p>
                We fill what we can. You review and edit before
                saving.
              </p>
            </div>

            <div className="step">
              <span>03</span>
              <h3>Track everything</h3>
              <p>
                Manage statuses, interviews, follow-ups and
                deadlines.
              </p>
            </div>

            <div className="step">
              <span>04</span>
              <h3>Understand what's working</h3>
              <p>
                Use your data to improve your job search.
              </p>
            </div>
          </div>
        </section>

        <section className="integrations" id="integrations">
          <div className="section-heading">
            <span>Integrations</span>

            <h2>Keep your workflow connected.</h2>
          </div>

          <div className="integration-grid">
            <div className="integration-card">
              <strong>Google Calendar</strong>
              <span>Interviews & reminders</span>
            </div>

            <div className="integration-card">
              <strong>Notion</strong>
              <span>Application database sync</span>
            </div>

            <div className="integration-card">
              <strong>Email</strong>
              <span>Follow-up reminders</span>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <h2>
            Stop losing track of your applications.
          </h2>

          <p>
            Keep your job search organized from application
            to offer.
          </p>

          <button
            className="start-btn"
            onClick={() => navigate("/signup")}
          >
            Get Started
          </button>
        </section>
      </main>

      <footer>
        <div className="logo">JobTracker</div>

        <p>Built with ❤️ by Sadanand</p>
      </footer>
    </div>
  );
};

export default Home;