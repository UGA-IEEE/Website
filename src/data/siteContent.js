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
    label: "Join the GroupMe",
    href: "https://groupme.com/join_group/102440624/3bgTHuCl",
    description: "Get updates, reminders, and community chat.",
  },
  
  {
  label: "Apply to MicroMouse",
  href: "https://forms.cloud.microsoft/r/P0XrAhwetA",
  description: "Apply to our MicroMouse team for this year!",
  },

  {
  label: "Apply to First Year Council",
  href: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=HmwhqGNNUkOMO1D6HxR1sQCIXV0M9JBBrRc322k3PzRUNVo2NTNUQ0taWkxVVUhLSE1QVVZOTFdESyQlQCN0PWcu",
  description: "First-years and transfers with fewer than 40 credit hours are eligible to apply",
  },
];

export const contactTopics = [
  {
    value: "membership",
    label: "Membership Dues",
    email: "ieeeugapr@gmail.com",
  },
  {
    value: "sponsorships",
    label: "Sponsorships",
    email: "ieeeugapr@gmail.com",
  },
  {
    value: "donations",
    label: "Donations",
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
    image: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/Exec/Portrait%20Jordan.jpg",
    linkedin: "https://www.linkedin.com/in/jordan-howard-7ab25616b/",
  },
  {
    name: "Neel Desai",
    role: "Vice President",
    image: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/Exec/Landscape%20Neel.jpg",
    linkedin: "https://www.linkedin.com/in/neel-desai-09a20a21a/",
  },
  {
    name: "Omar Naqib",
    role: "Engineering Director",
    image: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/Exec/Landscape%20Omar.jpg",
    linkedin: "https://www.linkedin.com/in/omarnaqib/",
  },
  {
    name: "Allen Rucker",
    role: "Outreach Director",
    image: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/Exec/Landscape%20Allen.jpg",
    linkedin: "https://www.linkedin.com/in/allen-rucker-a41433248/",
  },
  {
    name: "Sidney Johnson",
    role: "Events Director",
    image: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/Exec/JOHNSON_S-PHOTO.jpg",
    linkedin: "https://www.linkedin.com/in/sidney-johnson4705/",
  },
  {
    name: "Jun Chambers",
    role: "First-Year Advisor",
    image: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/Exec/Portrait%20Jun.jpg",
    linkedin: "https://www.linkedin.com/in/jun-chambers/",
  },
  {
    name: "Joshua Carter",
    role: "First-Year Advisor",
    image: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/Exec/Portrait%20Joshua.jpg",
    linkedin: "https://www.linkedin.com/in/joshua-carter-904651325/",
  },
  {
    name: "Jason Roode",
    role: "Secretary",
    image: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/Exec/Landscape%20Jason.jpg",
    linkedin: "https://www.linkedin.com/in/jason-roode/",
  },
];

export const technicalLeads = [
  {
    name: "Neel Desai",
    role: "Electrical Lead",
    image: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/Exec/Landscape%20Neel.jpg",
    linkedin: "https://www.linkedin.com/in/neel-desai-09a20a21a/",
  },
  {
    name: "Jordan Howard",
    role: "Embedded Lead",
    image: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/Exec/Portrait%20Jordan.jpg",
    linkedin: "https://www.linkedin.com/in/jordan-howard-7ab25616b/",
  },
  {
    name: "Allen Rucker",
    role: "Mechanical Lead",
    image: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/Exec/Landscape%20Allen.jpg",
    linkedin: "https://www.linkedin.com/in/allen-rucker-a41433248/",
  },
];

export const alumniYearOptions = [
  { value: "all", label: "Everyone" },
  { value: "2026", label: "2026" },
];

export const alumniMembers = [
  {
    name: "Jordan Howard",
    year: "2026",
    image: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/Exec/Portrait%20Jordan.jpg",
    currentRole: "Hardware Engineer @ Amazon Leo",
    location: "Los Angeles, CA",
    ieeeRole: "President",
    linkedin: "https://www.linkedin.com/in/jordan-howard-7ab25616b/",
  },
  {
    name: "Neel Desai",
    year: "2026",
    image: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/Exec/Landscape%20Neel.jpg",
    currentRole: "MS ECE @ University of Michigan",
    location: "Ann Arbor, MI",
    ieeeRole: "Vice President",
    linkedin: "https://www.linkedin.com/in/neel-desai-09a20a21a/",
  },
  {
    name: "Omar Naqib",
    year: "2026",
    image: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/Exec/Landscape%20Omar.jpg",
    currentRole: "Hardware Engineer @ Nordson",
    location: "Atlanta, GA",
    ieeeRole: "Engineering Director",
    linkedin: "https://www.linkedin.com/in/omarnaqib/",
  },
  {
    name: "Allen Rucker",
    year: "2026",
    image: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/Exec/Landscape%20Allen.jpg",
    currentRole: "Hardware Engineer @ Dell Technologies",
    location: "Austin, TX",
    ieeeRole: "Outreach Director",
    linkedin: "https://www.linkedin.com/in/allen-rucker-a41433248/",
  },
];

