import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BlogCard from "./blogcard";
import BasicTimeline from "./HOMEPAGE/ncctime";
import PRalum from "./HOMEPAGE/prandalum";
import Media from "./HOMEPAGE/media";
import Training from "./HOMEPAGE/training";
import Cult from "./HOMEPAGE/cult";
import Admin from "./HOMEPAGE/admin";
import Sports from "./HOMEPAGE/sports";
import Genesis from "./HOMEPAGE/genesis";
import Motto from "./HOMEPAGE/motto";
import Values from "./HOMEPAGE/values";
import Regiment from "./HOMEPAGE/regiment";
import Why from "./HOMEPAGE/why";
import Pledge from "./HOMEPAGE/pledge";
import Flag from "./HOMEPAGE/flag";
import Song from "./HOMEPAGE/song";
import "/src/assets/css/home.css";

interface Props {
  theme: string;
}

function Home({ theme }: Props) {
  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#fff" : "#000"; // Adjust colors as needed
  }, [theme]);

  const [activeSection1, setActiveSection1] = useState<string | null>(null);
  const [activeSection2, setActiveSection2] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const toggleSection1 = (section: string) => {
    setActiveSection1((prevSection) =>
      prevSection === section ? null : section
    );
  };
  const toggleSection2 = (section: string) => {
    setActiveSection2(() =>
      section
    );
  };

  const isActive1 = (section: string) => activeSection1 === section;
  const isActive2 = (section: string) => activeSection2 === section;

  const renderActiveSection1 = () => {
    switch (activeSection1) {
      case "PR and Alumni":
        return <PRalum theme={theme} />;
      case "Media":
        return <Media theme={theme} />;
      case "Training":
        return <Training theme={theme} />;
      case "Culturals and Social":
        return <Cult theme={theme} />;
      case "Administrations":
        return <Admin theme={theme} />;
      case "Sports and Adventure":
        return <Sports theme={theme} />;
      default:
        return null;
    }
  };
  const renderActiveSection2 = () => {
    switch (activeSection2) {
      case "Genesis":
        return <Genesis theme={theme} />;
      case "The Motto Of NCC":
        return <Motto theme={theme} />;
      case "Core Values":
        return <Values theme={theme} />;
      case "Our Regiment":
        return <Regiment theme={theme} />;
      case "Why NCC?":
        return <Why theme={theme} />;
      case "The NCC Pledge":
        return <Pledge theme={theme} />;
      case "The NCC Flag":
        return <Flag theme={theme} />;
      case "The NCC Song":
        return <Song theme={theme} />;
      default:
        return null;
    }
  };

  return (
      <div className="overall-wrap">
        <section id="the_carousel">
          <div
            className="py-5 text-center"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-offset="-1000"
          >
            <h2
              className={
                theme === "light"
                  ? "section-heading-light"
                  : "section-heading-dark"
              }
            >
              Welcome!
            </h2>
            <h6
              className={
                theme === "light" ? "section-lead-light" : "section-lead-dark"
              }
              id="scroll-prompt"
              style={{ opacity: 1 }}
            >
              Start scrolling!
            </h6>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            id="grid"
            className={theme==='light'?'yt-wrapper-light':'yt-wrapper-dark'}
          >
            <div
              className="col-sm-4"
              data-aos="fade-up"
              data-aos-duration="500"
              id="banner"
            >
              <iframe
                src="https://www.youtube.com/embed/AnqhNjD07uM"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <div className="col-sm-8" id="para">
              <p
                style={{ color: theme === "light" ? "black" : "white" }}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                As part of our series 'Lest We Forget' we interviewed Mrs. Geeta
                Kapadia, the proud mother of the braveheart{" "}
                <b>Lt. Nawang Kapadia</b> the valiant Indian Army officer who
                attained martyrdom fighting Pakistani Pathans in the jungles of
                Rajwar in Kupwara district of Srinagar on 11 November 2000. Mrs.
                Kapadia sheds some light on the life of Lt. Kapadia, about how
                he was disciplined and a patriot right from the start and even
                though she lost a son, she is proud that it was for her nation.
                She also speaks about how she expects people to treat the
                families and loved ones of a Martyr because what they need isn't
                sympathy but empathy. You can watch the full video on
                <span> </span>
                <a
                  href="https://www.youtube.com/channel/UCA2zkmZE-hQbKrnzhjZzDgA"
                  target="_blank"
                >
                  our YouTube channel
                </a>
                .
              </p>
            </div>
          </div>
        </section>
        <hr
          className={theme === "light" ? "home-line-light" : "home-line-dark"}
          data-aos="zoom-in"
        ></hr>
        <section>
          <div className="d-flex flex-column align-items-center justify-content-center" data-aos="fade-up"
            data-aos-duration="500">
            <h2
              className={
                theme === "light"
                  ? "section-heading-light"
                  : "section-heading-dark"
              }
            >
              Latest Blogs
            </h2>
            <h6
              className={
                theme === "light" ? "section-lead-light" : "section-lead-dark"
              }
            >
              Latest Announcements and Current Events at NCC
            </h6>
          </div>
          <div className="d-flex justify-content-around flex-wrap">
            <div data-aos="fade-right" data-aos-duration="500">
              <BlogCard
                image="/src/assets/photos/blog47.jpg"
                title="A Tribute to PVC Major Rama Raghoba Rane"
                display_content="Major Rane, born in 1918 in Karnataka, joined the British Indian Army as a Naik at the age of 22. In WW II, he was involved in the war against Japan in Burma (Myanmar). He rose to prominence when he shot down a military airplane with his LMG."
                main_content="Major Rane, born in 1918 in Karnataka, joined the British Indian Army as a Naik at the age of 22. In WW II, he was involved in the war against Japan in Burma (Myanmar). He rose to prominence when he shot down a military airplane with his LMG."
                theme={theme}
                likes={40}
              />
            </div>
            <div data-aos="fade-left" data-aos-duration="500">
              <BlogCard
                image="/src/assets/photos/blog46.jpg"
                title="Captain Vikram Batra, the Lion of Kargil"
                display_content="On June 1, 1999, Vikram Batra's detachment, 13 J&K Rifles, was sent to the Kargil War. He recovered the Humps and Rocky Knob from the enemy. For showing immense bravery, Vikram Batra was promoted to Captain. He was then given the responsibility to take back point 5140, located above the Srinagar-Leh road, which was captured by the Pak Army. "
                main_content="On June 1, 1999, Vikram Batra's detachment, 13 J&K Rifles, was sent to the Kargil War. He recovered the Humps and Rocky Knob from the enemy. For showing immense bravery, Vikram Batra was promoted to Captain. He was then given the responsibility to take back point 5140, located above the Srinagar-Leh road, which was captured by the Pak Army. "
                theme={theme}
                likes={60}
              />
            </div>
          </div>
        </section>
        <hr
          className={theme === "light" ? "home-line-light" : "home-line-dark"}
          data-aos="zoom-in"
          data-aos-duration="300"
        ></hr>
        <section>
          <div
            className="d-flex flex-column justify-content-center align-items-center my-4"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <h2
              className={
                theme === "light"
                  ? "section-heading-light"
                  : "section-heading-dark"
              }
            >
              About NCC
            </h2>
            <h6
              className={
                theme === "light" ? "section-lead-light" : "section-lead-dark"
              }
            >
              It's all about Unity and Discipline...
            </h6>
          </div>
          <div
            className={
              theme === "light" ? "depart-wrapper-light" : "depart-wrapper-dark"
            }
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <span
              className={`mx-4 ${
                isActive2("Genesis")
                  ? theme === "light"
                    ? "active-span-light"
                    : "active-span-dark"
                  : ""
              }`}
              onClick={() => toggleSection2("Genesis")}
              style={{ cursor: "pointer" }}
            >
              Genesis
            </span>
            <span
              className={`mx-4 ${
                isActive2("The Motto Of NCC")
                  ? theme === "light"
                    ? "active-span-light"
                    : "active-span-dark"
                  : ""
              }`}
              onClick={() => toggleSection2("The Motto Of NCC")}
              style={{ cursor: "pointer" }}
            >
              The Motto Of NCC
            </span>
            <span
              className={`mx-4 ${
                isActive2("Core Values")
                  ? theme === "light"
                    ? "active-span-light"
                    : "active-span-dark"
                  : ""
              }`}
              onClick={() => toggleSection2("Core Values")}
              style={{ cursor: "pointer" }}
            >
              Core Values
            </span>
            <span
              className={`mx-4 ${
                isActive2("Our Regiment")
                  ? theme === "light"
                    ? "active-span-light"
                    : "active-span-dark"
                  : ""
              }`}
              onClick={() => toggleSection2("Our Regiment")}
              style={{ cursor: "pointer" }}
            >
              Our Regiment
            </span>
            <span
              className={`mx-4 ${
                isActive2("Why NCC?")
                  ? theme === "light"
                    ? "active-span-light"
                    : "active-span-dark"
                  : ""
              }`}
              onClick={() => toggleSection2("Why NCC?")}
              style={{ cursor: "pointer" }}
            >
              Why NCC?
            </span>
            <span
              className={`mx-4 ${
                isActive2("The NCC Pledge")
                  ? theme === "light"
                    ? "active-span-light"
                    : "active-span-dark"
                  : ""
              }`}
              onClick={() => toggleSection2("The NCC Pledge")}
              style={{ cursor: "pointer" }}
            >
              The NCC Pledge
            </span>
            <span
              className={`mx-4 ${
                isActive2("The NCC Flag")
                  ? theme === "light"
                    ? "active-span-light"
                    : "active-span-dark"
                  : ""
              }`}
              onClick={() => toggleSection2("The NCC Flag")}
              style={{ cursor: "pointer" }}
            >
              The NCC Flag
            </span>
            <span
              className={`mx-4 ${
                isActive2("The NCC Song")
                  ? theme === "light"
                    ? "active-span-light"
                    : "active-span-dark"
                  : ""
              }`}
              onClick={() => toggleSection2("The NCC Song")}
              style={{ cursor: "pointer" }}
            >
              The NCC Song
            </span>
          </div>
          {renderActiveSection2()}
        </section>
        <hr
          className={theme === "light" ? "home-line-light" : "home-line-dark"}
          data-aos="zoom-in"
          data-aos-duration="300"
        ></hr>
        <section>
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <h2
              className={
                theme === "light"
                  ? "section-heading-light"
                  : "section-heading-dark"
              }
            >
              History of the Regiment in Brief
            </h2>
            <h6
              className={
                theme === "light" ? "section-lead-light" : "section-lead-dark"
              }
            >
              Pursuing the Motto of 'Unity and Discipline' since 1964
            </h6>
          </div>
          <div data-aos="fade-up" data-aos-duration="500">
            <BasicTimeline theme={theme}/>
          </div>
        </section>
        <hr
          className={theme === "light" ? "home-line-light" : "home-line-dark"}
          data-aos="zoom-in"
          data-aos-duration="300"
        ></hr>
        <section className="mb-5">
          <div
            className="d-flex flex-column justify-content-center align-items-center my-4"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <h2
              className={
                theme === "light"
                  ? "section-heading-light"
                  : "section-heading-dark"
              }
            >
              Meet The Council
            </h2>
          </div>
          <div
            className={
              theme === "light" ? "depart-wrapper-light" : "depart-wrapper-dark"
            }
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <span
              className={`mx-4 ${
                isActive1("Administrations")
                  ? theme === "light"
                    ? "active-span-light"
                    : "active-span-dark"
                  : ""
              }`}
              onClick={() => toggleSection1("Administrations")}
              style={{ cursor: "pointer" }}
            >
              Administrations
            </span>
            <span
              className={`mx-4 ${
                activeSection1 === "Culturals and Social"
                  ? theme === "light"
                    ? "active-span-light"
                    : "active-span-dark"
                  : ""
              }`}
              onClick={() => toggleSection1("Culturals and Social")}
              style={{ cursor: "pointer" }}
            >
              Culturals and Social
            </span>
            <span
              className={`mx-4 ${
                activeSection1 === "Media"
                  ? theme === "light"
                    ? "active-span-light"
                    : "active-span-dark"
                  : ""
              }`}
              onClick={() => toggleSection1("Media")}
              style={{ cursor: "pointer" }}
            >
              Media
            </span>
            <span
              className={`mx-4 ${
                activeSection1 === "PR and Alumni"
                  ? theme === "light"
                    ? "active-span-light"
                    : "active-span-dark"
                  : ""
              }`}
              onClick={() => toggleSection1("PR and Alumni")}
              style={{ cursor: "pointer" }}
            >
              PR and Alumni
            </span>
            <span
              className={`mx-4 ${
                activeSection1 === "Sports and Adventure"
                  ? theme === "light"
                    ? "active-span-light"
                    : "active-span-dark"
                  : ""
              }`}
              onClick={() => toggleSection1("Sports and Adventure")}
              style={{ cursor: "pointer" }}
            >
              Sports and Adventure
            </span>
            <span
              className={`mx-4 ${
                activeSection1 === "Training"
                  ? theme === "light"
                    ? "active-span-light"
                    : "active-span-dark"
                  : ""
              }`}
              onClick={() => toggleSection1("Training")}
              style={{ cursor: "pointer" }}
            >
              Training
            </span>
          </div>
          {renderActiveSection1()}
        </section>
      </div>
  );
}

export default Home;
