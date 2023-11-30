import { useState } from "react";

export default function ContactScreen() {
  const [formData, setFormData] = useState({});
  const [success, setSuccess] = useState("pending");
  const handleChange = ({ target }) => {
    setFormData((previousState) => {
      return {
        ...previousState,
        [target.name]: target.value,
      };
    });
  };
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => setSuccess("true"))
      .catch((error) => setSuccess("false"));
  };
  return (
    <div id={"about"} className="contact">
      <div className="form-title">contact me:</div>
      {success === "pending" ? (
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="inputs">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="inputs">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="inputs">
            <label htmlFor="reason">Message</label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="submit-button">Submit</button>
        </form>
      ) : success === "true" ? (
        <p>Thank you for reaching out!</p>
      ) : (
        <p>Form submission failed, please refresh and try again.</p>
      )}
    </div>
  );
}

// export default function Contact() {
//   return (
//     <div id={"about"} className="contact">
//       <div className="form-title">contact me:</div>
//       <form action="POST" name="contact" data-netlify="true">
//         <input type="hidden" name="form-name" value="contact" />
//         <input
//           style={{ display: "none" }}
//           id="name"
//           type="text"
//           name="name"
//           autoComplete="off"
//         />
//         <div className="inputs">
//           <label htmlFor="first_name">First Name</label>
//           <input
//             type="text"
//             name="first_name"
//             id="first_name"
//             placeholder="First Name"
//           />
//         </div>
//         <div className="inputs">
//           <label htmlFor="first_name">Last Name</label>
//           <input
//             type="text"
//             name="last_name"
//             id="last_name"
//             placeholder="Last Name"
//           />
//         </div>
//         <div className="inputs">
//           <label htmlFor="email">Email Address</label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             placeholder="Email Address"
//           />
//         </div>
//         <div className="inputs">
//           <label htmlFor="first_name">Phone Number</label>
//           <input
//             type="text"
//             name="phone"
//             id="phone"
//             placeholder="Phone Number"
//           />
//         </div>
//         <div className="inputs">
//           <label htmlFor="first_name">Message</label>
//           <textarea
//             type="text"
//             name="message"
//             id="message"
//             placeholder="Message"
//           ></textarea>
//         </div>
//         <button className="submit-button" type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }
