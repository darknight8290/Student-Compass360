
import {
  LayoutDashboard,
  CalendarDays,
  ClipboardCheck,
  BookOpen,
  FileText,
  Bell,
  Users,
  Settings,
  GraduationCap
} from "lucide-react";

function Sidebar({ activePage, setActivePage }) {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Attendance", icon: ClipboardCheck },
    { name: "Timetable", icon: CalendarDays },
    { name: "Assignments", icon: BookOpen },
    { name: "Results", icon: FileText },
    { name: "Notices", icon: Bell },
    { name: "Profile", icon: Users },
    { name: "Settings", icon: Settings }
  ];

  return (
    <aside className="sidebar">
      <div className="brand">
        <GraduationCap size={30} />
        <span>Smart Campus</span>
      </div>

      <p className="menu-title">MAIN MENU</p>

      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={
                activePage === item.name
                  ? "menu-item active"
                  : "menu-item"
              }
              onClick={() => setActivePage(item.name)}
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <p>Smart Campus 360</p>
        <small>Student Portal</small>
      </div>
    </aside>
  );
}

export default Sidebar;
