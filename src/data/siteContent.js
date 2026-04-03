import micromouseByte from "../assets_optimized/MicroMouse/Byte.jpg";
import micromouseMaze from "../assets_optimized/MicroMouse/unpainted_maze.jpg";
import pickleballTournament from "../assets_optimized/Calendar/IEEE Pickleball Tournament.png";
import coxAutomotiveVisit from "../assets_optimized/Calendar/Cox Automotive.png";
import fycAnthonyPhoto from "../assets_optimized/FYC/Anthony.jpg";
import fycCocoPhoto from "../assets_optimized/FYC/Coco.jpg";
import fycHieuPhoto from "../assets_optimized/FYC/Hieu.jpg";
import fycJerryPhoto from "../assets_optimized/FYC/Jerry.jpg";
import fycMaryPhoto from "../assets_optimized/FYC/Mary.jpg";
import fycMiaPhoto from "../assets_optimized/FYC/Mia.jpg";
import fycOwenPhoto from "../assets_optimized/FYC/Owen.jpg";
import fycPraneelPhoto from "../assets_optimized/FYC/Praneel.jpg";
import fycSaudPhoto from "../assets_optimized/FYC/Saud.jpg";
import fycUdayaPhoto from "../assets_optimized/FYC/Udaya.jpg";
import fycZeeshanPhoto from "../assets_optimized/FYC/Zeeshan.jpg";
import {
  buildCalendarModel,
  buildGallerySections,
  formatFolderName,
  formatGalleryAltText,
} from "../utils/siteContent";

const execPhotoFiles = import.meta.glob(
  "../assets_optimized/Exec/*.{jpeg,jpg,png,JPEG,JPG,PNG}",
  {
    eager: true,
    import: "default",
  }
);

function getExecPhoto(fileName) {
  return execPhotoFiles[`../assets_optimized/Exec/${fileName}`];
}

// Centralized content keeps edits predictable for collaborators updating people,
// links, or event details without having to dig through page components.
export const importantHomeLinks = [
  {
    label: "Pay Dues",
    href: "https://example.com/pay-dues",
    description: "Pay membership dues for the year.",
  },
  {
    label: "Pickleball Registration",
    href: "https://forms.office.com/Pages/ResponsePage.aspx?id=HmwhqGNNUkOMO1D6HxR1sQCIXV0M9JBBrRc322k3PzRUQ1hBM0gzMFhOOFpOWlJLS1VBUUgzMFVLQyQlQCN0PWcu",
    description: "Sign up for our pickleball tournament!.",
  },
  {
    label: "Join the GroupMe",
    href: "https://groupme.com/join_group/102440624/SQt9qQkr",
    description: "Get updates, reminders, and community chat.",
  },
];

export const contactTopics = [
  {
    value: "membership",
    label: "Membership Dues",
    email: "ieeeugapr@gmail.com",
  },
  {
    value: "donations",
    label: "Donations",
    email: "ieeeugapr@gmail.com",
  },
  {
    value: "sponsorships",
    label: "Sponsorships",
    email: "ieeeugapr@gmail.com",
  },
  {
    value: "fyc",
    label: "First-Year Council",
    email: "ieeeugapr@gmail.com",
  },
  {
    value: "events",
    label: "Events",
    email: "ieeeugapr@gmail.com",
  },
  {
    value: "micromouse",
    label: "MicroMouse",
    email: "ieeeugapr@gmail.com",
  },
  {
    value: "other",
    label: "Other",
    email: "ieeeugapr@gmail.com",
  },
];

