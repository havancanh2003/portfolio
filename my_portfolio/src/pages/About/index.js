import "./About.scss";
import { about_box } from "../../data";
function About() {
  return (
    <section className="sec_about">
      <div className="title_about">
        <h1>About Me</h1>
        <p>My introduction</p>
      </div>
      <div className="des_about">
        <div className="img_about">
          <img
            src="https://famashow.pt/wp-content/uploads/2023/09/GettyImages-1646858323-850x1099.jpg"
            alt=""
          />
        </div>

        <div className="about_about">
          <div className="introduction_about">
            {about_box.map((item) => (
              <div className="box_item" key={item.id}>
                <i className={item.icon}></i>
                <p>{item.title}</p>
                <span>{item.des}</span>
              </div>
            ))}
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <button>
            Download CV <i className="fa-regular fa-file-lines"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
