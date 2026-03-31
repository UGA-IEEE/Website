import micromouseByte from "../assets_optimized/MicroMouse/Byte.jpg";
import micromouseMaze from "../assets_optimized/MicroMouse/unpainted_maze.jpg";
import micromouseShowcasePoster from "../assets_optimized/Calendar/MicroMouse Showcase.jpg";
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
    name: "Anthony Behrend",
    image: fycAnthonyPhoto,
    linkedin: "https://www.linkedin.com/in/anthony-behrend/",
  },
  {
    name: "Coco Tang",
    image: fycCocoPhoto,
    linkedin: "https://www.linkedin.com/in/coco-tang1/",
  },
  {
    name: "Hieu Nguyen",
    image: fycHieuPhoto,
    linkedin: "https://www.linkedin.com/in/hieu-winn/",
  },
  {
    name: "Jerry Wang",
    image: fycJerryPhoto,
    linkedin: "https://www.linkedin.com/in/jerry-wang07/",
  },
  {
    name: "Mary Magallanes",
    image: fycMaryPhoto,
    linkedin: "https://www.linkedin.com/in/mariajose-magallanes/",
  },
  {
    name: "Mia Stagner",
    image: fycMiaPhoto,
    linkedin: "https://www.linkedin.com/in/mia-stagner1/",
  },
  {
    name: "Owen Norman",
    image: fycOwenPhoto,
    linkedin: "https://www.linkedin.com/in/owennorman/",
  },
  {
    name: "Praneel Surath",
    image: fycPraneelPhoto,
    linkedin: "https://www.linkedin.com/in/praneel-s/",
  },
  {
    name: "Saud Kasumbi",
    image: fycSaudPhoto,
    linkedin: "https://www.linkedin.com/in/saud-kasumbi/",
  },
  {
    name: "Udaya Maddi",
    image: fycUdayaPhoto,
    linkedin: "https://www.linkedin.com/in/udaya-maddi/",
  },
  {
    name: "Zeeshan Ali",
    image: fycZeeshanPhoto,
    linkedin: "https://www.linkedin.com/in/zeeshan-ali-929101261/",
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

export const calendarConfig = buildCalendarModel({
  now: new Date(),
  eventsByDay: {
    19: {
      title: "MicroMouse Showcase",
      image: micromouseShowcasePoster,
    },
  },
});
