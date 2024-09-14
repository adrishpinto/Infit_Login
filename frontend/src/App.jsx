import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";
import NumberDropDown from "./login/NumberDropDown";
import DashboardHome from "./dashboard-home/DashboardHome"; // Assuming this component exists

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Route for dashboard home */}
        <Route path="/dashboard-home" element={<DashboardHome />} />

        {/* Route for login */}
        <Route path="/login" element={<Login />} />

        {/* Default route */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
