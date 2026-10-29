
import {
  Users,
  ClipboardCheck,
  BookOpen,
  Bell
} from "lucide-react";

function Dashboard() {
  const cards = [
    {
      title: "Attendance",
      value: "85%",
      detail: "Overall attendance",
      icon: ClipboardCheck
    },
    {
      title: "Assignments",
      value: "4",
      detail: "Pending submissions",
      icon: BookOpen
    },
    {
      title: "Courses",
      value: "6",
      detail: "Enrolled subjects",
      icon: Users
    },
    {
      title: "Notices",
      value: "3",
      detail: "New announcements",
      icon: Bell
    }
  ];

  return (
    <>
      <div className="page-heading">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back! Here is your college overview.</p>
        </div>

        <div className="date-label">Academic Year 2026–27</div>
      </div>

      <div className="stats-grid">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div className="stat-card" key={card.title}>
              <div className="stat-icon">
                <Icon size={23} />
              </div>

              <p>{card.title}</p>
              <h2>{card.value}</h2>
              <small>{card.detail}</small>
            </div>
          );
        })}
      </div>

      <div className="content-grid">
        <section className="panel">
          <h2>Today's Timetable</h2>

          <div className="schedule-row">
            <span>09:00 AM</span>
            <div>
              <strong>Database Management</strong>
              <p>Room 204</p>
            </div>
          </div>

          <div className="schedule-row">
            <span>11:00 AM</span>
            <div>
              <strong>Web Development</strong>
              <p>Computer Lab 1</p>
            </div>
          </div>

          <div className="schedule-row">
            <span>02:00 PM</span>
            <div>
              <strong>Software Engineering</strong>
              <p>Room 105</p>
            </div>
          </div>
        </section>

        <section className="panel">
          <h2>Recent Notices</h2>

          <div className="notice-row">
            <strong>Internal Examination</strong>
            <p>Check the examination schedule.</p>
          </div>

          <div className="notice-row">
            <strong>Assignment Submission</strong>
            <p>Submit pending assignments on time.</p>
          </div>

          <div className="notice-row">
            <strong>College Announcement</strong>
            <p>Check the latest campus updates.</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
