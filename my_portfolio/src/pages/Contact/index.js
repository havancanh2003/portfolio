import "./Contact.scss";
import { contact } from "../../data";
function Contact() {
  return (
    <section>
      <div className="title_contact">
        <h1>Contact Me</h1>
        <p>Get in touch</p>
      </div>
      <div className="container_contact">
        {/*  */}
        <div className="talk_to_me">
          <h2>Talk To Me</h2>
          <div className="contain_contact">
            {contact.map((item) => (
              <div className="box_contact" key={item.id}>
                {/* {console.log(item.icon)} */}
                <i className={item.icon}></i>
                <h3>{item.title}</h3>
                <span>{item.des}</span>
                <span>
                  Write me <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
            ))}
          </div>
        </div>
        {/*  */}
        <div className="write_for_me">
          <h2>Write me your project</h2>
          <div className="input">
            <form action="">
              <label for="fname">Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />

              <label for="lname">Mail</label>
              <input
                type="text"
                id="lmail"
                name="lmail"
                placeholder="Your Email.."
              />

              <label for="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: "200px" }}
              ></textarea>

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
