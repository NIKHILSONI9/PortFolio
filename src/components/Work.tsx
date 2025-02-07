import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  const projects = [
    {
      title: "Wardrobe Assistant",
      description: "Machine Learning",
      tools: "Python, Streamlit, OpenCV, CNN",
      image: "/images/placeholder.webp",
    },
    {
      title: "Mapty",
      description: "Interactive Workout Map",
      tools: "HTML CSS Vanilla JavaScript Leaflet API",
      image: "/images/mapty.webp",
    },
    {
      title: "Bus Ticket Booking System",
      description: "Automation",
      tools: "Python, SQLite, Tkinter",
      image: "/images/bus.webp",
    },
    {
      title: "Wallpaper App",
      description: "Mobile Application",
      tools: "Java, Android Studio",
      image: "/images/wallpaper-app.webp",
    },
    {
      title: "Encrypter and Decrypter",
      description: "Data Security",
      tools: "Java, Swing, AES Encryption",
      image: "/images/encryption-tool.webp",
    },
    {
      title: "3D Portfolio Website",
      description: "Frontend Development",
      tools: "React, Three.js, GSAP",
      image: "/images/portfolio.webp",
    },
  ];

  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
