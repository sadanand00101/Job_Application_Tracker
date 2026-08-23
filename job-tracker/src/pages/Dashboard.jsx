import { Link } from "react-router-dom";
import "./Dashboard.css";

const applications = [
  {
    company: "Google",
    role: "Frontend Developer",
    status: "Interview",
    date: "Aug 20",
    priority: true,
  },
  {
    company: "Amazon",
    role: "Software Engineer Intern",
    status: "Applied",
    date: "Aug 18",
    priority: false,
  },
  {
    company: "Microsoft",
    role: "React Developer",
    status: "Screening",
    date: "Aug 16",
    priority: true,
  },
  {
    company: "Meta",
    role: "Software Engineer",
    status: "Rejected",
    date: "Aug 12",
    priority: false,
  },
];

function Dashboard() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <Link to="/" className="dashboard-logo">JobTracker</Link>

        <nav className="side-nav">
          <Link to="/dashboard" className="active">Dashboard</Link>
          <Link to="/applications">Applications</Link>
          <Link to="/kanban">Kanban</Link>
          <Link to="/analytics">Analytics</Link>
        </nav>

        <nav className="side-bottom">
          <Link to="/settings">Settings</Link>
          <Link to="/">Log out</Link>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Here's what's happening with your job search.</p>
          </div>

          <div className="header-actions">
            <button className="notification-btn">🔔</button>
            <div className="avatar">S</div>
          </div>
        </header>

        <button className="new-application">+ New Application</button>

        <section className="stats">
          <div className="stat-card">
            <span>Total Applications</span>
            <strong>42</strong>
          </div>
          <div className="stat-card">
            <span>Active</span>
            <strong>12</strong>
          </div>
          <div className="stat-card">
            <span>Interviews</span>
            <strong>5</strong>
          </div>
          <div className="stat-card">
            <span>Offers</span>
            <strong>2</strong>
          </div>
        </section>

        <section className="attention-section">
          <div className="section-title">
            <h2>What needs your attention?</h2>
            <span>2 items</span>
          </div>

          <div className="attention-grid">
            <div className="attention-card">
              <div className="attention-dot red"></div>
              <div>
                <strong>Microsoft</strong>
                <p>Follow-up is overdue by 2 days.</p>
              </div>
              <button>Follow up</button>
            </div>

            <div className="attention-card">
              <div className="attention-dot orange"></div>
              <div>
                <strong>Google</strong>
                <p>Technical interview tomorrow at 10:00 AM.</p>
              </div>
              <button>View</button>
            </div>
          </div>
        </section>

        <div className="dashboard-grid">
          <section className="applications-section">
            <div className="section-title">
              <h2>Recent Applications</h2>
              <Link to="/applications">View all</Link>
            </div>

            <div className="application-list">
              {applications.map((application) => (
                <div className="application-row" key={`${application.company}-${application.role}`}>
                  <div className="application-company">
                    <div className="company-icon">
                      {application.company[0]}
                    </div>
                    <div>
                      <strong>{application.company}</strong>
                      <span>{application.role}</span>
                    </div>
                  </div>

                  <div className={`status-badge ${application.status.toLowerCase()}`}>
                    {application.status}
                  </div>

                  <span className="application-date">{application.date}</span>

                  <span className={application.priority ? "star active" : "star"}>
                    ★
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="upcoming-section">
            <div className="section-title">
              <h2>Upcoming</h2>
            </div>

            <div className="upcoming-list">
              <div className="upcoming-item">
                <span className="calendar-icon">27</span>
                <div>
                  <strong>Google Interview</strong>
                  <span>Aug 27 · 10:00 AM</span>
                </div>
              </div>

              <div className="upcoming-item">
                <span className="calendar-icon">28</span>
                <div>
                  <strong>Microsoft Follow-up</strong>
                  <span>Aug 28 · 9:00 AM</span>
                </div>
              </div>

              <div className="upcoming-item">
                <span className="calendar-icon">30</span>
                <div>
                  <strong>Amazon Deadline</strong>
                  <span>Aug 30</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
