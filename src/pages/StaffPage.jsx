import { useEffect } from "react";
import LinkedinIcon from "../components/LinkedinIcon";

function MemberGrid({ members, showRoles = true, centerLastRowOfThree = false }) {
  return (
    <div
      className={`execBoardGrid${
        centerLastRowOfThree ? " execBoardGridCenterLastRowOfThree" : ""
      }`}
    >
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

          {showRoles && member.role ? <p className="memberRole">{member.role}</p> : null}
        </article>
      ))}
    </div>
  );
}

export default function StaffPage({
  eyebrow,
  title,
  execMembers,
  fycMembers,
  technicalTeamSections,
  mentorMenteeSections,
}) {
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
          <div className="programIntro programIntroLeft">
            <p className="programEyebrow">Leadership</p>
            <h2 id="staff-exec-title">Executive Board</h2>
          </div>
          <MemberGrid members={execMembers} />
        </div>
      </section>

      <section
        className="staffScrollSection staffScrollSectionAlt"
        id="technical-teams"
        aria-labelledby="staff-technical-title"
      >
        <div className="staffSectionInner">
          <div className="programIntro programIntroLeft">
            <p className="programEyebrow">Technical</p>
            <h2 id="staff-technical-title">Technical Leads</h2>
          </div>
          <div className="programCard">
            <h3>Coming soon</h3>
            <p>
              We&apos;re building out the Technical Leads section and will share more
              details here soon.
            </p>
          </div>
        </div>
      </section>

      <section
        className="staffScrollSection"
        id="fyc"
        aria-labelledby="staff-fyc-title"
      >
        <div className="staffSectionInner">
          <div className="programIntro programIntroLeft">
            <p className="programEyebrow">FYC</p>
            <h2 id="staff-fyc-title">First-Year Council</h2>
          </div>
          <MemberGrid
            members={fycMembers}
            centerLastRowOfThree
          />
        </div>
      </section>

      <section
        className="staffScrollSection staffScrollSectionAlt"
        id="mentors-mentees"
        aria-labelledby="staff-mentor-title"
      >
        <div className="staffSectionInner">
          <div className="programIntro programIntroLeft">
            <p className="programEyebrow">Support Network</p>
            <h2 id="staff-mentor-title">Mentors & Mentees</h2>
          </div>
          <div className="programCard">
            <h3>Coming soon</h3>
            <p>
              We&apos;re building out the Mentors &amp; Mentees section and will share
              more details here soon.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
