
import { useState } from "react";
import { Plus, Trash2, Bell } from "lucide-react";

function Notices() {
  const [notices, setNotices] = useState([
    {
      id: 1,
      title: "Exam Schedule",
      message: "The semester examination schedule will be announced soon.",
      date: "2026-10-29",
    },
    {
      id: 2,
      title: "College Holiday",
      message: "Please check the college notice board for holiday updates.",
      date: "2026-10-28",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function addNotice(e) {
    e.preventDefault();

    if (!title.trim() || !message.trim()) {
      setError("Please fill in both fields.");
      return;
    }

    const newNotice = {
      id: Date.now(),
      title: title.trim(),
      message: message.trim(),
      date: new Date().toISOString().slice(0, 10),
    };

    setNotices([newNotice, ...notices]);
    setTitle("");
    setMessage("");
    setError("");
    setShowForm(false);
  }

  function deleteNotice(id) {
    setNotices(notices.filter((notice) => notice.id !== id));
  }

  return (
    <section className="page-container">
      <div className="page-header">
        <div>
          <h1>Notices</h1>
          <p>Manage important campus announcements.</p>
        </div>

        <button
          className="primary-button"
          onClick={() => setShowForm(!showForm)}
        >
          <Plus size={18} />
          Add Notice
        </button>
      </div>

      {showForm && (
        <section className="panel notice-form-panel">
          <h2>Create New Notice</h2>

          <form onSubmit={addNotice}>
            <label>Notice Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter notice title"
            />

            <label>Notice Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter notice details"
              rows={4}
            />

            {error && <p className="form-error">{error}</p>}

            <button className="primary-button" type="submit">
              Publish Notice
            </button>
          </form>
        </section>
      )}

      <div className="notices-list">
        {notices.length === 0 ? (
          <section className="panel">
            <p>No notices available. Click Add Notice to create one.</p>
          </section>
        ) : (
          notices.map((notice) => (
            <article className="panel notice-card" key={notice.id}>
              <div className="notice-icon">
                <Bell size={22} />
              </div>

              <div className="notice-details">
                <h3>{notice.title}</h3>
                <p>{notice.message}</p>
                <small>{notice.date}</small>
              </div>

              <button
                className="delete-button"
                onClick={() => deleteNotice(notice.id)}
                aria-label={`Delete ${notice.title}`}
              >
                <Trash2 size={17} />
              </button>
            </article>
          ))
        )}
      </div>
    </section>
  );
}

export default Notices;
