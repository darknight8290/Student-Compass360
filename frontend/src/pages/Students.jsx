
import { useEffect, useState } from "react";
import { Plus, Trash2, Users } from "lucide-react";

const API_URL = "http://localhost:5789/student";

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("MCA");
  const [semester, setSemester] = useState("2nd Semester");
  const [studentId, setStudentId] = useState("");
  const [showForm, setShowForm] = useState(false);

  async function loadStudents() {
    try {
      setLoading(true);
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Could not load students.");
      }

      const data = await response.json();
      setStudents(data);
      setError("");
    } catch (err) {
      setError("Cannot connect to backend. Check that your server is running.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadStudents();
  }, []);

  async function addStudent(e) {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          course,
          semester,
          studentId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || "Could not add student.");
      }

      setName("");
      setEmail("");
      setPhone("");
      setCourse("MCA");
      setSemester("2nd Semester");
      setStudentId("");
      setShowForm(false);

      await loadStudents();
    } catch (err) {
      setError(err.message);
    }
  }

  async function deleteStudent(id) {
    if (!window.confirm("Are you sure you want to delete this student?")) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not delete student.");
      }

      await loadStudents();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <section className="page-container">
      <div className="page-header">
        <div>
          <h1>Student Management</h1>
          <p>Add and manage student records saved in MongoDB.</p>
        </div>

        <button
          className="primary-button"
          onClick={() => {
            setShowForm(!showForm);
            setError("");
          }}
        >
          <Plus size={18} />
          Add Student
        </button>
      </div>

      {error && <p className="student-error">{error}</p>}

      {showForm && (
        <section className="panel student-form-panel">
          <h2>Add New Student</h2>

          <form onSubmit={addStudent}>
            <label>Full Name *</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter full name"
              required
            />

            <label>Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              required
            />

            <label>Phone</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
            />

            <label>Student ID</label>
            <input
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="Enter student ID"
            />

            <label>Course</label>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="MCA">MCA</option>
              <option value="BCA">BCA</option>
              <option value="BTech">B.Tech</option>
              <option value="MBA">MBA</option>
              <option value="Other">Other</option>
            </select>

            <label>Semester</label>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            >
              <option value="1st Semester">1st Semester</option>
              <option value="2nd Semester">2nd Semester</option>
              <option value="3rd Semester">3rd Semester</option>
              <option value="4th Semester">4th Semester</option>
              <option value="5th Semester">5th Semester</option>
              <option value="6th Semester">6th Semester</option>
            </select>

            <button className="primary-button" type="submit">
              Save Student
            </button>
          </form>
        </section>
      )}

      <section className="panel students-panel">
        <h2>
          <Users size={21} /> Students ({students.length})
        </h2>

        {loading ? (
          <p>Loading students...</p>
        ) : students.length === 0 ? (
          <p>No students found. Click Add Student to create a record.</p>
        ) : (
          <div className="table-wrapper">
            <table className="attendance-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Course</th>
                  <th>Semester</th>
                  <th>Student ID</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {students.map((student) => (
                  <tr key={student._id}>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.phone || "-"}</td>
                    <td>{student.course}</td>
                    <td>{student.semester}</td>
                    <td>{student.studentId || "-"}</td>
                    <td>
                      <button
                        className="delete-button"
                        onClick={() => deleteStudent(student._id)}
                        aria-label={`Delete ${student.name}`}
                      >
                        <Trash2 size={16} /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </section>
  );
}

export default Students;
