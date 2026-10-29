
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Timetable from "./pages/Timetable";
import Assignments from "./pages/Assignments";
import Results from "./pages/Results";
import Notices from "./pages/Notices";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Students from "./pages/Students";
import "./styles/App.css";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div className="app-layout">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="main-content">
        
        {activePage === "Dashboard" ? (
          <Dashboard />
          ) : activePage === "Students" ? (
  <Students />
        ) : activePage === "Attendance" ? (
          <Attendance />
        ) : activePage === "Timetable" ? (
          <Timetable />
        ) : activePage === "Assignments" ? (
          <Assignments />
        ) : activePage === "Results" ? (
          <Results />
        ) : activePage === "Notices" ? (
          <Notices />
        ) : activePage === "Profile" ? (
          <Profile />
        ) : activePage === "Settings" ? (
          <Settings />
        ) : (
          <section className="panel page-placeholder">
            <h1>{activePage}</h1>
            <p>
              The {activePage} page will be developed soon.
            </p>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