export const execBoardMembers = [
  {
    name: "Jordan Howard",
    role: "President",
    image: getExecPhoto("Portrait Jordan.jpg"),
    linkedin: "https://www.linkedin.com/in/jordan-howard-7ab25616b/",
  },
  {
    name: "Neel Desai",
    role: "Vice President",
    image: getExecPhoto("Landscape Neel.jpg"),
    linkedin: "https://www.linkedin.com/in/neel-desai-09a20a21a/",
  },
  {
    name: "Omar Naqib",
    role: "Engineering Director",
    image: getExecPhoto("Landscape Omar.jpg"),
    linkedin: "https://www.linkedin.com/in/omarnaqib/",
  },
  {
    name: "Allen Rucker",
    role: "Outreach Director",
    image: getExecPhoto("Landscape Allen.jpg"),
    linkedin: "https://www.linkedin.com/in/allen-rucker-a41433248/",
  },
  {
    name: "Sidney Johnson",
    role: "Events Director",
    image: getExecPhoto("JOHNSON_S-PHOTO.jpg"),
    linkedin: "https://www.linkedin.com/in/sidney-johnson4705/",
  },
  {
    name: "Jun Chambers",
    role: "First-Year Advisor",
    image: getExecPhoto("Portrait Jun.jpg"),
    linkedin: "https://www.linkedin.com/in/jun-chambers/",
  },
  {
    name: "Joshua Carter",
    role: "First-Year Advisor",
    image: getExecPhoto("Portrait Joshua.jpg"),
    linkedin: "https://www.linkedin.com/in/joshua-carter-904651325/",
  },
  {
    name: "Jason Roode",
    role: "Secretary",
    image: getExecPhoto("Landscape Jason.jpg"),
    linkedin: "https://www.linkedin.com/in/jason-roode/",
  },
];

export const fycMembers = [
  {
    name: "Zeeshan Ali",
    role: "Computer Systems Engineering",
    image: fycZeeshanPhoto,
    linkedin: "https://www.linkedin.com/in/zeeshan-ali-929101261/",
  },
  {
    name: "Anthony Behrend",
    role: "Electrical Engineering",
    image: fycAnthonyPhoto,
    linkedin: "https://www.linkedin.com/in/anthony-behrend/",
  },
  {
    name: "Saud Kasumbi",
    role: "Computer Systems Engineering",
    image: fycSaudPhoto,
    linkedin: "https://www.linkedin.com/in/saud-kasumbi/",
  },
  {
    name: "Mary Magallanes",
    role: "Electrical Engineering",
    image: fycMaryPhoto,
    linkedin: "https://www.linkedin.com/in/mariajose-magallanes/",
  },
  {
    name: "Udaya Maddi",
    role: "Computer Systems Engineering",
    image: fycUdayaPhoto,
    linkedin: "https://www.linkedin.com/in/udaya-maddi/",
  },
  {
    name: "Hieu Nguyen",
    role: "Computer Systems Engineering",
    image: fycHieuPhoto,
    linkedin: "https://www.linkedin.com/in/hieu-winn/",
  },
  {
    name: "Owen Norman",
    role: "Computer Science",
    image: fycOwenPhoto,
    linkedin: "https://www.linkedin.com/in/owennorman/",
  },
  {
    name: "Mia Stagner",
    role: "Electrical Engineering",
    image: fycMiaPhoto,
    linkedin: "https://www.linkedin.com/in/mia-stagner1/",
  },
  {
    name: "Praneel Surath",
    role: "Computer Systems Engineering",
    image: fycPraneelPhoto,
    linkedin: "https://www.linkedin.com/in/praneel-s/",
  },
  {
    name: "Coco Tang",
    role: "Computer Systems Engineering",
    image: fycCocoPhoto,
    linkedin: "https://www.linkedin.com/in/coco-tang1/",
  },
  {
    name: "Jerry Wang",
    role: "Computer Systems Engineering",
    image: fycJerryPhoto,
    linkedin: "https://www.linkedin.com/in/jerry-wang07/",
  },
];

export const staffSections = [
  {
    title: "Executive Board",
    description:
      "Meet the student leaders coordinating chapter operations, outreach, events, and strategy.",
    href: "#/exec-board",
  },
  {
    title: "Technical Teams",
    description:
      "Explore the project groups building skills through hands-on design, collaboration, and competition prep.",
    href: "#/technical-teams",
  },
  {
    title: "First-Year Council",
    description:
      "Connect with first-year members helping shape community and involvement across the chapter.",
    href: "#/fyc",
  },
  {
    title: "Mentors & Mentees",
    description:
      "Learn how our mentorship community supports academic growth, career exploration, and peer connection.",
    href: "#/mentors-mentees",
  },
];

export const technicalTeamSections = [
  {
    title: "Project Teams",
    description:
      "Technical teams give members a place to build real systems, practice collaboration, and apply classroom concepts through semester-long project work.",
  },
  {
    title: "Workshops And Build Sessions",
    description:
      "Members can expect guided work sessions, design reviews, and practical workshops that help newer students ramp up while giving experienced students room to lead.",
  },
  {
    title: "Competition And Showcase Prep",
    description:
      "Teams may prepare for demos, showcases, and competitions throughout the year, creating a structured way to turn ideas into polished technical work.",
  },
];

