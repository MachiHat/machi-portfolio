import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8480368",
        "template_ru85hrt",
        form.current,
        "ozRrva6jHoTobOY3x"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="preset-container"
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        animate={{ opacity: 1 }}
      >
        <form ref={form} onSubmit={sendEmail}>
          <h2 className="form-title">CONTACT ME</h2>
          <div className="input-field">
            <i />
            <input
              className="shop-form-input"
              type="text"
              placeholder="Your Name"
              name="name"
            />
          </div>
          <div className="input-field">
            <i />
            <input
              className="shop-form-input"
              type="email"
              placeholder="your.email@mail.com"
              name="email"
            />
          </div>
          <div className="input-field">
            <i />
            <input
              className="shop-form-input"
              type="text"
              placeholder="The subject"
              name="subject"
            />
          </div>
          <div id="message" className="input-field">
            <i />
            <textarea
              className="shop-form-input"
              type="text"
              placeholder="Write your message here..."
              name="message"
            />
          </div>
          <motion.button className="form-btn" type="submit">Send</motion.button>
        </form>
      </motion.div>
    </AnimatePresence>
  );
};
