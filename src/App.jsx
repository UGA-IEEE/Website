import { useEffect, useState } from "react";
import "./styles.css";
import AlumniPage from "./pages/AlumniPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import MemberDirectoryPage from "./pages/MemberDirectoryPage";
import ProgramsPage from "./pages/ProgramsPage";
import StaffPage from "./pages/StaffPage";
import {
  alumniMembers,
  alumniYearOptions,
  execBoardMembers,
  fycMembers,
  gallery2526Sections,
  mentorMenteeSections,
  microMouseMembers,
  micromouseGalleryImages,
  programEventSections,
  programFycSections,
  programMicromouseSections,
  programMentorshipSections,
  programRccSections,
  technicalLeads,
} from "./data/siteContent";

const DEFAULT_ROUTE = "/";

function getRouteFromHash() {
  const hashValue = window.location.hash.replace(/^#/, "") || DEFAULT_ROUTE;
  const [route] = hashValue.split("?");
  return route || DEFAULT_ROUTE;
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
    case "/staff":
      return (
        <StaffPage
          eyebrow="Meet The People Behind UGA IEEE"
          title="Staff"
          execMembers={execBoardMembers}
          fycMembers={fycMembers}
          microMouseMembers={microMouseMembers}
          technicalLeads={technicalLeads}
          mentorMenteeSections={mentorMenteeSections}
        />
      );
    case "/technical-teams":
      return <ProgramsPage
        eyebrow="Programs That Build Community And Experience"
        title="Programs"
        eventSections={programEventSections}
        micromouseSections={programMicromouseSections}
        micromouseImages={micromouseGalleryImages}
        fycSections={programFycSections}
        mentorshipSections={programMentorshipSections}
        rccSections={programRccSections}
      />;
    case "/fyc":
      return (
        <MemberDirectoryPage
          eyebrow="25' - 26'"
          title="Meet Our First-Year Council"
          members={fycMembers}
          showRoles={false}
          centerLastRowOfThree
        />
      );
    case "/mentors-mentees":
      return <ProgramsPage
        eyebrow="Programs That Build Community And Experience"
        title="Programs"
        eventSections={programEventSections}
        micromouseSections={programMicromouseSections}
        micromouseImages={micromouseGalleryImages}
        fycSections={programFycSections}
        mentorshipSections={programMentorshipSections}
        rccSections={programRccSections}
      />;
    case "/micromouse":
      return <ProgramsPage
        eyebrow="Programs That Build Community And Experience"
        title="Programs"
        eventSections={programEventSections}
        micromouseSections={programMicromouseSections}
        micromouseImages={micromouseGalleryImages}
        fycSections={programFycSections}
        mentorshipSections={programMentorshipSections}
        rccSections={programRccSections}
      />;
    case "/programs":
      return <ProgramsPage
        eyebrow="Programs That Build Community And Experience"
        title="Programs"
        eventSections={programEventSections}
        micromouseSections={programMicromouseSections}
        micromouseImages={micromouseGalleryImages}
        fycSections={programFycSections}
        mentorshipSections={programMentorshipSections}
        rccSections={programRccSections}
      />;
    case "/alumni":
      return (
        <AlumniPage
          title="Our Alumni"
          yearOptions={alumniYearOptions}
          members={alumniMembers}
        />
      );
    case "/contact":
      return <ContactPage />;
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
