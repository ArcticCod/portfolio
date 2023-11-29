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
    <div>
      <h1 className="text-offwhite font-bold text-[32px] text-center mb-[16px]">
        Contact Us
      </h1>
      {success === "pending" ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[600px] flex flex-col gap-[8px] mx-auto bg-darkaccent p-[32px] rounded-[4px] items-center shadow-small"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="flex flex-col gap-[4px] w-full">
            <label
              htmlFor="name"
              className="text-offwhite text-[12px] font-bold uppercase leading-[1]"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              className="w-full focus:outline-none bg-darkness text-offwhite rounded-[4px] py-[2px] px-[8px]"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-[4px] w-full">
            <label
              htmlFor="email"
              className="text-offwhite text-[12px] font-bold uppercase leading-[1]"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              className="w-full focus:outline-none bg-darkness text-offwhite rounded-[4px] py-[2px] px-[8px]"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-[4px] w-full">
            <label
              htmlFor="reason"
              className="text-offwhite text-[12px] font-bold uppercase leading-[1]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full h-[200px] focus:outline-none bg-darkness text-offwhite rounded-[4px] py-[2px] px-[8px] resize-none"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="py-[4px] px-[16px] rounded-[4px] bg-accent text-darkness font-bold uppercase">
            Submit
          </button>
        </form>
      ) : success === "true" ? (
        <p className="p-[16px] bg-darkaccent rounded-[4px] shadow-small text-[24px] text-offwhite text-center max-w-[350px] mx-auto">
          Thank you for reaching out! A member of our staff will be in contact
          with you shortly.
        </p>
      ) : (
        <p className="p-[16px] bg-darkaccent rounded-[4px] shadow-small text-[24px] text-offwhite text-center max-w-[300px] mx-auto">
          Form submission failed, please refresh and try again.
        </p>
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
