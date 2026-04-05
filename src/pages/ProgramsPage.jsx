import { useEffect } from "react";

function SectionCards({ sections, getCardClassName }) {
  return (
    <div className="programGrid">
      {sections.map((section) => (
        <article
          key={section.title}
          className={getCardClassName?.(section) || "programCard"}
        >
          <h3>{section.title}</h3>
          <p>{section.description}</p>
        </article>
      ))}
    </div>
  );
}

export default function ProgramsPage({
  title,
  eventSections,
  micromouseSections,
  micromouseImages,
  fycSections,
  mentorshipSections,
  rccSections,
}) {
  useEffect(() => {
    const scrollToProgramSection = () => {
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

    const scrollTimer = window.setTimeout(scrollToProgramSection, 0);
    window.addEventListener("hashchange", scrollToProgramSection);

    return () => {
      window.clearTimeout(scrollTimer);
      window.removeEventListener("hashchange", scrollToProgramSection);
    };
  }, []);

  return (
    <main className="contentPage">
      <section className="programSection" id="events" aria-labelledby="program-events-title">
        <div className="staffSectionInner">
          <div className="programIntro programIntroLeft">
            <h2 id="program-events-title">Events</h2>
          </div>
          <SectionCards sections={eventSections} />
        </div>
      </section>

      <section className="staffScrollSection staffScrollSectionAlt" id="micromouse" aria-labelledby="program-micromouse-title">
        <div className="staffSectionInner">
          <div className="programIntro programIntroLeft">
            <h2 id="program-micromouse-title">MicroMouse</h2>
          </div>
          <SectionCards sections={micromouseSections} />
          {micromouseImages.length ? (
            <div className="micromouseGallery programGallery" aria-label="Micromouse images">
              {micromouseImages.map((image) => (
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

      <section className="staffScrollSection" id="fyc-programs" aria-labelledby="program-fyc-title">
        <div className="staffSectionInner">
          <div className="programIntro programIntroLeft">
            <h2 id="program-fyc-title">FYC</h2>
          </div>
          <SectionCards
            sections={fycSections}
            getCardClassName={(section) =>
              section.title === "What is FYC?"
                ? "programCard programCardWide"
                : "programCard"
            }
          />
        </div>
      </section>

      <section className="staffScrollSection staffScrollSectionAlt" id="mentorship" aria-labelledby="program-mentorship-title">
        <div className="staffSectionInner">
          <div className="programIntro programIntroLeft">
            <h2 id="program-mentorship-title">Mentorship</h2>
          </div>
          <div className="programCard">
            <h3>Coming soon</h3>
            <p>
              We&apos;re building out the Mentorship section and will share more
              details here soon.
            </p>
          </div>
        </div>
      </section>

      <section className="staffScrollSection" id="rcc" aria-labelledby="program-rcc-title">
        <div className="staffSectionInner">
          <div className="programIntro programIntroLeft">
            <h2 id="program-rcc-title">RCC</h2>
          </div>
          <div className="programCard">
            <h3>Coming soon</h3>
            <p>
              We&apos;re building out the RCC section and will share more details
              here soon.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
