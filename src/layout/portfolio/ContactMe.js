import "./ContactMe.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aux from "../../component/Aux";
import DynamicIcon from "../../component/DynamicIcon";
import data from "../../asset/data/contact.json";

const ContactMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Aux>
      <section
        className="contactMeArea pageSection scroll-content"
        id="contact"
      >
        <div className="customContainer">
          <div className="contactMeContent contentWidth">
            <div className="sectionHeader">
              <h4 className="subtitle scrollAnimation" data-aos="fade-up">
                <DynamicIcon
                  iconName={"Call"}
                  fontSizeValue={"medium"}
                  marginValue="5px"
                />{" "}
                {data.contactHeaderName}
              </h4>
              <h1 className="scrollAnimation" data-aos="fade-up">
                {data.contactTitle1} <span>{data.contactTitle2}</span>
              </h1>
            </div>
            <h3 className="scrollAnimation" data-aos="fade-up">
              {/* thanhhungpro8x@icloud.com */}
            </h3>
            <p id="requiredMsg">* Marked fields are required to fill.</p>

            <form
              className="contactForm scrollAnimation"
              data-aos="fade-up"
              method="POST"
              action="mailer.js"
            >
              <div
                className="alert alert-success messenger-box-contact__msg"
                style={{ display: "none" }}
                role="alert"
              >
                Your message was sent successfully.
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="inputFieldGroup">
                    <label htmlFor="full-name">
                      {data.contactFullname} <sup>*</sup>
                    </label>
                    <input
                      type="text"
                      name="full-name"
                      id="full-name"
                      placeholder="Your Full Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="inputFieldGroup">
                    <label htmlFor="email">
                      {data.contactMail} <sup>*</sup>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your email adress"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="inputFieldGroup">
                    <label htmlFor="phone-number">
                      {data.contactPhone} <span>(optional)</span>
                    </label>
                    <input
                      type="text"
                      name="phone-number"
                      id="phone-number"
                      placeholder="Your number phone"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="inputFieldGroup">
                    <label htmlFor="subject">
                      {data.contactSubject} <sup>*</sup>
                    </label>
                    <select name="subject" id="subject">
                      {/* <option value="">Select a subject</option> */}
                      <option value="subject1">Exchange</option>
                      <option value="subject2">Contract Long Term</option>
                      <option value="subject3">Contract Short Term</option>
                      <option value="subject4">Fix Price</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="inputFieldGroup">
                    <label htmlFor="message">{data.contactMessage}</label>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Wrire your message here ..."
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="inputFieldGroup uploadAttachmentField">
                    <div>
                      <label htmlFor="uploadAttachmentField">
                        <DynamicIcon
                          iconName={"CloudUpload"}
                          fontSizeValue={"medium"}
                          marginValue="5px"
                        />
                        {data.contactAttachment}
                        <input
                          type="file"
                          name="file"
                          id="uploadAttachmentField"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="inputFieldGroup submitBtnWrap">
                    <button
                      className="themeBtn"
                      name="submit"
                      type="submit"
                      id="submit-form"
                    >
                      {data.contactSend}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Aux>
  );
};

export default ContactMe;
