import { useEffect, useState } from "react";
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

const execBoardMembers = [
  {
    name: "Jordan Howard",
    role: "President",
    image:
      "src/assets/Exec/Portrait Jordan.jpeg",
    linkedin: "https://www.linkedin.com/in/jordan-howard-7ab25616b/",
  },
  {
    name: "Neel Desai",
    role: "Vice President",
    image:
      "src/assets/Exec/Landscape Neel.jpeg",
    linkedin: "https://www.linkedin.com/in/neel-desai-09a20a21a/",
  },
  {
    name: "Omar Naqib",
    role: "Engineering Director",
    image:
      "src/assets/Exec/Landscape Omar.jpeg",
    linkedin: "https://www.linkedin.com/in/omarnaqib/",
  },
  {
    name: "Allen Rucker",
    role: "Outreach Director",
    image:
      "src/assets/Exec/Landscape Allen.jpeg",
    linkedin: "https://www.linkedin.com/in/allen-rucker-a41433248/",
  },
  {
    name: "Sidney Johnson",
    role: "Events Director",
    image:
      "src/assets/Exec/JOHNSON_S-PHOTO.jpeg",
    linkedin: "https://www.linkedin.com/in/sidney-johnson4705/",
  },
  {
    name: "Jun Chambers",
    role: "First-Year Advisor",
    image:
      "src/assets/Exec/Portrait Jun.jpeg",
    linkedin: "https://www.linkedin.com/in/jun-chambers/",
  },
  {
    name: "Joshua Carter",
    role: "First-Year Advisor",
    image:
      "src/assets/Exec/Portrait Joshua.jpeg",
    linkedin: "https://www.linkedin.com/in/joshua-carter-904651325/",
  },
  {
    name: "Jason Roode",
    role: "Secretary",
    image:
      "src/assets/Exec/Landscape Jason.jpeg",
    linkedin: "https://www.linkedin.com/in/jason-roode/",
  },
];

const fycMembers = [
  {
    name: "Anthony Behrend",
    image:
      "src/assets/FYC/Anthony.png",
    linkedin: "https://www.linkedin.com/in/anthony-behrend/",
  },
  {
    name: "Coco Tang",
    image:
      "src/assets/FYC/Coco.png",
    linkedin: "https://www.linkedin.com/in/coco-tang1/",
  },
  {
    name: "Hieu Nguyen",
    image:
      "src/assets/FYC/Hieu.png",
    linkedin: "https://www.linkedin.com/in/hieu-winn/",
  },
  {
    name: "Jerry Wang",
    image:
      "src/assets/FYC/Jerry.png",
    linkedin: "https://www.linkedin.com/in/jerry-wang07/",
  },
  {
    name: "Mary Magallanes",
    image:
      "src/assets/FYC/Mary.png",
    linkedin: "https://www.linkedin.com/in/mariajose-magallanes/",
  },
  {
    name: "Mia Stagner",
    image:
      "src/assets/FYC/Mia.png",
    linkedin: "https://www.linkedin.com/in/mia-stagner1/",
  },
  {
    name: "Owen Norman",
    image:
      "src/assets/FYC/Owen.png",
    linkedin: "https://www.linkedin.com/in/owennorman/",
  },
  {
    name: "Praneel Surath",
    image:
      "src/assets/FYC/Praneel.png",
    linkedin: "https://www.linkedin.com/in/praneel-s/",
  },
  {
    name: "Saud Kasumbi",
    image:
      "src/assets/FYC/Saud.png",
    linkedin: "https://www.linkedin.com/in/saud-kasumbi/",
  },
  {
    name: "Udaya Maddi",
    image:
      "src/assets/FYC/Udaya.png",
    linkedin: "https://www.linkedin.com/in/udaya-maddi/",
  },
  {
    name: "Zeeshan Ali",
    image:
      "src/assets/FYC/Zeeshan.png",
    linkedin: "https://www.linkedin.com/in/zeeshan-ali-929101261/",
  },
];

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="memberLinkedinIcon"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM3 9h4v12H3Zm7 0h3.83v1.64h.05c.53-1.01 1.84-2.08 3.79-2.08C21.72 8.56 23 10.9 23 14.2V21h-4v-6c0-1.43-.03-3.27-1.99-3.27-2 0-2.31 1.56-2.31 3.17V21h-4Z"
      />
    </svg>
  );
}

function Header({ route }) {
  return (
    <header className="topbar">
      <a href="#/" className="brand" aria-label="UGA IEEE Home">
        <img src={ugaIeeeLogo} alt="UGA IEEE" className="brandLogo" />
      </a>

      <nav className="topLinks">
        <a href="#/" aria-current={route === "/" ? "page" : undefined}>
          Home
        </a>
        <a
          href="#/exec-board"
          aria-current={route === "/exec-board" ? "page" : undefined}
        >
          Exec Board
        </a>
        <a href="#/fyc" aria-current={route === "/fyc" ? "page" : undefined}>
          FYC
        </a>
        <a href="#/micromouse">MicroMouse</a>
        <a href="#/gallery">Gallery</a>
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
  );
}

function Footer() {
  return (
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
  );
}

function HomePage() {
  return (
    <>
      <section className="healthcareFeature" id="home" aria-labelledby="healthcare-title">
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
    </>
  );
}

function MemberDirectoryPage({ eyebrow, title, members, showRoles = true }) {
  return (
    <main className="execBoardPage">
      <section className="execBoardSection" aria-labelledby="exec-board-title">
        <div className="execBoardIntro">
          <p className="execBoardEyebrow">{eyebrow}</p>
          <h2 id="exec-board-title">{title}</h2>
        </div>

        <div className="execBoardGrid">
          {members.map((member) => (
            <article key={member.name} className="memberCard">
              <div className="memberPortrait">
                <img src={member.image} alt={member.name} className="memberImage" />
              </div>

              <div className="memberHeading">
                <h3>{member.name}</h3>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} LinkedIn`}
                  className="memberLinkedin"
                >
                  <LinkedinIcon />
                </a>
              </div>

              {showRoles && member.role ? (
                <p className="memberRole">{member.role}</p>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const [route, setRoute] = useState(() =>
    window.location.hash.replace(/^#/, "") || "/"
  );

  useEffect(() => {
    const syncRoute = () => {
      setRoute(window.location.hash.replace(/^#/, "") || "/");
    };

    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  const isExecBoardPage = route === "/exec-board";
  const isFycPage = route === "/fyc";

  return (
    <div className="page">
      <Header route={route} />
      {isExecBoardPage ? (
        <MemberDirectoryPage
          eyebrow="25' - 26'"
          title="Meet Our Executive Board"
          members={execBoardMembers}
        />
      ) : isFycPage ? (
        <MemberDirectoryPage
          eyebrow="25' - 26'"
          title="Meet Our First-Year Council"
          members={fycMembers}
          showRoles={false}
        />
      ) : (
        <HomePage />
      )}
      <Footer />
    </div>
  );
}
