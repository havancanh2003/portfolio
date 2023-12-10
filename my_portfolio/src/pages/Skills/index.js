import "./skills.scss";
import { fontend_skills, backend_skills } from "../../data";

function Skills() {
  return (
    <section>
      <div className="title_skills">
        <h1>Skills</h1>
        <p>My technical level</p>
      </div>

      <div className="container">
        <div className="contain">
          <h2>Fontend Developer</h2>
          <div className="box">
            {fontend_skills.map((item) => (
              <div key={item.id} className="box_skill">
                <i className="fa-solid fa-circle-check"></i>
                <div className="about_item">
                  <p>{item.title}</p>
                  <span>{item.des}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="contain">
          <h2>Backend Developer</h2>
          <div className="box">
            {backend_skills.map((item) => (
              <div key={item.id} className="box_skill">
                <i className="fa-solid fa-circle-check"></i>
                <div className="about_item">
                  <p>{item.title}</p>
                  <span>{item.des}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
