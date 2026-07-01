import React, { useState } from "react";

const TO_EMAIL = "syusra841@gmail.com";
const WEB3FORMS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

const gmailCompose = (subject = "", body = "") => {
  const params = new URLSearchParams({ view: "cm", fs: "1", to: TO_EMAIL });
  if (subject) params.set("su", subject);
  if (body) params.set("body", body);
  return `https://mail.google.com/mail/?${params.toString()}`;
};

const links = [
  { ico: "fa-envelope", lbl: "Email", val: TO_EMAIL, href: gmailCompose() },
  { ico: "fa-brands fa-linkedin-in", lbl: "LinkedIn", val: "Connect with me", href: "https://www.linkedin.com/in/yusrashahid-40a61725a" },
  { ico: "fa-brands fa-github", lbl: "GitHub", val: "View my code", href: "https://github.com/Yusra-Shahid07" },
  { ico: "fa-brands fa-whatsapp", lbl: "WhatsApp", val: "Message directly", href: "https://wa.me/923704018969" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    if (!form.name) return setError("Please enter your name.");
    if (!form.email || !form.email.includes("@")) return setError("Please enter a valid email.");
    if (!form.subject) return setError("Please enter a subject.");
    if (!form.message) return setError("Please enter a message.");
    if (!WEB3FORMS_KEY) {
      return setError("Email service not configured. Add REACT_APP_WEB3FORMS_ACCESS_KEY to your .env file.");
    }

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          subject: `Portfolio Contact: ${form.subject}`,
          message: form.message,
          from_name: "Portfolio Contact Form",
          replyto: form.email,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setSuccess("Message sent successfully! I'll get back to you soon.");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setError(data.message || "Failed to send message. Please try again.");
      }
    } catch {
      setError("Failed to send message. Please check your internet and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section">
      <div className="section-header reveal">
        <span className="section-eyebrow">// get in touch</span>
        <h2 className="section-title">Contact</h2>
        <div className="section-line"></div>
      </div>
      <div className="contact-grid">
        <div className="reveal">
          <h3 className="contact-heading">Let's Work Together</h3>
          <p className="contact-sub">Open to remote internships and freelance opportunities. Feel free to reach out anytime!</p>
          <div className="contact-cards">
            {links.map((l, i) => (
              <a
                className="contact-card"
                key={i}
                href={l.href}
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-card-ico"><i className={`fa-solid ${l.ico}`}></i></div>
                <div>
                  <div className="contact-card-lbl">{l.lbl}</div>
                  <div className="contact-card-val">{l.val}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="form-wrap reveal">
          <div className="form-row">
            {["name", "email"].map(f => (
              <div className="f-group" key={f}>
                <label className="f-label">{f.charAt(0).toUpperCase() + f.slice(1)}</label>
                <input name={f} type={f === "email" ? "email" : "text"} placeholder={`Your ${f}`} className="f-input" value={form[f]} onChange={change} />
              </div>
            ))}
          </div>
          <div className="f-group">
            <label className="f-label">Subject</label>
            <input name="subject" placeholder="What's this about?" className="f-input" value={form.subject} onChange={change} />
          </div>
          <div className="f-group">
            <label className="f-label">Message</label>
            <textarea name="message" placeholder="Your message..." className="f-input f-textarea" value={form.message} onChange={change} />
          </div>
          {error && <p className="f-error">{error}</p>}
          {success && <p className="f-success">{success}</p>}
          <button className="btn-primary" onClick={submit} disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </div>
  );
}