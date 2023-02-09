import { useState, useEffect } from "react";
import "./form.css";

function ContactsForm() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "Firstname is required!";
    }
    if (!values.lastname) {
      errors.lastname = "Lastname is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.subject) {
      errors.subject = "This field is required!";
    }
    if (!values.message) {
      errors.message = "Pls write some message in this field!";
    }
    return errors;
  };

  return (
    <>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="success">Message Sent successfully</div>
      ) : (
        <section className="Form-big-container">
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <div className="fiel-container">
                <div className="field">
                  <label>
                    First Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    value={formValues.firstname}
                    onChange={handleChange}
                  />
                </div>
                <p>{formErrors.firstname}</p>
              </div>

              <div className="fiel-container">
                <div className="field">
                  <label>
                    Last Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    value={formValues.lastname}
                    onChange={handleChange}
                  />
                </div>
                <p>{formErrors.lastname}</p>
              </div>

              <div className="fiel-container">
                <div className="field">
                  <label>
                    Email <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </div>
                <p>{formErrors.email}</p>
              </div>

              <div className="fiel-container">
                <div className="field">
                  <label>
                    Subject <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formValues.subject}
                    onChange={handleChange}
                  />
                </div>
                <p>{formErrors.subject}</p>
              </div>
            </div>
            <div className="field">
              <label>
                Message <span>*</span>
              </label>
              <textarea
                name="message"
                value={formValues.message}
                onChange={handleChange}
                placeholder="Write Your Message Here..."
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <p>{formErrors.message}</p>
            <button className="submitBtn">Send Message</button>
          </form>
        </section>
      )}
    </>
  );
}

export default ContactsForm;
