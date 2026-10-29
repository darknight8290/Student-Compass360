
import { useState } from "react";
import { FileText, PlusCircle } from "lucide-react";

function Results() {
  const [results, setResults] = useState([
    {
      id: 1,
      subject: "Database Management",
      marks: 82,
      total: 100
    },
    {
      id: 2,
      subject: "Java Programming",
      marks: 76,
      total: 100
    },
    {
      id: 3,
      subject: "Web Development",
      marks: 91,
      total: 100
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");
  const [total, setTotal] = useState("100");
  const [error, setError] = useState("");

  const totalMarks = results.reduce(
    (sum, result) => sum + Number(result.marks),
    0
  );

  const maxMarks = results.reduce(
    (sum, result) => sum + Number(result.total),
    0
  );

  const percentage = maxMarks
    ? ((totalMarks / maxMarks) * 100).toFixed(2)
    : "0.00";

  function handleAddResult(e) {
    e.preventDefault();

    const obtained = Number(marks);
    const maximum = Number(total);

    if (!subject.trim()) {
      setError("Please enter a subject name.");
      return;
    }

    if (
      marks.trim() === "" ||
      total.trim() === "" ||
      !Number.isFinite(obtained) ||
      !Number.isFinite(maximum) ||
      maximum <= 0 ||
      obtained < 0 ||
      obtained > maximum
    ) {
      setError("Enter valid marks within the total marks.");
      return;
    }

    const newResult = {
      id: Date.now(),
      subject: subject.trim(),
      marks: obtained,
      total: maximum
    };

    setResults((previous) => [...previous, newResult]);

    setSubject("");
    setMarks("");
    setTotal("100");
    setError("");
    setShowForm(false);
  }

  function handleDelete(id) {
    setResults((previous) =>
      previous.filter((result) => result.id !== id)
    );
  }

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Academic Results</h1>
          <p>View and manage subject-wise marks.</p>
        </div>

        <button
          className="primary-button"
          onClick={() => {
            setShowForm(!showForm);
            setError("");
          }}
        >
          <PlusCircle size={18} />
          {showForm ? "Cancel" : "Add Result"}
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <FileText size={22} />
          </div>
          <p>Total Subjects</p>
          <h2>{results.length}</h2>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <FileText size={22} />
          </div>
          <p>Marks Obtained</p>
          <h2>{totalMarks}</h2>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <FileText size={22} />
          </div>
          <p>Overall Percentage</p>
          <h2>{percentage}%</h2>
        </div>
      </div>

      {showForm && (
        <section className="panel result-form-panel">
          <h2>Add New Result</h2>

          <form onSubmit={handleAddResult}>
            <label>Subject Name</label>
            <input
              type="text"
              placeholder="e.g. Python Programming"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <div className="result-input-grid">
              <div>
                <label>Marks Obtained</label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  placeholder="e.g. 85"
                  value={marks}
                  onChange={(e) => setMarks(e.target.value)}
                />
              </div>

              <div>
                <label>Total Marks</label>
                <input
                  type="number"
                  min="0.01"
                  step="any"
                  value={total}
                  onChange={(e) => setTotal(e.target.value)}
                />
              </div>
            </div>

            {error && <p className="form-error">{error}</p>}

            <button className="primary-button" type="submit">
              Save Result
            </button>
          </form>
        </section>
      )}

      <section className="panel results-panel">
        <h2>Subject-wise Results</h2>

        <div className="table-wrapper">
          <table className="attendance-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Marks</th>
                <th>Percentage</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {results.map((result) => {
                const percent = (
                  (result.marks / result.total) * 100
                ).toFixed(1);

                return (
                  <tr key={result.id}>
                    <td>{result.subject}</td>
                    <td>
                      {result.marks} / {result.total}
                    </td>
                    <td>{percent}%</td>
                    <td>
                      <button
                        className="delete-button"
                        onClick={() => handleDelete(result.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}

              {results.length === 0 && (
                <tr>
                  <td colSpan="4">No results added yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Results;
