import Heading from "@theme/Heading";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import illustration from "../../static/img/illustration.png";
import Typewriter from "typewriter-effect";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header>
      <div className="header-contain">
        <div className="text-container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <div className="subtitle">
            <Typewriter
              options={{
                strings: [
                  siteConfig.tagline,
                  "Du concept au code, nous donnons vie à vos projets.",
                  "Inspirez-nous, nous créons pour vous.",
                  "Des solutions innovantes pour des idées audacieuses.",
                  "Vos défis, notre innovation.",
                  "L'avenir de votre projet commence ici.",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
          </div>
        </div>
        <img src={illustration} id="header-icon" />
      </div>
    </header>
  );
}

export default HomepageHeader;