export const fycMembers = [
  {
    name: "Zeeshan Ali",
    role: "Computer Engineering",
    image: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/FYC/Zeeshan.jpg",
    linkedin: "https://www.linkedin.com/in/zeeshan-ali-929101261/",
  },
  {
    name: "Anthony Behrend",
    role: "Electrical Engineering",
    image: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/FYC/Anthony.jpg",
    linkedin: "https://www.linkedin.com/in/anthony-behrend/",
  },
  {
    name: "Saud Kasumbi",
    role: "Computer Engineering",
    image: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/FYC/Saud.jpg",
    linkedin: "https://www.linkedin.com/in/saud-kasumbi/",
  },
  {
    name: "Mary Magallanes",
    role: "Electrical Engineering",
    image: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/FYC/Mary.jpg",
    linkedin: "https://www.linkedin.com/in/mariajose-magallanes/",
  },
  {
    name: "Udaya Sashank Maddi",
    role: "Computer Engineering",
    image: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/FYC/Udaya.jpg",
    linkedin: "https://www.linkedin.com/in/udaya-maddi/",
  },
  {
    name: "Hieu Nguyen",
    role: "Computer Engineering",
    image: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/FYC/Hieu.jpg",
    linkedin: "https://www.linkedin.com/in/hieu-winn/",
  },
  {
    name: "Owen Norman",
    role: "Computer Science",
    image: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/FYC/Owen.jpg",
    linkedin: "https://www.linkedin.com/in/owennorman/",
  },
  {
    name: "Mia Stagner",
    role: "Electrical Engineering",
    image: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/FYC/Mia.jpg",
    linkedin: "https://www.linkedin.com/in/mia-stagner1/",
  },
  {
    name: "Praneel Surath",
    role: "Computer Engineering",
    image: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/FYC/Praneel.jpg",
    linkedin: "https://www.linkedin.com/in/praneel-s/",
  },
  {
    name: "CoCo Tang",
    role: "Computer Engineering",
    image: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/FYC/Coco.jpg",
    linkedin: "https://www.linkedin.com/in/coco-tang1/",
  },
  {
    name: "Jerry Wang",
    role: "Computer Engineering",
    image: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/FYC/Jerry.jpg",
    linkedin: "https://www.linkedin.com/in/jerry-wang07/",
  },
];

