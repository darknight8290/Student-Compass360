
import { useState } from "react";
import { CalendarDays, Clock, MapPin } from "lucide-react";

function Timetable() {
  const [selectedDay, setSelectedDay] = useState("Monday");

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const schedule = {
    Monday: [
      { time: "09:00 - 10:00", subject: "DBMS", teacher: "Mr. Sharma", room: "Room 204" },
      { time: "10:00 - 11:00", subject: "React Development", teacher: "Ms. Verma", room: "Lab 1" },
      { time: "11:30 - 12:30", subject: "Java Programming", teacher: "Mr. Singh", room: "Room 105" },
      { time: "02:00 - 03:00", subject: "Software Engineering", teacher: "Ms. Gupta", room: "Room 201" }
    ],
    Tuesday: [
      { time: "09:00 - 10:00", subject: "Python Programming", teacher: "Mr. Sharma", room: "Lab 2" },
      { time: "10:00 - 11:00", subject: "Computer Networks", teacher: "Ms. Verma", room: "Room 103" },
      { time: "11:30 - 12:30", subject: "DBMS Lab", teacher: "Mr. Singh", room: "Lab 1" }
    ],
    Wednesday: [
      { time: "09:00 - 10:00", subject: "Java Programming", teacher: "Mr. Singh", room: "Room 105" },
      { time: "10:00 - 11:00", subject: "DBMS", teacher: "Mr. Sharma", room: "Room 204" },
      { time: "01:00 - 02:00", subject: "Mathematics", teacher: "Ms. Gupta", room: "Room 201" }
    ],
    Thursday: [
      { time: "09:00 - 10:00", subject: "React Development", teacher: "Ms. Verma", room: "Lab 1" },
      { time: "10:00 - 11:00", subject: "Python Programming", teacher: "Mr. Sharma", room: "Lab 2" },
      { time: "11:30 - 12:30", subject: "Computer Networks", teacher: "Ms. Verma", room: "Room 103" }
    ],
    Friday: [
      { time: "09:00 - 10:00", subject: "Software Engineering", teacher: "Ms. Gupta", room: "Room 201" },
      { time: "10:00 - 11:00", subject: "DBMS Lab", teacher: "Mr. Singh", room: "Lab 1" },
      { time: "01:00 - 02:00", subject: "Java Programming", teacher: "Mr. Singh", room: "Room 105" }
    ],
    Saturday: [
      { time: "09:00 - 10:00", subject: "Project Work", teacher: "Project Mentor", room: "Lab 1" },
      { time: "10:00 - 11:00", subject: "Practical Session", teacher: "Lab Instructor", room: "Lab 2" }
    ]
  };

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Class Timetable</h1>
          <p>View your weekly class schedule.</p>
        </div>

        <div className="date-label">
          <CalendarDays size={18} />
          Weekly Schedule
        </div>
      </div>

      <section className="panel">
        <h2>Select Day</h2>

        <div className="day-buttons">
          {days.map((day) => (
            <button
              key={day}
              className={
                selectedDay === day
                  ? "day-button selected"
                  : "day-button"
              }
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>
      </section>

      <section className="panel timetable-panel">
        <h2>{selectedDay}'s Classes</h2>

        {schedule[selectedDay].map((item, index) => (
          <div className="class-card" key={index}>
            <div className="class-time">
              <Clock size={18} />
              <span>{item.time}</span>
            </div>

            <div className="class-details">
              <h3>{item.subject}</h3>
              <p>{item.teacher}</p>
            </div>

            <div className="class-room">
              <MapPin size={17} />
              {item.room}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Timetable;
