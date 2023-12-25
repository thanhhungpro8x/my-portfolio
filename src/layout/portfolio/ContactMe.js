import "./ContactMe.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Aux from "../../component/Aux";
import DynamicIcon from "../../component/DynamicIcon";
// import data from "../../asset/data/contact.json";
import { useTranslation } from "react-i18next";
import React from "react";
import emailjs from "@emailjs/browser";
import * as yup from "yup";

const ContactMe = () => {
  const { t } = useTranslation();
  const [errors, setErrors] = useState(null);

  const contactFormSchema = yup.object().shape({
    fullName: yup.string().required(t("contact:errorContactFullname")),
    email: yup.string().email().required(t("contact:errorContactEmail")),
    subject: yup.string().required(t("contact:errorContactSubject")),
    message: yup.string().required(t("contact:errorContactMessage")),
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSendEmail = (e) => {
    e.preventDefault();

    const formData = {
      toName: "Thanh Hung DOAN",
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      phoneNumber: e.target.phoneNumber.value
        ? e.target.phoneNumber.value
        : "***",
      message: e.target.message.value,
    };

    console.log(formData);
    try {
      contactFormSchema.validateSync(formData, {
        abortEarly: false,
      });

      emailjs
        .send(
          process.env.REACT_APP_EMAIL_SERVICE_ID,
          process.env.REACT_APP_EMAIL_TEMPLATE_NAME,
          formData,
          process.env.REACT_APP_EMAIL_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result);
            setErrors(null);
          },
          (error) => {
            console.log(error);
          }
        );
    } catch (validationError) {
      const errorsObj = {};

      if (validationError.inner && validationError.inner.length > 0) {
        validationError.inner.forEach((error) => {
          errorsObj[error.path] = error.message;
        });
      }
      setErrors(errorsObj);
      console.log(errorsObj);
    }
  };

  return (
    <Aux>
      <section
        tabIndex={6}
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
                {t("contact:contactHeaderName")}
              </h4>
              <h1 className="scrollAnimation" data-aos="fade-up">
                {t("contact:contactTitle1")}
                <span>{t("contact:contactTitle2")}</span>
              </h1>
            </div>
            <h3 className="scrollAnimation" data-aos="fade-up">
              {/* thanhhungpro8x@icloud.com */}
            </h3>
            <p id="requiredMsg">{t("contact:contactRequired")}</p>

            <form
              className="contactForm scrollAnimation"
              data-aos="fade-up"
              onSubmit={handleSendEmail}
            >
              {/* <div
                className="alert alert-success messenger-box-contact__msg"
                style={{ display: "none" }}
                role="alert"
              >
                Your message was sent successfully.
              </div> */}
              <div className="row">
                <div className="col-md-6">
                  <div className="inputFieldGroup">
                    <label htmlFor="fullName">
                      {t("contact:contactFullname")}
                      <sup>*</sup>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder={t("contact:contactFullnamePlace")}
                    />
                    <p className="errorMsg">{errors?.fullName}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="inputFieldGroup">
                    <label htmlFor="email">
                      {t("contact:contactMail")}
                      <sup>*</sup>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder={t("contact:contactEmailPlace")}
                    />
                    <p className="errorMsg">{errors?.email}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="inputFieldGroup">
                    <label htmlFor="phoneNumber">
                      {t("contact:contactPhone")}
                      <span>(optional)</span>
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder={t("contact:contactPhonePlace")}
                    />
                    <p className="errorMsg"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="inputFieldGroup">
                    <label htmlFor="subject">
                      {t("contact:contactSubject")}
                      <sup>*</sup>
                    </label>
                    <select name="subject" id="subject">
                      {/* <option value="">Select a subject</option> */}
                      <option value="Exchange">Exchange</option>
                      <option value="Contract Long Term">
                        Contract Long Term
                      </option>
                      <option value="Contract Short Term">
                        Contract Short Term
                      </option>
                      <option value="Fix Price">Fix Price</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="inputFieldGroup">
                    <label htmlFor="message">
                      {t("contact:contactMessage")}
                      <sup>*</sup>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      placeholder={t("contact:contactMessagePlace")}
                    ></textarea>
                    <p className="errorMsg">{errors?.message}</p>
                  </div>
                </div>
                {/* <div className="col-md-12">
                  <div className="inputFieldGroup uploadAttachmentField">
                    <div>
                      <label htmlFor="uploadAttachmentField">
                        <DynamicIcon
                          iconName={"CloudUpload"}
                          fontSizeValue={"medium"}
                          marginValue="5px"
                        />
                        {t("contact:contactAttachment")}
                        <input
                          type="file"
                          name="file"
                          id="uploadAttachmentField"
                        />
                      </label>
                    </div>
                  </div>
                </div> */}
                <div className="col-md-12">
                  <div className="inputFieldGroup submitBtnWrap">
                    <button
                      className="themeBtn"
                      name="submit"
                      type="submit"
                      id="submit-form"
                    >
                      {t("contact:contactSend")}
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
