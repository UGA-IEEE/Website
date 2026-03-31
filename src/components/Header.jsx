import ugaIeeeLogo from "../assets_optimized/branding/UGAIEEE_Rectangular_BR.png";
import instagramLogo from "../assets_optimized/branding/Instagram_icon.png";
import linkedinLogo from "../assets_optimized/branding/linkedinLogo.png";

const navigationLinks = [
  { href: "#/", label: "Home", route: "/" },
  { href: "#/exec-board", label: "Exec Board", route: "/exec-board" },
  { href: "#/fyc", label: "FYC", route: "/fyc" },
  { href: "#/micromouse", label: "MicroMouse", route: "/micromouse" },
  { href: "#/contact", label: "Contact", route: "/contact" },
];

const galleryLinks = [
  { href: "#/gallery-24-25", label: "24' - 25'" },
  { href: "#/gallery-25-26", label: "25' - 26'" },
];

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
          >
            Gallery
          </button>
          <div className="navDropdownMenu" aria-label="Gallery years">
            {galleryLinks.map((link) => (
              <a key={link.href} href={link.href}>
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
