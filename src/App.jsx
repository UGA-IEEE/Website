import { useEffect, useState } from "react";
import "./styles.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import MemberDirectoryPage from "./pages/MemberDirectoryPage";
import SpotlightPage from "./pages/SpotlightPage";
import {
  execBoardMembers,
  fycMembers,
  gallery2526Sections,
  micromouseGalleryImages,
} from "./data/siteContent";

const DEFAULT_ROUTE = "/";

function getRouteFromHash() {
  return window.location.hash.replace(/^#/, "") || DEFAULT_ROUTE;
}

function renderRoute(route) {
  switch (route) {
    case "/exec-board":
      return (
        <MemberDirectoryPage
          eyebrow="25' - 26'"
          title="Meet Our Executive Board"
          members={execBoardMembers}
        />
      );
    case "/fyc":
      return (
        <MemberDirectoryPage
          eyebrow="25' - 26'"
          title="Meet Our First-Year Council"
          members={fycMembers}
          showRoles={false}
        />
      );
    case "/micromouse":
      return (
        <SpotlightPage
          eyebrow="The Applied Power Electronics Conference (APEC) displays both the practical and applied aspects of the power electronics business through competitions, technical sessions, exhibits, and seminars."
          title="IEEE is Headed to APEC 26 This Spring!"
          images={micromouseGalleryImages}
        />
      );
    case "/contact":
      return <ContactPage />;
    case "/gallery-24-25":
      return (
        <GalleryPage
          eyebrow="24' - 25'"
          title="UGA IEEE Gallery"
          images={[]}
          emptyText="Gallery photos for 24' - 25' are coming soon."
        />
      );
    case "/gallery-25-26":
      return (
        <GalleryPage
          eyebrow="25' - 26'"
          title="UGA IEEE Gallery"
          images={gallery2526Sections}
          emptyText=""
        />
      );
    default:
      return <HomePage />;
  }
}

export default function App() {
  const [route, setRoute] = useState(getRouteFromHash);

  // Keep the selected page synchronized with hash navigation.
  useEffect(() => {
    const syncRoute = () => {
      setRoute(getRouteFromHash());
    };

    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  return (
    <div className="page">
      <Header route={route} />
      {renderRoute(route)}
      <Footer />
    </div>
  );
}