export const microMouseMembers = [
  {
    name: "Jacob Bennett",
    role: "Electrical Team",
    linkedin: "https://www.linkedin.com/in/jacob-bennett-ee/",
  },
  {
    name: "Gregory Egan",
    role: "Electrical Team",
    linkedin: "https://www.linkedin.com/in/gregory-egan-227897289/",
  },
  {
    name: "Ese Thaddeus",
    role: "Embedded Team",
    linkedin: "https://www.linkedin.com/in/esethad/",
  },
  {
    name: "Sahil Shaik",
    role: "Embedded Team",
    linkedin: "https://www.linkedin.com/in/sahil-shaik07/",
  },
  {
    name: "Teo Brown",
    role: "Mechanical Team",
    linkedin: "https://www.linkedin.com/in/teo-brown/",
  },
  {
    name: "Joshua Young",
    role: "Mechanical Team",
    linkedin: "https://www.linkedin.com/in/josh-young-496355266/",
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
    title: "What is MicroMouse?",
    description:
      "MicroMouse is an annual technical competition project held at the Applied Power Electronics Conference (APEC). Teams design, build, and test an autonomous robot roughly the size of a mouse to solve and traverse a 2880 × 2880 mm (9.4 × 9.4 ft) maze in the shortest time possible. The project challenges students to develop a small-form-factor, precision-focused embedded system that detects, adapts to, and avoids obstacles at high speeds.",
  },
  {
    title: "Competition Team",
    description:
      "Students selected to represent the chapter at the conference and compete with the final robot based on their technical experience and ability to make direct contributions to the project.",
  },
  {
    title: "Research & Development (R&D) Team",
    description:
      "Students selected to develop foundational skills in the core concepts of the project while exploring new ideas, prototypes, and improvements that could support future versions of the robot.",
  },
  {
    title: "Electrical Division",
    description:
      "Oversees the robot’s schematic design and PCB layout in Altium Designer while contributing to the selection, testing, and analysis of electrical components to ensure safety, reliability, and performance improvements.",
  },
  {
    title: "Embedded Division",
    description:
      "Leads the firmware development and integration for STM32 microcontrollers using C++ in a VS Code environment, with a focus on communication protocols, data acquisition, and maze-solving algorithms.",
  },
  {
    title: "Application Process",
    description:
      "Applications open at the beginning of each Fall semester. Members are placed on one of two teams and one of two divisions. Prospective students submit a resume and their preferred division, then complete a 30-minute virtual technical interview. Team selection is based on experience, interest, and availability. Division preferences are considered during placement, but assignments may vary depending on project needs and applicant qualifications. Applicants will be notified by email regarding whether they have been selected and, if selected, their assigned team and division.",
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
    title: "What is RCC?",
    description:
      "The Reconfigurable Computing Challenge (RCC) is an annual technical competition project held at the International Symposium on Field-Programmable Custom Computing Machines (FCCM). Teams design and demonstrate innovative, self-defined projects using FPGA, AI Engine (AIE), or Neural Processing Unit (NPU) architectures. Submissions consist of a two-page project description and a ten-minute demonstration video showing the design running on hardware. Finalists present at the FCCM conference.",
  },
  {
    title: "Competition Team",
    description:
      "Students selected to represent the chapter at the conference are tasked with developing, implementing, and submitting a final design to demonstrate novel applications of hardware acceleration.",
  },
  {
    title: "Research & Development (R&D) Team",
    description:
      "Students selected to learn concepts in reconfigurable computing through educational lectures and smaller-scale projects that provide opportunities to gain and apply technical skills in a controlled environment.",
  },
  {
    title: "Scope",
    description: "Projects may explore any application domain if they run on an eligible architecture. Topics include, but are not limited to:",
    bullets: [
      "Small-scale LLM deployment",
      "Accelerators for scientific applications",
      "Sparse matrix multiplication (SpMM)",
    ],
  },
  {
    title: "Timeline",
    description:
      "Students will typically spend one to two years learning the material before transitioning into project development, testing, and analysis.",
    bullets: [
      "1st/2nd Year: Exploration of FPGAs, AIEs, NPUs",
      "3rd Year: Project Research & Development",
      "4th Year: Project Testing & Analysis",
    ],
  },
  {
    title: "Application Process",
    description:
      "Applications open at the beginning of each Spring semester. Members are placed on one of two teams. Prospective students submit a resume, then complete a 30-minute virtual technical interview. Applicants are not expected to have prior experience with FPGAs, AIEs, or NPUs, but should demonstrate a strong interest in learning reconfigurable computing concepts and contributing to long-term project development. Students will be notified by email regarding whether they have been selected and, if selected, their assigned team.",
  },
];

export const micromouseGalleryImages = [
];

