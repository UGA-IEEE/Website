import { useEffect, useState } from "react";
import "./styles.css";
import ugaIeeeLogo from "./assets/UGAIEEE_Rectangular_BR.png";
import instagramLogo from "./assets/Instagram_icon.png";
import linkedinLogo from "./assets/linkedinLogo.png";
import micromouseByte from "./assets_optimized/MicroMouse/Byte.jpg";
import micromouseMaze from "./assets_optimized/MicroMouse/unpainted_maze.jpg";
import homeAboutPrimaryPhoto from "./assets_optimized/home/IEEEpumpkin.jpg";
import homeAboutSecondaryPhotoOne from "./assets_optimized/home/dean-orso-picture.jpg";
import homeAboutSecondaryPhotoTwo from "./assets_optimized/home/IMG_0461.jpg";
import micromouseShowcasePoster from "./assets_optimized/Calendar/MicroMouse Showcase.jpg";
import fycAnthonyPhoto from "./assets_optimized/FYC/Anthony.jpg";
import fycCocoPhoto from "./assets_optimized/FYC/Coco.jpg";
import fycHieuPhoto from "./assets_optimized/FYC/Hieu.jpg";
import fycJerryPhoto from "./assets_optimized/FYC/Jerry.jpg";
import fycMaryPhoto from "./assets_optimized/FYC/Mary.jpg";
import fycMiaPhoto from "./assets_optimized/FYC/Mia.jpg";
import fycOwenPhoto from "./assets_optimized/FYC/Owen.jpg";
import fycPraneelPhoto from "./assets_optimized/FYC/Praneel.jpg";
import fycSaudPhoto from "./assets_optimized/FYC/Saud.jpg";
import fycUdayaPhoto from "./assets_optimized/FYC/Udaya.jpg";
import fycZeeshanPhoto from "./assets_optimized/FYC/Zeeshan.jpg";

const execPhotoFiles = import.meta.glob("./assets_optimized/Exec/*.{jpeg,jpg,png,JPEG,JPG,PNG}", {
  eager: true,
  import: "default",
});

const getExecPhoto = (fileName) => execPhotoFiles[`./assets_optimized/Exec/${fileName}`];

// Calendar data drives highlighted dates and optional hover previews.
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();

const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(today);

const calendarEvents = {
  19: {
    title: "MicroMouse Showcase",
    image: micromouseShowcasePoster,
  },
};

const firstWeekday = new Date(year, month, 1).getDay();
const daysInMonth = new Date(year, month + 1, 0).getDate();

const calendarCells = Array.from({ length: firstWeekday + daysInMonth }, (_, i) =>
  i < firstWeekday ? null : i - firstWeekday + 1
);

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const execBoardMembers = [
  {
    name: "Jordan Howard",
    role: "President",
    image: getExecPhoto("Portrait Jordan.jpg"),
    linkedin: "https://www.linkedin.com/in/jordan-howard-7ab25616b/",
  },
  {
    name: "Neel Desai",
    role: "Vice President",
    image: getExecPhoto("Landscape Neel.jpg"),
    linkedin: "https://www.linkedin.com/in/neel-desai-09a20a21a/",
  },
  {
    name: "Omar Naqib",
    role: "Engineering Director",
    image: getExecPhoto("Landscape Omar.jpg"),
    linkedin: "https://www.linkedin.com/in/omarnaqib/",
  },
  {
    name: "Allen Rucker",
    role: "Outreach Director",
    image: getExecPhoto("Landscape Allen.jpg"),
    linkedin: "https://www.linkedin.com/in/allen-rucker-a41433248/",
  },
  {
    name: "Sidney Johnson",
    role: "Events Director",
    image: getExecPhoto("JOHNSON_S-PHOTO.jpg"),
    linkedin: "https://www.linkedin.com/in/sidney-johnson4705/",
  },
  {
    name: "Jun Chambers",
    role: "First-Year Advisor",
    image: getExecPhoto("Portrait Jun.jpg"),
    linkedin: "https://www.linkedin.com/in/jun-chambers/",
  },
  {
    name: "Joshua Carter",
    role: "First-Year Advisor",
    image: getExecPhoto("Portrait Joshua.jpg"),
    linkedin: "https://www.linkedin.com/in/joshua-carter-904651325/",
  },
  {
    name: "Jason Roode",
    role: "Secretary",
    image: getExecPhoto("Landscape Jason.jpg"),
    linkedin: "https://www.linkedin.com/in/jason-roode/",
  },
];

