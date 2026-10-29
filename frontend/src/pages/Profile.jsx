
import { useState } from "react";
import { UserRound, Mail, Phone, GraduationCap, Pencil, Save } from "lucide-react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    course: "MCA",
    semester: "2nd Semester",
    studentId: "",
  });

  const [savedStudent, setSavedStudent] = useState(student);
  const [message, setMessage] = useState("");

  function handleChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }

  function handleSave(e) {
    e.preventDefault();

    if (!student.name.trim() || !student.email.trim()) {
      setMessage("Please enter your name and email.");
      return;
    }

    setSavedStudent(student);
    setIsEditing(false);
    setMessage("Profile saved successfully!");
  }

  function handleEdit() {
    setStudent(savedStudent);
    setIsEditing(true);
    setMessage("");
  }

  return (
    <section className="page-container">
      <div className="page-header">
        <div>
          <h1>My Profile</h1>
          <p>Manage your student information.</p>
        </div>

        {!isEditing && (
          <button className="primary-button" onClick={handleEdit}>
            <Pencil size={18} />
            Edit Profile
          </button>
        )}
      </div>

      <section className="panel profile-panel">
        <div className="profile-banner">
          <div className="profile-avatar">
            <UserRound size={38} />
          </div>
          <div>
            <h2>{savedStudent.name || "Student Name"}</h2>
            <p>{savedStudent.course} · {savedStudent.semester}</p>
          </div>
        </div>

        {message && <p className="profile-message">{message}</p>}

        <form onSubmit={handleSave} className="profile-form">
          <div className="profile-field">
            <label>Full Name</label>
            <input
              name="name"
              value={student.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              disabled={!isEditing}
            />
          </div>

          <div className="profile-field">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={student.email}
              onChange={handleChange}
              placeholder="Enter your email"
              disabled={!isEditing}
            />
          </div>

          <div className="profile-field">
            <label>Phone Number</label>
            <input
              name="phone"
              value={student.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              disabled={!isEditing}
            />
          </div>

          <div className="profile-field">
            <label>Student ID</label>
            <input
              name="studentId"
              value={student.studentId}
              onChange={handleChange}
              placeholder="Enter your student ID"
              disabled={!isEditing}
            />
          </div>

          <div className="profile-field">
            <label>Course</label>
            <select
              name="course"
              value={student.course}
              onChange={handleChange}
              disabled={!isEditing}
            >
              <option value="MCA">MCA</option>
              <option value="BCA">BCA</option>
              <option value="BTech">B.Tech</option>
              <option value="MBA">MBA</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="profile-field">
            <label>Semester</label>
            <select
              name="semester"
              value={student.semester}
              onChange={handleChange}
              disabled={!isEditing}
            >
              <option value="1st Semester">1st Semester</option>
              <option value="2nd Semester">2nd Semester</option>
              <option value="3rd Semester">3rd Semester</option>
              <option value="4th Semester">4th Semester</option>
              <option value="5th Semester">5th Semester</option>
              <option value="6th Semester">6th Semester</option>
            </select>
          </div>

          {isEditing && (
            <div className="profile-actions">
              <button className="primary-button" type="submit">
                <Save size={18} />
                Save Profile
              </button>

              <button
                type="button"
                className="profile-cancel"
                onClick={() => {
                  setStudent(savedStudent);
                  setIsEditing(false);
                  setMessage("");
                }}
              >
                Cancel
              </button>
            </div>
          )}
        </form>
      </section>
    </section>
  );
}

export default Profile;
