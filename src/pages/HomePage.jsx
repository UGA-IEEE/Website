import { useEffect, useState } from "react";
import { calendarConfig, gallery2526Sections, importantHomeLinks } from "../data/siteContent";
import { flattenGallerySections, shuffleItems } from "../utils/siteContent";

const homeBackgroundPhotos = flattenGallerySections(gallery2526Sections);

export default function HomePage() {
  const [rotatingBackgroundPhotos] = useState(() =>
    shuffleItems(homeBackgroundPhotos)
  );
  const [activeBackgroundIndex, setActiveBackgroundIndex] = useState(0);

  useEffect(() => {
    if (rotatingBackgroundPhotos.length <= 1) {
      return undefined;
    }

    const rotationTimer = window.setInterval(() => {
      setActiveBackgroundIndex(
        (currentIndex) => (currentIndex + 1) % rotatingBackgroundPhotos.length
      );
    }, 5000);

    return () => window.clearInterval(rotationTimer);
  }, [rotatingBackgroundPhotos.length]);

  return (
    <>
      <section
        className="homeAboutSection"
        id="home"
        aria-labelledby="home-about-title"
      >
        <div className="homeAboutBackground" aria-hidden="true">
          {rotatingBackgroundPhotos.map((image, index) => (
            <img
              key={image.src}
              className={`homeAboutBackgroundImage ${
                index === activeBackgroundIndex ? "isActive" : ""
              }`}
              src={image.src}
              alt=""
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : undefined}
              decoding="async"
            />
          ))}
          <div className="homeAboutBackgroundOverlay" />
        </div>

        <div className="homeAboutLayout">
          <div className="homeAboutCopy">
            <h2 id="home-about-title">About Us</h2>
            <p>
              The Institute of Electrical and Electronics Engineers (IEEE) is the
              world's largest professional association dedicated to advancing
              technological innovation and excellence for the benefit of humanity.
              <br />
              As a student branch, our goal is to uphold the organization's
              mission of fostering the knowledge for technological excellence and
              furthering the professional development of students in the
              technology field.
            </p>
          </div>

          <aside
            className="homeLinksWidget"
            aria-labelledby="important-links-title"
          >
            <p className="homeLinksEyebrow">Quick Access</p>
            <h3 id="important-links-title">Important Links</h3>
            <div className="homeLinksList">
              {importantHomeLinks.map((link) => (
                <a
                  key={link.label}
                  className="homeLinkCard"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="homeLinkLabel">{link.label}</span>
                  <span className="homeLinkDescription">
                    {link.description}
                  </span>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="calendarSection" id="events">
        <h2>{calendarConfig.monthName} Upcoming Events</h2>

        <div className="calendarGrid">
          {calendarConfig.weekdays.map((weekday) => (
            <div key={weekday} className="calendarHeader">
              {weekday}
            </div>
          ))}

          {calendarConfig.calendarCells.map((day, index) => (
            <div
              key={`${day ?? "empty"}-${index}`}
              className={`calendarCell ${
                day && calendarConfig.eventsByDay[day] ? "eventDay" : ""
              }`}
            >
              {day && <span>{day}</span>}
              {day && calendarConfig.eventsByDay[day]?.image ? (
                <div className="calendarPreview" aria-hidden="true">
                  <img
                    src={calendarConfig.eventsByDay[day].image}
                    alt={calendarConfig.eventsByDay[day].title}
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