export const mentorMenteeSections = [
  {
    title: "Peer Guidance",
    description:
      "The mentorship community connects students across experience levels so newer members can ask questions, get advice, and feel supported early on.",
  },
  {
    title: "Academic And Career Support",
    description:
      "Mentors and mentees can share insights about coursework, internships, professional development, and how to make the most of student involvement.",
  },
  {
    title: "Community Building",
    description:
      "Beyond formal check-ins, this program is meant to strengthen belonging and create relationships that make the chapter more welcoming and collaborative.",
  },
];

export const programEventSections = [
  {
    title: "Employer Events",
    description:
      "Offer students insights into various career roles to support internships, co-op, and full-time opportunities.",
  },
  {
    title: "Social Events",
    description:
      "Provide unique ways for students to socialize with each other and build relations outside of the classroom.",
  },
  {
    title: "Workshops",
    description:
      "Expose students to technical and professional areas to aid them if they have little to no prior experience.",
  },
  {
    title: "Volunteer Events",
    description:
      "Serve as an opportunity to give back to the community through working with non-profit organizations.",
  },
];

export const programMicromouseSections = [
  {
    title: "Background",
    description:
      "MicroMouse is an international competition hosted at the IEEE Applied Power Electronics Conference.",
  },
  {
    title: "Goal",
    description:
      "    Build an autonomous robot within an 80x160 mm (3x6 in) frame to solve and navigate an unknown 2880x2880 mm (9.5x9.5 ft) maze in under 20 seconds.",
  },
];

export const programFycSections = [
  {
    title: "What is FYC?",
    description:
      "The IEEE First-Year Council is a cohort designed to prepare students for their future careers through professional development and technical growth. First-year students have the opportunity to support professional and technical growth through IEEE projects and initiatives. We will be accepting new applications for the 2nd cohort of the Council in August 2026.",
  },
  {
    title: "Weekly Meetings",
    description:
      "Attend meetings to build professional skills for earning an internship/co-op.",
  },
  {
    title: "Technical Projects",
    description:
      "Split into groups of 4, tasked with devising a project for a positive community impact.",
  },
  {
    title: "STEM Nights",
    description:
      "Volunteer at local STEM Nights in Athens elementary schools.",
  },
  {
    title: "FYC Outings",
    description:
      "Create ways for the council to bond outside of meetings.",
  },
];

export const programMentorshipSections = [
  {
    title: "Mentorship Connections",
    description:
      "Our mentorship program helps newer members connect with peers who can offer guidance, encouragement, and practical advice about classes, projects, and career planning.",
  },
  {
    title: "Shared Growth",
    description:
      "Mentorship is designed to benefit both sides by creating a culture of support, accountability, and community across different experience levels.",
  },
];

export const programRccSections = [
  {
    title: "Regional Collaboration",
    description:
      "RCC creates space for students to engage with the broader IEEE community through collaborative programming, shared ideas, and opportunities that connect chapters beyond campus.",
  },
  {
    title: "Professional Exposure",
    description:
      "Through RCC-related opportunities, members can build their network, explore leadership pathways, and gain perspective on how IEEE connects students with the wider profession.",
  },
];

export const micromouseGalleryImages = [
  {
    src: micromouseByte,
    alt: "MicroMouse robot Byte",
  },
  {
    src: micromouseMaze,
    alt: "MicroMouse competition maze",
  },
];

const gallery2526Photos = Object.entries(
  import.meta.glob("../assets_optimized/gallery/25_26/**/*.{png,jpg,jpeg,JPG,JPEG,PNG}", {
    eager: true,
    import: "default",
  })
)
  .sort(([leftPath], [rightPath]) => leftPath.localeCompare(rightPath))
  .map(([path, src]) => ({
    src,
    folder: formatFolderName(path),
    alt: formatGalleryAltText(path),
  }));

export const gallery2526Sections = buildGallerySections(gallery2526Photos);

export const calendarEvents = {
  "2026-04-11": {
    title: "Pickleball Tournament",
    image: pickleballTournament,
  },
  "2026-04-17": {
    title: "Cox Visit",
    image: coxAutomotiveVisit,
  },
};

export const calendarConfig = buildCalendarModel({
  now: new Date(),
  events: calendarEvents,
});
