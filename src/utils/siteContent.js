const DEFAULT_WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function formatFolderName(path) {
  return path.split("/").slice(-2, -1)[0]?.replace(/[_-]+/g, " ") || "Gallery";
}

export function formatGalleryAltText(path) {
  return (
    path
      .split("/")
      .pop()
      ?.replace(/\.[^.]+$/, "")
      .replace(/[_-]+/g, " ") || "Gallery image"
  );
}

export function buildGallerySections(images) {
  return images.reduce((sections, image) => {
    const currentSection = sections[sections.length - 1];

    if (!currentSection || currentSection.folder !== image.folder) {
      sections.push({
        folder: image.folder,
        images: [image],
      });
      return sections;
    }

    currentSection.images.push(image);
    return sections;
  }, []);
}

export function flattenGallerySections(sections) {
  return sections.flatMap((section) => section.images);
}

export function shuffleItems(items) {
  const shuffledItems = [...items];

  for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledItems[index], shuffledItems[randomIndex]] = [
      shuffledItems[randomIndex],
      shuffledItems[index],
    ];
  }

  return shuffledItems;
}

// The home calendar is generated from the current date so collaborators only
// need to update event content, not the grid math for each new month.
export function buildCalendarModel({ now, eventsByDay }) {
  const year = now.getFullYear();
  const month = now.getMonth();
  const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    now
  );
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const calendarCells = Array.from(
    { length: firstWeekday + daysInMonth },
    (_, index) => (index < firstWeekday ? null : index - firstWeekday + 1)
  );

  return {
    monthName,
    weekdays: DEFAULT_WEEKDAYS,
    eventsByDay,
    calendarCells,
  };
}
