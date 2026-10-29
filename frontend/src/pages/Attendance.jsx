
import { useState } from "react";
import { Search, ClipboardCheck } from "lucide-react";

function Attendance() {
  const [search, setSearch] = useState("");

  const [students] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      rollNo: "MCA001",
      present: 42,
      total: 48
    },
    {
      id: 2,
      name: "Priya Verma",
      rollNo: "MCA002",
      present: 45,
      total: 48
    },
    {
      id: 3,
      name: "Amit Kumar",
      rollNo: "MCA003",
      present: 36,
      total: 48
    },
    {
      id: 4,
      name: "Neha Singh",
      rollNo: "MCA004",
      present: 40,
      total: 48
    }
  ]);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.rollNo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Attendance</h1>
          <p>View student attendance records and percentages.</p>
        </div>

        <div className="date-label">
          <ClipboardCheck size={17} />
          Attendance Records
        </div>
      </div>

      <section className="panel">
        <div className="attendance-toolbar">
          <h2>Student Attendance</h2>

          <div className="search-box">
            <Search size={18} />

            <input
              type="text"
              placeholder="Search name or roll number..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="table-wrapper">
          <table className="attendance-table">
            <thead>
              <tr>
                <th>Roll No.</th>
                <th>Student Name</th>
                <th>Present</th>
                <th>Total Classes</th>
                <th>Percentage</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student) => {
                const percentage = Math.round(
                  (student.present / student.total) * 100
                );

                return (
                  <tr key={student.id}>
                    <td>{student.rollNo}</td>
                    <td>{student.name}</td>
                    <td>{student.present}</td>
                    <td>{student.total}</td>
                    <td>{percentage}%</td>
                    <td>
                      <span
                        className={
                          percentage >= 75
                            ? "status-good"
                            : "status-low"
                        }
                      >
                        {percentage >= 75 ? "Good" : "Low"}
                      </span>
                    </td>
                  </tr>
                );
              })}

              {filteredStudents.length === 0 && (
                <tr>
                  <td colSpan="6">No students found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Attendance;
