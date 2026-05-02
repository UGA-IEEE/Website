import { useState, useEffect, useCallback, useMemo } from "react";

export default function GalleryPage({ eyebrow, title, images, emptyText }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const allImages = useMemo(
    () => images.flatMap((section) => section.images),
    [images]
  );

  const isOpen = activeIndex !== null;
  const current = isOpen ? allImages[activeIndex] : null;

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(() => setActiveIndex((i) => (i - 1 + allImages.length) % allImages.length), [allImages.length]);
  const next = useCallback(() => setActiveIndex((i) => (i + 1) % allImages.length), [allImages.length]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, prev, next]);

  let flatIndex = 0;

  return (
    <main className="contentPage">
      <section className="gallerySection" aria-labelledby="gallery-title">
        <div className="galleryIntro">
          <p className="execBoardEyebrow">{eyebrow}</p>
          <h2 id="gallery-title">{title}</h2>
        </div>

        {images.length ? (
          <div className="gallerySections">
            {images.map((section) => (
              <section
                key={section.folder}
                className="galleryGroup"
                aria-labelledby={`gallery-group-${section.folder}`}
              >
                <div className="galleryDivider">
                  <h3
                    id={`gallery-group-${section.folder}`}
                    className="galleryDividerLabel"
                  >
                    {section.folder}
                  </h3>
                </div>

                <div className="galleryGrid">
                  {section.images.map((image) => {
                    const idx = flatIndex++;
                    return (
                      <figure
                        key={image.src}
                        className="galleryCard"
                        onClick={() => setActiveIndex(idx)}
                        role="button"
                        tabIndex={0}
                        aria-label={`Enlarge: ${image.alt}`}
                        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveIndex(idx); } }}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="galleryImage"
                          loading="lazy"
                          decoding="async"
                          sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                        />
                      </figure>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <p className="galleryEmpty">{emptyText}</p>
        )}
      </section>

      {isOpen && (
        <div
          className="lightboxOverlay"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
        >
          <button className="lightboxClose" onClick={close} aria-label="Close">&#x2715;</button>

          <button
            className="lightboxNav lightboxNav--prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <polyline points="13,4 7,10 13,16" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <img
            src={current.src}
            alt={current.alt}
            className="lightboxImage"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightboxNav lightboxNav--next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <polyline points="7,4 13,10 7,16" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <span className="lightboxCounter">{activeIndex + 1} / {allImages.length}</span>
        </div>
      )}
    </main>
  );
}
