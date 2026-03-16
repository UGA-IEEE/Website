import "./styles.css";
import ugaIeeeLogo from "./assets/UGAIEEE_Rectangular_BR.png";
import instagramLogo from "./assets/Instagram_icon.png";

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();

const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(today);

const events = {
  5: "General Body Meeting",
  12: "Resume Workshop",
  26: "General Body Meeting",
};

const firstWeekday = new Date(year, month, 1).getDay();
const daysInMonth = new Date(year, month + 1, 0).getDate();

const cells = Array.from({ length: firstWeekday + daysInMonth }, (_, i) =>
  i < firstWeekday ? null : i - firstWeekday + 1
);

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];



export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <a href="#" className="brand" aria-label="UGA IEEE Home">
          <img src={ugaIeeeLogo} alt="UGA IEEE" className="brandLogo" />
        </a>

        <nav className="topLinks">
          <a href="#home">Home</a>
          <a href="#exec-board">Exec Board</a>
          <a href="#fyc">FYC</a>
          <a href="#micromouse">MicroMouse</a>
          <a href="#gallery">Gallery</a>
          <a
            href="https://instagram.com/uga.ieee"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="socialBtn"
          >
            <img src={instagramLogo} alt="Instagram" className="socialIcon" />
          </a>
        </nav>
      </header>

      <section className="healthcareFeature" aria-labelledby="healthcare-title">
        <div className="healthcareInner">
          <div className="healthcareCopy">
            <h2 id="healthcare-title">About Us</h2>
            <p>
              The Institute of Electrical and Electronics Engineers (IEEE) is the world’s largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity.
              <br />
              As a student branch, our goal is to uphold the organization’s mission of fostering the knowledge for technological excellence and furthering the professional development of students in the technology field. 
            </p>
          </div>

          <div className="healthcareImages" aria-label="Healthcare visuals">
            <img
              className="healthcareMainImg"
              src="src/assets/healthcare-main.jpg"
              alt="Healthcare robot in hospital"
            />
            <img
              className="healthcareSideImg"
              src="/src/assets/dean-orso-picture.png"
              alt="Medical device in operating room"
            />
            <img
              className="healthcareSideImg"
              src="/src/assets/IMG_0461.JPEG"
              alt="Scientific visualization"
            />
          </div>
        </div>
      </section>

      <section className="calendarSection" id="events">
        <h2>{monthName} Upcoming Events</h2>

        <div className="calendarGrid">
          {weekdays.map((d) => (
            <div key={d} className="calendarHeader">{d}</div>
          ))}

          {cells.map((day, i) => (
            <div key={i} className={`calendarCell ${day && events[day] ? "eventDay" : ""}`}>
              {day && <span>{day}</span>}
            </div>
          ))}
        </div>

        <ul className="eventList">
          {Object.entries(events).map(([day, title]) => (
            <li key={day}>
              <strong>{monthName} {day}:</strong> {title}
            </li>
          ))}
        </ul>
      </section>


      <footer className="siteFooter">
        <div className="footerLeft" />
        <p className="footerText">&copy; UGA IEEE</p>
        <div className="footerSocial">
          <a
            href="https://instagram.com/uga.ieee"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="socialBtn"
          >
            <img src={instagramLogo} alt="Instagram" className="socialIcon" />
          </a>
        </div>
      </footer>
    </div>
  );
}
