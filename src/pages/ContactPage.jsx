import { useState } from "react";
import { contactTopics } from "../data/siteContent";

export default function ContactPage() {
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const topicConfig =
      contactTopics.find((topic) => topic.value === selectedTopic);

    if (!topicConfig) {
      return;
    }

    const firstName = formData.get("firstName")?.toString().trim() || "";
    const lastName = formData.get("lastName")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";
    const fullName = `${firstName} ${lastName}`.trim();
    const subject = `${topicConfig.label} Inquiry${fullName ? ` - ${fullName}` : ""}`;
    const body = [
      `Topic: ${topicConfig.label}`,
      `Name: ${fullName || "N/A"}`,
      `Email: ${email || "N/A"}`,
      "",
      "Message:",
      message || "N/A",
    ].join("\n");

    window.location.href = `mailto:${topicConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

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
          onSubmit={handleSubmit}
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
            <span className="srOnly">Topic</span>
            <select
              className="contactSelect"
              name="topic"
              value={selectedTopic}
              onChange={(event) => setSelectedTopic(event.target.value)}
              required
            >
              <option value="" disabled>
                Topic
              </option>
              {contactTopics.map((topic) => (
                <option key={topic.value} value={topic.value}>
                  {topic.label}
                </option>
              ))}
            </select>
          </label>

          <label className="contactField">
            <span className="srOnly">Email</span>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              autoComplete="email"
              required
            />
          </label>

          <label className="contactField">
            <span className="srOnly">Message</span>
            <textarea name="message" placeholder="Message" rows="7" required />
          </label>

          <button type="submit" className="contactSubmit">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
