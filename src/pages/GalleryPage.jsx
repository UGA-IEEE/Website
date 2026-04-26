export default function GalleryPage({ eyebrow, title, images, emptyText }) {
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
                    <figure key={image.src} className="galleryCard">
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
    </main>
  );
}
