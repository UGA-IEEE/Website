import { useState, useEffect, useCallback } from "react";

export default function GalleryPage({ eyebrow, title, images, emptyText }) {
  const [lightbox, setLightbox] = useState(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => { if (e.key === "Escape") closeLightbox(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox]);

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
                  {section.images.map((image) => (
                    <figure
                      key={image.src}
                      className="galleryCard"
                      onClick={() => setLightbox(image)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Enlarge: ${image.alt}`}
                      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setLightbox(image); } }}
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
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <p className="galleryEmpty">{emptyText}</p>
        )}
      </section>

      {lightbox && (
        <div
          className="lightboxOverlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
        >
          <button className="lightboxClose" onClick={closeLightbox} aria-label="Close">&#x2715;</button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="lightboxImage"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
