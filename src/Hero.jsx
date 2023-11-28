/* eslint-disable react/prop-types */

import CircleText from "./CircleText";

/* eslint-disable react/jsx-key */
export default function Hero() {
  return (
    <section id="home" className="Hero">
      <CircleText
        string={"software developer | javascript expert | ux ui enthusiast | "}
        image={"/facebook-cropped.png"}
      />
      <p className="Hero__text">
        <span className="Hero__text--accent">T</span>hank you for visiting.{" "}
        <span className="Hero__text--accent">F</span>eel free to{" "}
        <a href="#project1">
          <span className="Hero__text--italic">explore</span>.
        </a>
        <span className="Hero__arrow">↓</span>
      </p>
    </section>
  );
}
