import ugaIeeeLogo from "../assets_optimized/branding/UGAIEEE_Rectangular_BR.png";
import instagramLogo from "../assets_optimized/branding/Instagram_icon.png";
import linkedinLogo from "../assets_optimized/branding/linkedinLogo.png";

const navigationLinks = [
  { href: "#/contact", label: "Contact", route: "/contact" },
];

const homeSectionLinks = [
  { href: "#/?section=about-us", label: "About Us" },
  { href: "#/?section=events", label: "Calendar" },
  { href: "#/?section=join-us", label: "How To Join" },
  { href: "#/?section=sponsorships", label: "Sponsorships" },
  { href: "#/?section=donations", label: "Donations" },
];

const galleryLinks = [
  { href: "#/gallery-25-26", label: "25' - 26'" },
];

const staffLinks = [
  { href: "#/staff?section=exec-board", label: "Executive Board" },
  { href: "#/staff?section=technical-teams", label: "Technical Teams" },
  { href: "#/staff?section=fyc", label: "First-Year Council" },
  { href: "#/staff?section=mentors-mentees", label: "Mentors & Mentees" },
];

const staffRoutes = ["/staff", "/exec-board", "/technical-teams", "/fyc", "/mentors-mentees"];

const programLinks = [
  { href: "#/programs?section=events", label: "Events" },
  { href: "#/programs?section=micromouse", label: "MicroMouse" },
  { href: "#/programs?section=fyc-programs", label: "FYC" },
  { href: "#/programs?section=mentorship", label: "Mentorship" },
  { href: "#/programs?section=rcc", label: "RCC" },
];

const programRoutes = ["/programs", "/micromouse"];

const socialLinks = [
  {
    href: "https://instagram.com/uga.ieee",
    label: "Instagram",
    icon: instagramLogo,
  },
  {
    href: "https://www.linkedin.com/company/uga-ieee/",
    label: "LinkedIn",
    icon: linkedinLogo,
  },
];

export default function Header({ route }) {
  const closeDropdownFocus = (event) => {
    event.currentTarget.blur();
  };

  const navigateTo = (href) => {
    window.location.hash = href.replace(/^#/, "");
  };

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
        <div className="navDropdown">
          <button
            type="button"
            className="navDropdownToggle"
            aria-haspopup="true"
            aria-current={route === "/" ? "page" : undefined}
            onClick={() => navigateTo("#/")}
            onMouseUp={closeDropdownFocus}
          >
            Home
          </button>
          <div className="navDropdownMenu" aria-label="Home sections">
            {homeSectionLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeDropdownFocus}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="navDropdown">
          <button
            type="button"
            className="navDropdownToggle"
            aria-haspopup="true"
            aria-current={staffRoutes.includes(route) ? "page" : undefined}
            onClick={() => navigateTo("#/staff")}
            onMouseUp={closeDropdownFocus}
          >
            Staff
          </button>
          <div className="navDropdownMenu" aria-label="Staff pages">
            {staffLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeDropdownFocus}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="navDropdown">
          <button
            type="button"
            className="navDropdownToggle"
            aria-haspopup="true"
            aria-current={programRoutes.includes(route) ? "page" : undefined}
            onClick={() => navigateTo("#/programs")}
            onMouseUp={closeDropdownFocus}
          >
            Programs
          </button>
          <div className="navDropdownMenu" aria-label="Programs pages">
            {programLinks.map((link) => (
              <a
                key={`${link.label}-${link.href}`}
                href={link.href}
                onClick={closeDropdownFocus}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {navigationLinks.map((link) => (
          <a
            key={link.route}
            href={link.href}
            aria-current={route === link.route ? "page" : undefined}
          >
            {link.label}
          </a>
        ))}

        <div className="navDropdown">
          <button
            type="button"
            className="navDropdownToggle"
            aria-haspopup="true"
            onMouseUp={closeDropdownFocus}
          >
            Gallery
          </button>
          <div className="navDropdownMenu" aria-label="Gallery years">
            {galleryLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeDropdownFocus}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
            className="socialBtn"
          >
            <img
              src={link.icon}
              alt={link.label}
              className="socialIcon"
              loading="eager"
              decoding="async"
            />
          </a>
        ))}
      </nav>
    </header>
  );
}
