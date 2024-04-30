/* eslint-disable jsx-a11y/img-redundant-alt */
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import IconMoon from "./icons/moon";
import IconSun from './icons/sun';
import { useTheme } from "next-themes";


function App() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <main className="container">
      <section className="profile">
        <img
          src={require("./images/IMG_20220816_164712_128.jpg")}
          alt="my profile photo"
          width="350"
          height="350"
        />
        <div className="profile-text">
          <h1>HILMI SAFAK</h1>
          {/* <button
            className="flex my-0 sm:my-4"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            {resolvedTheme === "dark" ? <IconSun /> : <IconMoon />}
          </button> */}

          <h4>
            <span>BACKEND DEVELOPER</span>
          </h4>
          <div className="icons">
            <a
              href="https://www.instagram.com/hilmi_safak/"
              target="_blank"
              className="i ai"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://twitter.com/Hilmi511"
              target="_blank"
              className="i ai"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.linkedin.com/in/hilmi-safak/"
              target="_blank"
              className="i ai"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/Hilmi51"
              target="_blank"
              className="i ai"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.youtube.com/channel/UClQQsXPjHynuY4A7X18eNKw"
              target="_blank"
              className="i ai"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
          <div className="hire-me">
            <button
              onClick={() =>
                (window.location = "mailto:hilmisafak.info@gmail.com")
              }
              target="_blank"
            >
              Contact Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
