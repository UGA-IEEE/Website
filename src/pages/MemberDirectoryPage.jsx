import LinkedinIcon from "../components/LinkedinIcon";

export default function MemberDirectoryPage({
  title,
  members,
  showRoles = true,
  centerLastRowOfThree = false,
}) {
  return (
    <main className="contentPage">
      <section className="execBoardSection" aria-labelledby="member-directory-title">
        <div className="execBoardIntro">
          <p className="execBoardEyebrow">{eyebrow}</p>
          <h2 id="member-directory-title">{title}</h2>
        </div>

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
