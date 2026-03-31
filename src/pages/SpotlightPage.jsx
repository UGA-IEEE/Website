export default function SpotlightPage({ eyebrow, title, images = [] }) {
  return (
    <main className="contentPage">
      <section className="micromouseSection" aria-labelledby="spotlight-title">
        <div className="micromouseIntro">
          <h2 id="spotlight-title">{title}</h2>
          <p className="execBoardEyebrow">{eyebrow}</p>
          {images.length ? (
            <div className="micromouseGallery" aria-label="MicroMouse images">
              {images.map((image) => (
                <figure key={image.src} className="micromouseCard">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="micromouseImage"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                </figure>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
