import emailjs from "emailjs-com";
import styles from "./ContactForm.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_reqlgn7",
        "template_c5o6r87",
        e.target,
        "ooMXhdopUjTx25RAt"
      )
      .then((res) => {
        toast("Email has been send");
        e.target.reset();
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="col-md-12">
        <h1 className=" text-white text-center fw-bold mb-5">
          Get In Touch With Us
        </h1>
      </div>
      <div className="d-flex flex-column flex-column-reverse flex-lg-row justify-content-evenly align-items-center gap-1 ">
        <div className="col-11 col-lg-5 mb-4">
          <iframe
            className="w-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.1327714366316!2d74.27512097469274!3d31.43801155120812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907f7dde85bf7%3A0xaee40db63fd9414!2sBismillah%20Beauty%20Salon!5e0!3m2!1sen!2s!4v1709994727331!5m2!1sen!2s"
            height="430"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-11 col-lg-6 boxShadow  p-5 ">
          <form className="row g-3" onSubmit={sendEmail}>
            <div className="col-md-6">
              <label htmlForfor="name" className="form-label text-white">
                Name <span className="fs-5"></span>
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
              />
            </div>

            <div className="col-md-6">
              <label htmlForfor="number" className="form-label text-white">
                Number<span className="text-danger fs-5">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                id="number"
                name="number"
                required
              />
            </div>
            <div className="col-md-12">
              <label for="inputPassword4" className="form-label text-white">
                Select Your Service
                <span className="text-danger fs-5">*</span>
              </label>
              <select
                className="form-select"
                name="select"
                required
                style={{ cursor: "pointer" }}
              >
                <option selected disabled value="">
                  Choose...
                </option>
                <option>Hair Extensions</option>
                <option>Body Waxing</option>
                <option>Manicure</option>
                <option>Make-up Services</option>
                <option>Tanning</option>
                <option>Pedicure</option>
                <option>Hair Styling</option>
                <option>Hair Dye</option>
                <option>Mehndi</option>
                <option>Party Makeup</option>
              </select>
            </div>
            <div className="col-12">
              <label for="inputAddress" className="form-label text-white">
                Message
              </label>
              <textarea
                name="message"
                className="form-control "
                id="validationTextarea"
                placeholder="Enter your Message"
              ></textarea>
            </div>
            <button type="submit" className={`${styles.submitBtn}`}>
              Submit
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
