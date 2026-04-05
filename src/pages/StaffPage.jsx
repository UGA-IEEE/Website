import { useEffect, useState } from "react";
import LinkedinIcon from "../components/LinkedinIcon";

function MemberGrid({
  members = [],
  showRoles = true,
  centerLastRowOfThree = false,
  centerLastRowOfTwo = false,
  hidePortraits = false,
}) {
  return (
    <div
      className={`execBoardGrid${
        centerLastRowOfThree ? " execBoardGridCenterLastRowOfThree" : ""
      }${
        centerLastRowOfTwo ? " execBoardGridCenterLastRowOfTwo" : ""
      }`}
    >
      {members.map((member) => (
        <article key={member.name} className="memberCard">
          {!hidePortraits ? (
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
          ) : null}

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

          {showRoles && member.role ? <p className="memberRole">{member.role}</p> : null}
        </article>
      ))}
    </div>
  );
}

function ComingSoonCard({ label }) {
  return (
    <div className="programCard">
      <h3>Coming soon</h3>
      <p>We&apos;re building out the {label} section and will share more details here soon.</p>
    </div>
  );
}

function UnavailableYearCard({ label }) {
  return (
    <div className="programCard">
      <h3>Not available that year</h3>
      <p>The {label} role was not available during the &apos;25 - &apos;26 year.</p>
    </div>
  );
}

export default function StaffPage({
  execMembers,
  fycMembers,
  microMouseMembers,
  technicalLeads,
}) {
  const [selectedYear, setSelectedYear] = useState("25-26");

  useEffect(() => {
    const scrollToStaffSection = () => {
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

    const scrollTimer = window.setTimeout(scrollToStaffSection, 0);
    window.addEventListener("hashchange", scrollToStaffSection);

    return () => {
      window.clearTimeout(scrollTimer);
      window.removeEventListener("hashchange", scrollToStaffSection);
    };
  }, []);

  return (
    <main className="contentPage">
      <section
        className="programSection"
        id="exec-board"
        aria-labelledby="staff-exec-title"
      >
        <div className="staffSectionInner">
          <div className="staffYearToggle" role="tablist" aria-label="Staff years">
            <button
              type="button"
              role="tab"
              aria-selected={selectedYear === "25-26"}
              className={`staffYearButton ${
                selectedYear === "25-26" ? "isActive" : ""
              }`}
              onClick={() => setSelectedYear("25-26")}
            >
              &apos;25 - &apos;26
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedYear === "26-27"}
              className={`staffYearButton ${
                selectedYear === "26-27" ? "isActive" : ""
              }`}
              onClick={() => setSelectedYear("26-27")}
            >
              &apos;26 - &apos;27
            </button>
          </div>
          <div className="programIntro programIntroLeft">
            <h2 id="staff-exec-title">Executive Board</h2>
          </div>
          {selectedYear === "25-26" ? (
            <MemberGrid members={execMembers} />
          ) : (
            <ComingSoonCard label="Executive Board" />
          )}
        </div>
      </section>

      <section
        className="staffScrollSection staffScrollSectionAlt"
        id="technical-teams"
        aria-labelledby="staff-technical-title"
      >
        <div className="staffSectionInner">
          <div className="programIntro programIntroLeft">
            <h2 id="staff-technical-title">Technical Leads</h2>
          </div>
          {selectedYear === "25-26" ? (
            <MemberGrid members={technicalLeads} centerLastRowOfThree />
          ) : (
            <ComingSoonCard label="Technical Leads" />
          )}
        </div>
      </section>

      <section
        className="staffScrollSection"
        id="fyc"
        aria-labelledby="staff-fyc-title"
      >
        <div className="staffSectionInner">
          <div className="programIntro programIntroLeft">
            <h2 id="staff-fyc-title">First-Year Council</h2>
          </div>
          {selectedYear === "25-26" ? (
            <MemberGrid members={fycMembers} centerLastRowOfThree />
          ) : (
            <ComingSoonCard label="First-Year Council" />
          )}
        </div>
      </section>

      <section
        className="staffScrollSection"
        id="mm"
        aria-labelledby="staff-mm-title"
      >
        <div className="staffSectionInner">
          <div className="programIntro programIntroLeft">
            <h2 id="staff-mm-title">MicroMouse</h2>
          </div>
          {selectedYear === "25-26" ? (
            <MemberGrid
              members={microMouseMembers}
              centerLastRowOfTwo
              hidePortraits
            />
          ) : (
            <ComingSoonCard label="MicroMouse" />
          )}
        </div>
      </section>

      <section
        className="staffScrollSection staffScrollSectionAlt"
        id="custom-computing"
        aria-labelledby="staff-custom-computing-title"
      >
        <div className="staffSectionInner">
          <div className="programIntro programIntroLeft">
            <h2 id="staff-custom-computing-title">Custom Computing</h2>
          </div>
          {selectedYear === "25-26" ? (
            <UnavailableYearCard label="Custom Computing" />
          ) : (
            <ComingSoonCard label="Custom Computing" />
          )}
        </div>
      </section>

      <section
        className="staffScrollSection"
        id="peer-assistants"
        aria-labelledby="staff-peer-assistants-title"
      >
        <div className="staffSectionInner">
          <div className="programIntro programIntroLeft">
            <h2 id="staff-peer-assistants-title">Peer Assistants</h2>
          </div>
          {selectedYear === "25-26" ? (
            <UnavailableYearCard label="Peer Assistants" />
          ) : (
            <ComingSoonCard label="Peer Assistants" />
          )}
        </div>
      </section>

      <section
        className="staffScrollSection staffScrollSectionAlt"
        id="mentors-mentees"
        aria-labelledby="staff-mentor-title"
      >
        <div className="staffSectionInner">
          <div className="programIntro programIntroLeft">
            <h2 id="staff-mentor-title">Mentees</h2>
          </div>
          {selectedYear === "25-26" ? (
            <UnavailableYearCard label="Mentees" />
          ) : (
            <ComingSoonCard label="Mentees" />
          )}
        </div>
      </section>
    </main>
  );
}
