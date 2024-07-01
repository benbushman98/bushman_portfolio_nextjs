import emailjs from "emailjs-com";
import { useContext, useState } from "react";
import NavContext from "../context/navContext";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const { nav } = useContext(NavContext);

  const [mailData, setMailData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const { user_name, user_email, message } = mailData;
  const [error, setError] = useState(null);

  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });

  const onRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (user_name.length === 0 || user_email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else if (!recaptchaToken) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_abijmul", // service id
          "template_i6yddu7", // template id
          { ...mailData, "g-recaptcha-response": recaptchaToken },
          "Je1lX0MpHjZ51x-nR" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ user_name: "", user_email: "", message: "" });
            setRecaptchaToken(null);
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <section id="contact" className={`${nav === "contact" ? "active" : ""}`}>
      <div className="contact-container">
        <div className="container page-title text-center">
          <h2 className="text-center">
            get <span>in touch</span>
          </h2>
          <span className="title-head-subtitle">
            I’m always open to discussing product design work or partnerships.
          </span>
        </div>
        <div className="container">
          <div className="row contact">
            <div className="col-12 col-md-4 col-xl-4 leftside">
              <ul className="custom-list">
                <li>
                  <h6 className="font-weight-600">
                    <span className="contact-title">Phone</span>
                    <i className="fa fa-whatsapp" />
                    <span className="contact-content">801-372-1410</span>
                  </h6>
                </li>
                <li>
                  <h6 className="font-weight-600">
                    <span className="contact-title">email</span>
                    <i className="fa fa-envelope-o fs-14" />
                    <span className="contact-content">info@benjaminbushman.com</span>
                  </h6>
                </li>
                <li>
                  <h6 className="font-weight-600">
                    <span className="contact-title">LinkedIn</span>
                    <i className="fa fa-linkedin" />
                    <span className="contact-content">
                      <a
                        href="https://www.linkedin.com/in/benjamin-bushman/"
                        className="text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        /in/benjamin-bushman
                      </a>
                    </span>
                  </h6>
                </li>
                <li>
                  <h6 className="font-weight-600">
                    <span className="contact-title">GitHub</span>
                    <i className="fa fa-github" />
                    <span className="contact-content">
                      <a
                        href="https://github.com/benbushman98"
                        className="text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        benbushman98
                      </a>
                    </span>
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-8 col-xl-8 rightside">
              <p>
                If you have any suggestion, project or even you want to say Hello... please fill out the form below and I will reply you shortly.
              </p>
              <form className="contactform" onSubmit={onSubmit}>
                <div className="row">
                  <div className="form-group col-xl-6">
                    <i className="fa fa-user prefix" />
                    <input
                      id="name"
                      name="user_name"
                      onChange={onChange}
                      value={user_name}
                      type="text"
                      className="form-control"
                      placeholder="YOUR NAME"
                      required
                    />
                  </div>
                  <div className="form-group col-xl-6">
                    <i className="fa fa-envelope prefix" />
                    <input
                      id="email"
                      type="email"
                      name="user_email"
                      onChange={onChange}
                      value={user_email}
                      className="form-control"
                      placeholder="YOUR EMAIL"
                      required
                    />
                  </div>
                  <div className="form-group col-xl-12">
                    <i className="fa fa-comments prefix" />
                    <textarea
                      id="comment"
                      name="message"
                      onChange={onChange}
                      value={message}
                      className="form-control"
                      placeholder="YOUR MESSAGE"
                      required
                    />
                  </div>
                </div>

                <div className="form-group col-xl-12">
                  <ReCAPTCHA
                    sitekey="6Lcs-QUqAAAAAAZG6tRMnZ4SDeoZxJzLmCh5i9IP"
                    onChange={onRecaptchaChange}
                  />
                </div>

                <div className="submit-form">
                  <button
                    className="btn button-animated"
                    type="submit"
                    name="send"
                  >
                    <span>
                      <i className="fa fa-send" /> Send Message
                    </span>
                  </button>
                </div>

                <div className="form-message">
                  <div
                    className={error ? "empty_notice" : "returnmessage"}
                    style={{ display: error == null ? "none" : "block" }}
                  >
                    <span>
                      {error
                        ? "Please Fill Required Fields"
                        : "Your message has been received, We will contact you soon."}
                    </span>
                  </div>
                  <span className="output_message text-center font-weight-600 uppercase" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