const fycMembers = [
  {
    name: "Anthony Behrend",
    image: fycAnthonyPhoto,
    linkedin: "https://www.linkedin.com/in/anthony-behrend/",
  },
  {
    name: "Coco Tang",
    image: fycCocoPhoto,
    linkedin: "https://www.linkedin.com/in/coco-tang1/",
  },
  {
    name: "Hieu Nguyen",
    image: fycHieuPhoto,
    linkedin: "https://www.linkedin.com/in/hieu-winn/",
  },
  {
    name: "Jerry Wang",
    image: fycJerryPhoto,
    linkedin: "https://www.linkedin.com/in/jerry-wang07/",
  },
  {
    name: "Mary Magallanes",
    image: fycMaryPhoto,
    linkedin: "https://www.linkedin.com/in/mariajose-magallanes/",
  },
  {
    name: "Mia Stagner",
    image: fycMiaPhoto,
    linkedin: "https://www.linkedin.com/in/mia-stagner1/",
  },
  {
    name: "Owen Norman",
    image: fycOwenPhoto,
    linkedin: "https://www.linkedin.com/in/owennorman/",
  },
  {
    name: "Praneel Surath",
    image: fycPraneelPhoto,
    linkedin: "https://www.linkedin.com/in/praneel-s/",
  },
  {
    name: "Saud Kasumbi",
    image: fycSaudPhoto,
    linkedin: "https://www.linkedin.com/in/saud-kasumbi/",
  },
  {
    name: "Udaya Maddi",
    image: fycUdayaPhoto,
    linkedin: "https://www.linkedin.com/in/udaya-maddi/",
  },
  {
    name: "Zeeshan Ali",
    image: fycZeeshanPhoto,
    linkedin: "https://www.linkedin.com/in/zeeshan-ali-929101261/",
  },
];

const micromouseGalleryImages = [
  {
    src: micromouseByte,
    alt: "MicroMouse robot Byte",
  },
  {
    src: micromouseMaze,
    alt: "MicroMouse competition maze",
  },
];

// Gallery pages load every image in the selected folder automatically.
const gallery2526Photos = Object.entries(
  import.meta.glob("./assets_optimized/gallery/25_26/*.{png,jpg,jpeg,JPG,JPEG,PNG}", {
    eager: true,
    import: "default",
  })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({
    src,
    alt: path.split("/").pop()?.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ") || "Gallery image",
  }));

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

// Shared site header with lightweight hash-based page navigation.
function Header({ route }) {
  return (
    <header className="topbar">
      <a href="#/" className="brand" aria-label="UGA IEEE Home">
        <img
          src={ugaIeeeLogo}
          alt="UGA IEEE"
          className="brandLogo"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
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
        <a
          href="#/micromouse"
          aria-current={route === "/micromouse" ? "page" : undefined}
        >
          MicroMouse
        </a>
        <div className="navDropdown">
          <button
            type="button"
            className="navDropdownToggle"
            aria-haspopup="true"
          >
            Gallery
          </button>
          <div className="navDropdownMenu" aria-label="Gallery years">
            <a href="#/gallery-24-25">24' - 25'</a>
            <a href="#/gallery-25-26">25' - 26'</a>
          </div>
        </div>
        <a
          href="https://instagram.com/uga.ieee"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="socialBtn"
        >
          <img
            src={instagramLogo}
            alt="Instagram"
            className="socialIcon"
            loading="eager"
            decoding="async"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/uga-ieee/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="socialBtn"
        >
          <img
            src={linkedinLogo}
            alt="LinkedIn"
            className="socialIcon"
            loading="eager"
            decoding="async"
          />
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
    </footer>
  );
}

