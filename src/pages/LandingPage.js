import { useAuth } from "../AuthContext";

const LandingPage = () => {
  const { user, logout } = useAuth();

  return (
    <div className="container-fluid bg-light min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-primary p-3">
        <span className="navbar-brand">Dashboard</span>
        <button onClick={logout} className="btn btn-danger">Logout</button>
      </nav>

      {/* Dashboard Grid */}
      <div className="container mt-4">
        <div className="row">
          {/* Profile Card */}
          <div className="col-md-4">
            <div className="card p-3 text-center">
              <h4>Profile</h4>
              <p>{user?.email}</p>
            </div>
          </div>

          {/* Analytics Card */}
          <div className="col-md-4">
            <div className="card p-3 text-center">
              <h4>Analytics</h4>
              <p>View usage stats.</p>
            </div>
          </div>

          {/* Settings Card */}
          <div className="col-md-4">
            <div className="card p-3 text-center">
              <h4>Settings</h4>
              <p>Manage account settings.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
