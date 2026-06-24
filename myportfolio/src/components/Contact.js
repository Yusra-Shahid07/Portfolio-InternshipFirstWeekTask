import React, { useState } from "react";

const links = [
  { ico: "fa-envelope", lbl: "Email", val: "syusra841@gmail.com", action: () => window.location.href = "mailto:syusra841@gmail.com" },
  { ico: "fa-brands fa-linkedin-in", lbl: "LinkedIn", val: "Connect with me", action: () => window.open("https://www.linkedin.com/in/yusrashahid-40a61725a", "_blank") },
  { ico: "fa-brands fa-github", lbl: "GitHub", val: "View my code", action: () => window.open("https://github.com/YusraShahid07", "_blank") },
  { ico: "fa-brands fa-whatsapp", lbl: "WhatsApp", val: "Message directly", action: () => window.open("https://wa.me/923704018969", "_blank") },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [error, setError] = useState("");

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = () => {
    if (!form.name) return setError("Please enter your name.");
    if (!form.email || !form.email.includes("@")) return setError("Please enter a valid email.");
    if (!form.subject) return setError("Please enter a subject.");
    if (!form.message) return setError("Please enter a message.");
    setError("");
    window.location.href = `mailto:syusra841@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
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
              <div className="contact-card" key={i} onClick={l.action}>
                <div className="contact-card-ico"><i className={`fa-solid ${l.ico}`}></i></div>
                <div>
                  <div className="contact-card-lbl">{l.lbl}</div>
                  <div className="contact-card-val">{l.val}</div>
                </div>
              </div>
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
          <button className="btn-primary" onClick={submit}>Send Message ✦</button>
        </div>
      </div>
    </div>
  );
}