export const gallery2526Sections = [

  {
    folder: "Academic Excellence Awards",
    images: [
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/AA%20Awards/neel_orso.jpg", alt: "Neel & Orso" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/AA%20Awards/jordan_orso.jpg", alt: "Jordan & Orso" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/AA%20Awards/jordan_neel.jpg", alt: "Jordan & Neel" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/AA%20Awards/table_photo.jpg?updatedAt=1777125413137", alt: "Table photo" },
    ],
  },
  {
    folder: "Pickleball Tournament",
    images: [
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Pickleball%20Tournament/19.%20Nishti.jpeg?updatedAt=1777168833224", alt: "Nishti" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Pickleball%20Tournament/5.%20Owen%20Atheltic%20Stance.jpeg?updatedAt=1777168807427", alt: "Owen Athletic Stance" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Pickleball%20Tournament/3.%20Conversation.jpeg?updatedAt=1777168768992", alt: "Conversation" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Pickleball%20Tournament/1.%20top_3.jpeg?updatedAt=1777168768988", alt: "Top 3" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Pickleball%20Tournament/15.%20JonasBoston.jpeg?updatedAt=1777168769035", alt: "Jonas & Boston" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Pickleball%20Tournament/2.%20Big%20Group%20Photo.jpeg?updatedAt=1777168768975", alt: "Group Photo" },
    ],
  },
  {
    folder: "Research Symposium",
    images: [
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Research%20Symposium/IMG_1846.jpg?updatedAt=1777033421193", alt: "Audience photo 1" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Research%20Symposium/IMG_1861.jpg?updatedAt=1777033421130", alt: "Audience photo 2" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Research%20Symposium/IMG_1951_brighter.jpg?updatedAt=1777033421148", alt: "Dr. Kurum speaking" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Research%20Symposium/IMG_1942.jpg?updatedAt=1777033421100", alt: "Audience photo 3" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Research%20Symposium/IMG_1851.jpg?updatedAt=1777033421073", alt: "Professor speaking" },
    ],
  },
  {
    folder: "MLK Day of Service",
    images: [
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/MLK%20Day%20of%20Service/IMG_1494.jpg?updatedAt=1777033421375", alt: "Allen photo" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/MLK%20Day%20of%20Service/IMG_1654.jpg?updatedAt=1777033421305", alt: "Pulling Weeds" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/MLK%20Day%20of%20Service/IMG_1593.jpg?updatedAt=1777033421354", alt: "Pulling tarp" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/MLK%20Day%20of%20Service/IMG_1613.jpg?updatedAt=1777033421261", alt: "Rolling tarp" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/MLK%20Day%20of%20Service/IMG_1552.jpg?updatedAt=1777033421316", alt: "Group photo" },
    ],
  },
  {
    folder: "Google Atlanta Event",
    images: [
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Google/IMG_0558.jpg?updatedAt=1777033421071", alt: "Group photo" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Google/IMG_0461.jpg?updatedAt=1777033421221", alt: "Logo photo" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Google/IMG_0550.jpg?updatedAt=1777033421113", alt: "Large group photo" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Google/IMG_0512.jpg?updatedAt=1777033421092", alt: "Audience photo" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Google/IMG_0558.jpg?updatedAt=1777033421071", alt: "Stairs photo" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Google/IMG_0536.jpg?updatedAt=1777033420857", alt: "Panel photo" },
    ],
  },
  {
    folder: "Textron Employer Event",
    images: [
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Textron/IMG_0268.jpeg", alt: "Speaker 1" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Textron/IMG_0262.jpeg", alt: "Speaker Group 2" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Textron/IMG_0260.jpeg", alt: "Speaker Group" },
    ],
  },
  {
    folder: "Burns & McDonnell Employer Event",
    images: [
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Burns/IMG_0239.jpg?updatedAt=1777125409242", alt: "Audience photo" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Burns/IMG_0220.jpg?updatedAt=1777125409021", alt: "Speaker introduction" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Burns/IMG_0225.jpg?updatedAt=1777125408698", alt: "Company overview" },
    ],
  },
  {
    folder: "LaTeX Workshop",
    images: [
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/LaTeX%20Workshop/IMG_0200.jpg?updatedAt=1777125409315", alt: "Audience Photo" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/LaTeX%20Workshop/IMG_0205.jpg?updatedAt=1777125409745", alt: "Josh reviewing resume" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/LaTeX%20Workshop/IMG_0202.jpg?updatedAt=1777125407668", alt: "Code walkthrough" },
    ],
  },
  {
    folder: "Fall Kickoff",
    images: [
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Fall%20Kickoff/IMG_0069.jpg?updatedAt=1777125409683", alt: "Jordan Speaking" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Fall%20Kickoff/IMG_0059.jpg?updatedAt=1777125409397", alt: "APEC Introduction"},
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Fall%20Kickoff/IMG_0075.jpeg", alt: "Audience Photo"},
    ],
  },
  {
    folder: "Involvement Fair",
    images: [
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Involvement%20Fair/IMG_0026.jpeg?updatedAt=1777125373242", alt: "Josh speaking" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Involvement%20Fair/IMG_0029.jpeg?updatedAt=1777033421934", alt: "Orso, Allen, Neel" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Involvement%20Fair/IMG_0004.jpeg?updatedAt=1777033421925", alt: "Allen speaking" },
      { src: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/gallery/25_26/Involvement%20Fair/IMG_0021.jpeg?updatedAt=1777033421875", alt: "Omar speaking" },
    ],
  },
];

export const calendarEvents = {
  "2026-08-27": {
    title: "Kickoff Event",
    image: "https://ik.imagekit.io/f9q7dtbaq/assets_optimized/Calendar/IEEE%20Kickoff%20Meeting.png",
  },
};

export const calendarConfig = buildCalendarModel({
  now: new Date(),
  events: calendarEvents,
});
