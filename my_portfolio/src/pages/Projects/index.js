import { projects } from "../../data";
import "./Project.scss";
function Projects() {
  return (
    <section>
      <div className="title_project">
        <h1>My Projects</h1>
        <p>Most recent work</p>
      </div>
      <div className="list">
        <ul>
          <li>All</li>
          <li>Design</li>
          <li>Web</li>
          <li>APP</li>
        </ul>
      </div>
      <div className="container_project">
        {projects.map((project) => (
          <div key={project.id} className="box_proj">
            <div className="img">
              <img src={project.src} alt="" />
            </div>
            <p>{project.title}</p>
            <span>
              Demo <i className="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
