
import { useState } from "react";
import { BookOpen, Clock, CheckCircle, Search } from "lucide-react";

function Assignments() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const [assignments] = useState([
    {
      id: 1,
      title: "DBMS Practical File",
      subject: "Database Management",
      dueDate: "2026-11-02",
      status: "Pending"
    },
    {
      id: 2,
      title: "React Mini Project",
      subject: "Web Development",
      dueDate: "2026-11-05",
      status: "Pending"
    },
    {
      id: 3,
      title: "Java OOP Assignment",
      subject: "Java Programming",
      dueDate: "2026-10-25",
      status: "Submitted"
    },
    {
      id: 4,
      title: "Software Engineering Report",
      subject: "Software Engineering",
      dueDate: "2026-11-08",
      status: "Pending"
    },
    {
      id: 5,
      title: "Python Practical",
      subject: "Python Programming",
      dueDate: "2026-10-20",
      status: "Submitted"
    }
  ]);

  const filteredAssignments = assignments.filter((item) => {
    const matchesFilter =
      filter === "All" || item.status === filter;

    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.subject.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const pendingCount = assignments.filter(
    (item) => item.status === "Pending"
  ).length;

  const submittedCount = assignments.filter(
    (item) => item.status === "Submitted"
  ).length;

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Assignments</h1>
          <p>Manage your coursework and submission deadlines.</p>
        </div>

        <div className="date-label">
          <BookOpen size={18} />
          Academic Tasks
        </div>
      </div>

      <div className="stats-grid assignment-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <BookOpen size={22} />
          </div>
          <p>Total Assignments</p>
          <h2>{assignments.length}</h2>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Clock size={22} />
          </div>
          <p>Pending</p>
          <h2>{pendingCount}</h2>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <CheckCircle size={22} />
          </div>
          <p>Submitted</p>
          <h2>{submittedCount}</h2>
        </div>
      </div>

      <section className="panel">
        <div className="assignment-toolbar">
          <h2>My Assignments</h2>

          <div className="search-box">
            <Search size={18} />
            <input
              placeholder="Search assignments..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="filter-buttons">
          {["All", "Pending", "Submitted"].map((item) => (
            <button
              key={item}
              className={
                filter === item
                  ? "day-button selected"
                  : "day-button"
              }
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="assignment-list">
          {filteredAssignments.map((item) => (
            <div className="assignment-card" key={item.id}>
              <div className="assignment-icon">
                <BookOpen size={23} />
              </div>

              <div className="assignment-info">
                <h3>{item.title}</h3>
                <p>{item.subject}</p>
                <small>Due: {item.dueDate}</small>
              </div>

              <span
                className={
                  item.status === "Submitted"
                    ? "status-good"
                    : "status-low"
                }
              >
                {item.status}
              </span>
            </div>
          ))}

          {filteredAssignments.length === 0 && (
            <p>No assignments found.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Assignments;
