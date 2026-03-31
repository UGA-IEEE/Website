export default function ContactPage() {
  return (
    <main className="contentPage">
      <section className="contactSection" aria-labelledby="contact-title">
        <div className="contactIntro">
          <p className="execBoardEyebrow">Contact</p>
          <h2 id="contact-title">Contact Us</h2>
          <p className="contactLead">
            Fill out this form and we will get back to you as soon as possible.
          </p>
        </div>

        <form
          className="contactForm"
          action="mailto:ieeeugapr@gmail.com"
          method="post"
          encType="text/plain"
        >
          <div className="contactFormRow">
            <label className="contactField">
              <span className="srOnly">First Name</span>
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                autoComplete="given-name"
              />
            </label>
            <label className="contactField">
              <span className="srOnly">Last Name</span>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                autoComplete="family-name"
              />
            </label>
          </div>

          <label className="contactField">
            <span className="srOnly">Email</span>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              autoComplete="email"
            />
          </label>

          <label className="contactField">
            <span className="srOnly">Message</span>
            <textarea name="message" placeholder="Message" rows="7" />
          </label>

          <button type="submit" className="contactSubmit">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
