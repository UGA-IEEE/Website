import { useMemo, useState } from "react";
import LinkedinIcon from "../components/LinkedinIcon";

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function AlumniPage({ title, yearOptions = [], members = [] }) {
  const [selectedYear, setSelectedYear] = useState(yearOptions[0]?.value || "all");

  const visibleMembers = useMemo(() => {
    if (selectedYear === "all") {
      return members;
    }

    return members.filter((member) => member.year === selectedYear);
  }, [members, selectedYear]);

  return (
    <main className="contentPage">
      <section className="alumniSection" aria-labelledby="alumni-title">
        <div className="alumniInner">
          <div className="alumniIntro">
            <h2 id="alumni-title">{title}</h2>
          </div>

          <div className="alumniYearRow" role="tablist" aria-label="Alumni years">
            {yearOptions.map((year) => (
              <button
                key={year.value}
                type="button"
                role="tab"
                aria-selected={selectedYear === year.value}
                className={`alumniYearChip ${
                  selectedYear === year.value ? "isActive" : ""
                }`}
                onClick={() => setSelectedYear(year.value)}
              >
                {year.label}
              </button>
            ))}
          </div>

          <div className="alumniGrid">
            {visibleMembers.map((member) => (
              <article key={member.name} className="alumniCard">
                <div className="alumniAvatarWrap">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="alumniAvatar"
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 640px) 40vw, (max-width: 960px) 20vw, 140px"
                    />
                  ) : (
                    <div className="alumniAvatar alumniAvatarFallback" aria-hidden="true">
                      {getInitials(member.name)}
                    </div>
                  )}
                </div>

                <div className="alumniCardBody">
                  <div className="alumniNameRow">
                    <h3>{member.name}</h3>
                    {member.linkedin ? (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                        className="memberLinkedin"
                      >
                        <LinkedinIcon />
                      </a>
                    ) : null}
                  </div>
                  <p className="alumniRole">{member.currentRole}</p>
                  <p className="alumniIeeeRole">{member.ieeeRole}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
