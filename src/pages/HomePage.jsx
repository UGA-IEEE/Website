import { useEffect, useState } from "react";
import burnsMcDonnellLogo from "../assets_optimized/branding/BurnsMcDonnell.png";
import faulhaberLogo from "../assets_optimized/branding/Faulhaber.png";
import {
  calendarEvents,
  gallery2526Sections,
  importantHomeLinks,
} from "../data/siteContent";
import {
  buildCalendarModel,
  flattenGallerySections,
  shiftMonth,
  shuffleItems,
} from "../utils/siteContent";

const homeBackgroundPhotos = flattenGallerySections(gallery2526Sections);

export default function HomePage() {
  const [rotatingBackgroundPhotos] = useState(() =>
    shuffleItems(homeBackgroundPhotos)
  );
  const [activeBackgroundIndex, setActiveBackgroundIndex] = useState(0);
  const [displayedMonth, setDisplayedMonth] = useState(
    () => new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  );

  const calendarConfig = buildCalendarModel({
    now: displayedMonth,
    events: calendarEvents,
  });

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

  useEffect(() => {
    const scrollToHomeSection = () => {
      const hashValue = window.location.hash.replace(/^#/, "");
      const [, queryString = ""] = hashValue.split("?");
      const sectionId = new URLSearchParams(queryString).get("section");

      if (!sectionId) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const scrollTimer = window.setTimeout(scrollToHomeSection, 0);
    window.addEventListener("hashchange", scrollToHomeSection);

    return () => {
      window.clearTimeout(scrollTimer);
      window.removeEventListener("hashchange", scrollToHomeSection);
    };
  }, []);

  return (
    <>
      <section
        className="homeHeroSection"
        id="home"
        aria-labelledby="home-hero-title"
      >
        <div className="homeHeroBackground" aria-hidden="true">
          {rotatingBackgroundPhotos.map((image, index) => (
            <img
              key={image.src}
              className={`homeHeroBackgroundImage ${
                index === activeBackgroundIndex ? "isActive" : ""
              }`}
              src={image.src}
              alt=""
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : undefined}
              decoding="async"
            />
          ))}
          <div className="homeHeroBackgroundOverlay" />
        </div>

        <div className="homeHeroContent">
          <p className="homeHeroEyebrow">University of Georgia IEEE Student Branch</p>
          <h1 id="home-hero-title">UGA IEEE</h1>
          <p className="homeHeroLead">
            Building community, creating projects, and opening doors for students
            to advance technology for humanity.
          </p>
        </div>
      </section>

      <section
        className="homeInfoSection homeAboutSection"
        id="about-us"
        aria-labelledby="home-about-title"
      >
        <div className="homeSectionInner">
          <div className="homeSectionIntro">
            <p className="homeSectionEyebrow">Who We Are</p>
            <h2 id="home-about-title">About Us</h2>
          </div>
          <div className="homeTextPanel">
            <p>
              The Institute of Electrical and Electronics Engineers (IEEE) is the world's largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity.
            </p>
            <p>
              As a student branch, our goal is to uphold the organization's mission of fostering the knowledge for technological excellence and furthering the professional development of students in the technology field.
            </p>
          </div>
        </div>
      </section>

      <section
        className="homeInfoSection calendarSection"
        id="events"
        aria-labelledby="calendar-title"
      >
        <div className="homeSectionInner">
        <div className="calendarToolbar">
          <button
            type="button"
            className="calendarNavButton"
            onClick={() => setDisplayedMonth((currentMonth) => shiftMonth(currentMonth, -1))}
            aria-label={`Show ${new Intl.DateTimeFormat("en-US", {
              month: "long",
              year: "numeric",
            }).format(shiftMonth(displayedMonth, -1))}`}
          >
            Prev
          </button>
          <h2>{calendarConfig.monthLabel}</h2>
          <button
            type="button"
            className="calendarNavButton"
            onClick={() => setDisplayedMonth((currentMonth) => shiftMonth(currentMonth, 1))}
            aria-label={`Show ${new Intl.DateTimeFormat("en-US", {
              month: "long",
              year: "numeric",
            }).format(shiftMonth(displayedMonth, 1))}`}
          >
            Next
          </button>
        </div>

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
        </div>
      </section>

      <section
        className="homeInfoSection joinSection"
        id="join-us"
        aria-labelledby="join-us-title"
      >
        <div className="homeSectionInner">
          <div className="homeSectionIntro">
            <p className="homeSectionEyebrow">Get Involved</p>
            <h2 id="join-us-title">How To Join Us</h2>
          </div>
          <div className="joinSectionLayout">
            <div className="homeTextPanel">
              <p>
                GroupMe is the easiest way to stay in the loop for
                meetings, workshops, and social events. Start with
                these links and you&apos;ll be plugged into everything we&apos;re
               doing this year.
              </p>
            </div>
            <div className="homeLinksList">
              {importantHomeLinks.map((link) => (
                <a
                  key={link.label}
                  className="homeLinkCard homeLinkCardLight"
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
          </div>
        </div>
      </section>

      <section
        className="homeInfoSection supportSection"
        id="sponsorships"
        aria-labelledby="sponsorships-title"
      >
        <div className="homeSectionInner">
          <div className="homeSectionIntro">
            <p className="homeSectionEyebrow">Partner With Us</p>
            <h2 id="sponsorships-title">Sponsorships</h2>
          </div>
          <div className="supportCard">
            <p>
              Sponsorships help us host technical workshops, travel to conferences,
              support competitions, and make hands-on opportunities more
              accessible for students.
            </p>
            <p>
              If your organization or company would like to support UGA IEEE, we&apos;d love to
              connect and talk through event partnerships, recruiting engagement,
              or program support.
            </p>
            <a className="supportAction" href="#/contact?topic=sponsorships">
              Contact Us About Sponsorships
            </a>
            <div className="sponsorThanks" aria-labelledby="current-sponsors-title">
              <h3 id="current-sponsors-title">Thank You to Our Current Sponsors</h3>
              <div className="sponsorLogoGrid">
                <div className="sponsorLogoCard sponsorLogoCardBurns" aria-label="Burns and McDonnell">
                  <img
                    className="sponsorLogoImage sponsorLogoImageBurns"
                    src={burnsMcDonnellLogo}
                    alt="Burns & McDonnell logo"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="sponsorLogoCard sponsorLogoCardFaulhaber" aria-label="Faulhaber">
                  <img
                    className="sponsorLogoImage sponsorLogoImageFaulhaber"
                    src={faulhaberLogo}
                    alt="Faulhaber logo"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="homeInfoSection supportSection supportSectionAlt"
        id="donations"
        aria-labelledby="donations-title"
      >
        <div className="homeSectionInner">
          <div className="homeSectionIntro">
            <p className="homeSectionEyebrow">Support Our Work</p>
            <h2 id="donations-title">Donations</h2>
          </div>
          <div className="supportCard">
            <p>
              Donations directly support student programming, project materials,
              outreach activities, and chapter experiences.
            </p>
            <p>
              We&apos;re grateful for any support.
            </p>
          </div>
          <div className="supportCard">
            <p>
              <b>Credit Card:</b>
            </p>
            <p>
              1. Go to: <a href="https://give.uga.edu" target="_blank" rel="noopener noreferrer"><u>give.uga.edu</u></a> and click "Give Now" in top right corner<br />
              2. Select "College of Engineering" for the college<br />
              3. Select "Engineering Enhancement Fund" as the designation.<br />
              4. Select "Add Gift."<br />
              5. Under Special Instructions/Comments, specify <b>"Donation For IEEE."</b>
            </p>
          </div>
          <div className="supportCard">
            <p>
              <b>Check:</b>
            </p>
            <p>
              Please specify that the payment is going to the Institute of Electrical and Electronics
              Engineers. Also, make the check payable to UGA Foundation and write “Institute of
              Electrical and Electronics Engineers” in the memo line. Then, mail it to:<br /><br />
              Institute of Electrical and Electronics Engineers<br />
              ATTN: Michaela Collins<br />
              125 Paul D. Coverdell Center<br />
              500 D.W. Brooks Drive<br />
              Athens, GA 30602<br />

            </p>
          </div>
        </div>
      </section>
    </>
  );
}
