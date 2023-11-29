export default function Contact() {
  return (
    <div id={"about"} className="contact">
      <div className="form-title">contact me:</div>
      <form
        method="POST"
        className="contact-form"
        data-netlify="true"
        netlify-honeypot="name"
        name="contact"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          style={{ display: "none" }}
          id="name"
          type="text"
          name="name"
          autoComplete="off"
        />
        <div className="inputs">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="First Name"
          />
        </div>
        <div className="inputs">
          <label htmlFor="first_name">Last Name</label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Last Name"
          />
        </div>
        <div className="inputs">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
        </div>
        <div className="inputs">
          <label htmlFor="first_name">Phone Number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone Number"
          />
        </div>
        <div className="inputs">
          <label htmlFor="first_name">Message</label>
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