// Home page intro and club overview.
function HomePage() {
  return (
    <>
      <section className="homeAboutSection" id="home" aria-labelledby="home-about-title">
        <div className="homeAboutLayout">
          <div className="homeAboutCopy">
            <h2 id="home-about-title">About Us</h2>
            <p>
              The Institute of Electrical and Electronics Engineers (IEEE) is the world's largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity.
              <br />
              As a student branch, our goal is to uphold the organization's mission of fostering the knowledge for technological excellence and furthering the professional development of students in the technology field.
            </p>
          </div>

          <div className="homeAboutImageGrid" aria-label="UGA IEEE visuals">
            <img
              className="homeAboutPrimaryImage"
              src={homeAboutPrimaryPhoto}
              alt="Healthcare robot in hospital"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <img
              className="homeAboutSecondaryImage"
              src={homeAboutSecondaryPhotoOne}
              alt="Medical device in operating room"
              loading="lazy"
              decoding="async"
            />
            <img
              className="homeAboutSecondaryImage"
              src={homeAboutSecondaryPhotoTwo}
              alt="Scientific visualization"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Monthly calendar with optional hover previews for highlighted dates. */}
      <section className="calendarSection" id="events">
        <h2>{monthName} Upcoming Events</h2>

        <div className="calendarGrid">
          {weekdays.map((d) => (
            <div key={d} className="calendarHeader">{d}</div>
          ))}

          {calendarCells.map((day, i) => (
            <div
              key={i}
              className={`calendarCell ${day && calendarEvents[day] ? "eventDay" : ""}`}
            >
              {day && <span>{day}</span>}
              {day && calendarEvents[day]?.image ? (
                <div className="calendarPreview" aria-hidden="true">
                  <img
                    src={calendarEvents[day].image}
                    alt={calendarEvents[day].title}
                    className="calendarPreviewImage"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// Reusable people directory page for executive board and FYC listings.
function MemberDirectoryPage({ eyebrow, title, members, showRoles = true }) {
  return (
    <main className="contentPage">
      <section className="execBoardSection" aria-labelledby="exec-board-title">
        <div className="execBoardIntro">
          <p className="execBoardEyebrow">{eyebrow}</p>
          <h2 id="exec-board-title">{title}</h2>
        </div>

        <div className="execBoardGrid">
          {members.map((member) => (
            <article key={member.name} className="memberCard">
              <div className="memberPortrait">
                <img
                  src={member.image}
                  alt={member.name}
                  className="memberImage"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 90vw, (max-width: 900px) 45vw, 25vw"
                />
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

// Reusable spotlight page with a title, supporting copy, and optional image gallery.
function SpotlightPage({ eyebrow, title, images = [] }) {
  return (
    <main className="contentPage">
      <section className="micromouseSection" aria-labelledby="micromouse-title">
        <div className="micromouseIntro">
          <h2 id="micromouse-title">{title}</h2>
          <p className="execBoardEyebrow">{eyebrow}</p>
          {images.length ? (
            <div className="micromouseGallery" aria-label="MicroMouse images">
              {images.map((image) => (
                <figure key={image.src} className="micromouseCard">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="micromouseImage"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                </figure>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}

// Gallery page for year-based photo archives.
function GalleryPage({ eyebrow, title, images, emptyText }) {
  return (
    <main className="contentPage">
      <section className="gallerySection" aria-labelledby="gallery-title">
        <div className="galleryIntro">
          <p className="execBoardEyebrow">{eyebrow}</p>
          <h2 id="gallery-title">{title}</h2>
        </div>

        {images.length ? (
          <div className="galleryGrid">
            {images.map((image) => (
              <figure key={image.src} className="galleryCard">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="galleryImage"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
              </figure>
            ))}
          </div>
        ) : (
          <p className="galleryEmpty">{emptyText}</p>
        )}
      </section>
    </main>
  );
}

export default function App() {
  const [route, setRoute] = useState(() =>
    window.location.hash.replace(/^#/, "") || "/"
  );

  // Keep the current page in sync with the URL hash.
  useEffect(() => {
    const syncRoute = () => {
      setRoute(window.location.hash.replace(/^#/, "") || "/");
    };

    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  const isExecBoardPage = route === "/exec-board";
  const isFycPage = route === "/fyc";
  const isMicromousePage = route === "/micromouse";
  const isGallery2425Page = route === "/gallery-24-25";
  const isGallery2526Page = route === "/gallery-25-26";

  return (
    <div className="page">
      <Header route={route} />
      {/* Route the single-page app to the selected section page. */}
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
      ) : isMicromousePage ? (
        <SpotlightPage
          eyebrow="The Applied Power Electronics Conference (APEC) displays both the practical and applied aspects of the power electronics business through competitions, technical sessions, exhibits, and seminars."
          title="IEEE is Headed to APEC 26 This Spring!"
          images={micromouseGalleryImages}
        />
      ) : isGallery2425Page ? (
        <GalleryPage
          eyebrow="24' - 25'"
          title="UGA IEEE Gallery"
          images={[]}
          emptyText="Gallery photos for 24' - 25' are coming soon."
        />
      ) : isGallery2526Page ? (
        <GalleryPage
          eyebrow="25' - 26'"
          title="UGA IEEE Gallery"
          images={gallery2526Photos}
          emptyText=""
        />
      ) : (
        <HomePage />
      )}
      <Footer />
    </div>
  );
}
