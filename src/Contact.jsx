export default function Contact() {
  return (
    <div id={"about"} className="contact">
      <form data-netlify="true" netlify-honeypot="name" name="contact">
        <input type="hidden" name="form-name" value="contact" />
        <input
          style={{ display: "none" }}
          id="name"
          type="text"
          name="name"
          autoComplete="off"
        />
        <div>
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="First Name"
          />
        </div>
        <div>
          <label htmlFor="first_name">Last Name</label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Last Name"
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
        </div>
        <div>
          <label htmlFor="first_name">Phone Number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone Number"
          />
        </div>
        <div>
          <label htmlFor="first_name">Message</label>
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
