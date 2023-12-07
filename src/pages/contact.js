import { AiFillTwitterSquare, AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { FaDev, FaDiscord, FaPatreon, FaYoutube } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import BaseLayout from "@/components/BaseLayout";
import Footer from "@/components/Footer";

const emailjsApiKey = "nWGsp6QzzQUiYqR35"

const Contact = () => {
  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!nameRef.current.value || !emailRef.current.value || !subjectRef.current.value || !messageRef.current.value) {
      alert("Please fill in all fields");
      return;
    }

    emailjs
      .sendForm("service_metx8h5", "template_zvv235d", form.current, emailjsApiKey)
      // .sendForm(process.env.EMAIL_JS_SERVICE, process.env.EMAIL_JS_TEMPLATE, form.current, emailjsApiKey)
      .then((result) => {
        form.current.reset();
        alert("Message sent successfully !");
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <BaseLayout>
      <div className="contact-section" id="contact">
        <div className="containers">
          <h1 className="section-title">Contact</h1>
          <div className="centered-text">
            <p className="quote">Get In Touch With Me!</p>
            <div className="text-dark-blue">Your message is the key to unlocking our potential.</div>
          </div>
          <div className="grids">
            <div className="contact-info">
              <p className="text-dark-blue">
                I&apos;m currently available to take on new projects. Feel free to send me a message about anything you want to discuss or hire me.
              </p>
              <h4 className="mail">
                <a href="mailto:bhikhapurmustafa@gmail.com">bhikhapurmustafa@gmail.com</a>
              </h4>
              <div className="social-icons1">
                <h5 className="text-dark-blue">Socials</h5>
                <div className="flex gap-5">
                  <a href="https://github.com/B-Mustafa" className="icon">
                    <AiFillGithub />
                  </a>
                  <a href="#" className="icon">
                    <FaDiscord />
                  </a>
                  <a href="https://www.instagram.com/_mustafa_0203/?igshid=MzNINGNkZWQ4Mg%3D%3D" className="icon">
                    <AiFillInstagram />
                  </a>
                  <a href="#" className="icon">
                    <FaPatreon />
                  </a>
                  <a href="#" className="icon">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={sendEmail} ref={form}>
                <input type="text" id="name" name="name" placeholder="Your name" ref={nameRef} className="input-field" required />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  autoComplete="email"
                  ref={emailRef}
                  className="input-field"
                  required
                />
                <input type="text" id="subject" name="subject" placeholder="Subject" ref={subjectRef} className="input-field" required />
                <textarea
                  ref={messageRef}
                  className="input-field"
                  id="message"
                  name="message"
                  rows="7"
                  style={{ resize: "none" }}
                  placeholder="Message"
                  required
                />
                <div className="flex justify-end">
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </BaseLayout>
  );
};

export default Contact;
