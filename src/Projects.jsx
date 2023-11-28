import CircleText from "./CircleText";

export default function Projects() {
  return (
    <div className="proj-container">
      <section id="project1" className="Project Left">
        <CircleText
          string={"React | Weather | Forecast | "}
          image={"/facebook-cropped.png"}
        />

        <p className="Project__text">
          <div className="text-header">
            <p>
              <span className="Project__text--accent">Weather App</span>
            </p>
            <a
              className="view-link"
              href="https://wild-alaska-weather.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          </div>
          <div className="text-body">
            <span className="Project__text--accent"></span>The React-based
            weather app seamlessly combines functionality and aesthetics to
            deliver real-time weather information with a user-friendly
            interface. Utilizing an API to fetch up-to-date data, the app allows
            users to easily switch between different cities and view detailed
            forecasts.
          </div>
        </p>
      </section>
      <section className="Project Right">
        <CircleText
          string={"Etch | a | Sketch | "}
          image={"public/Screenshot 2023-11-28 144034.png"}
        />
        <p className="Project__text">
          <div className="text-header">
            <p>
              <span className="Project__text--accent">Etch-a-Sketch</span>
            </p>
            <a
              className="view-link"
              href="https://etch-a-sketch-wildalaska.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          </div>
          <div className="text-body">
            The Etch-a-Sketch app, crafted with pure Vanilla JavaScript,
            recreates the nostalgic joy of the classic drawing toy in a digital
            format. The intuitive interface responds dynamically to user input.
            With the absence of external libraries or frameworks, the app
            showcases the versatility and power of Vanilla JavaScript in
            creating an interactive and nostalgic application.
          </div>
        </p>
      </section>
      <section className="Project Left">
        <CircleText
          string={"Tic | Tac | Crow |"}
          image={"/facebook-cropped.png"}
        />
        <p className="Project__text">
          <div className="text-header">
            <p>
              <span className="Project__text--accent">Tic-Tac-Toe</span>
            </p>
            <a
              className="view-link"
              href="https://tic-tac-toe-wild-alaska.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          </div>
          <div className="text-body">
            The Tic-Tac-Toe app, meticulously crafted with pure Vanilla
            JavaScript.Engage in strategic battles, taking turns to mark Xs and
            Os on the grid. Tic-Tac-Toe app exemplifies the elegance and
            efficiency of Vanilla JavaScript in delivering a timeless gaming
            experience.
          </div>
        </p>
      </section>
      <section className="Project Right">
        <CircleText
          string={"Memory | Crow | Cards | "}
          image={"/facebook-cropped.png"}
        />
        <p className="Project__text">
          <div className="text-header">
            <p>
              <span className="Project__text--accent">Memory Game</span>
            </p>
            <a
              className="view-link"
              href="https://wildalaska-memory-game.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          </div>
          <div className="text-body">
            The React-powered memory card selection game app offers a
            captivating blend of entertainment and cognitive challenge. The
            React framework ensures smooth transitions and responsive
            interactions. Effective state management enhances replay value and
            keeps players entertained while exercising their memory prowess.
          </div>
        </p>
      </section>
    </div>
  );
}
