import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_ko3hmpt", "template_ahbmmqd", form.current, {
        publicKey: "I6HAT5mUZH7WHabGE",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("Message Sent Succesfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-accentCyan">{success}</p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-fieldSteel text-frostText placeholder:text-frostText px-3 border border-cobalt focus:outline-none focus:ring-2 focus:ring-accentCyan transition-all duration-300"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-fieldSteel text-frostText placeholder:text-frostText px-3 border border-cobalt focus:outline-none focus:ring-2 focus:ring-accentCyan transition-all duration-300"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          rows="9"
          placeholder="Message"
          required
          className="rounded-lg bg-fieldSteel text-frostText placeholder:text-frostText p-3 border border-cobalt focus:outline-none focus:ring-2 focus:ring-accentCyan transition-all duration-300"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-accentCyan text-blueprintDark font-bold text-xl h-12 hover:bg-cobalt transition-all duration-300 shadow-frostGlow"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
