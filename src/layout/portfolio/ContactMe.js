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
import { Snackbar, Alert } from "@mui/material";
import Spinner from "../../component/Spinner";

const initialForm = {
  fullName: "",
  email: "",
  subject: "",
  phoneNumber: "***",
  message: "",
};

const ContactMe = () => {
  const { t } = useTranslation();
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ ...initialForm });
  const [snackBar, setSnackBar] = useState({
    open: false,
    message: "",
    severity: undefined,
  });

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

    try {
      // console.log(loading);
      setLoading(!loading);
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
            // console.log(result);
            setSnackBar({
              open: true,
              message: t("contact:contactSuccess"),
              severity: "success",
            });
            setErrors(null);
            setFormData({ ...initialForm });
            setLoading(false);
          },
          (error) => {
            setSnackBar({
              open: true,
              message: t("contact:contactSentError"),
              severity: "error",
            });
            setLoading(false);
            // console.log(error);
          }
        );
    } catch (validationError) {
      const errorsObj = {};

      if (validationError.inner && validationError.inner.length > 0) {
        validationError.inner.forEach((error) => {
          errorsObj[error.path] = error.message;
        });
      }
      setSnackBar({
        open: true,
        message: t("contact:contactRequired"),
        severity: "error",
      });
      setErrors(errorsObj);
      setLoading(false);
    }
  };

  const onCloseSnackbar = () => {
    setSnackBar({ open: false, message: "", severity: undefined });
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
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target?.value })
                      }
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
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target?.value })
                      }
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
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phoneNumber: e.target?.value,
                        })
                      }
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
                    <select
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    >
                      <option value="">Select a subject</option>
                      <option value="Exchange">Exchange</option>
                      <option value="Contract Long Term">
                        Contract Long Term
                      </option>
                      <option value="Contract Short Term">
                        Contract Short Term
                      </option>
                      <option value="Fix Price">Fix Price</option>
                    </select>
                    <p className="errorMsg">{errors?.subject}</p>
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
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target?.value,
                        })
                      }
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
                  {loading ? <Spinner spinMode={"spinnerContainerOver"} /> : ""}
                  <div className="inputFieldGroup submitBtnWrap">
                    <button
                      className="themeBtn"
                      name="submit"
                      type="submit"
                      id="submitForm"
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
      <Snackbar
        open={snackBar.open}
        autoHideDuration={6000}
        onClose={onCloseSnackbar}
      >
        <Alert
          onClose={onCloseSnackbar}
          severity={snackBar.severity ? snackBar.severity : "success"}
          sx={{ width: "100%" }}
        >
          {snackBar.message}
        </Alert>
      </Snackbar>
    </Aux>
  );
};

export default ContactMe;
