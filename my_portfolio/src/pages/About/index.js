import "./About.scss";
import { about_box } from "../../data";
import { useState } from "react";

function About() {
  const [detailDt, setDetail] = useState();
  const [overlay, setOverlay] = useState(false);

  const handlebox = (item) => {
    setDetail(item);
    setOverlay(true);
  };
  const removehover = () => {
    setOverlay(false);
  };
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

        {overlay ? (
          <div className="overlay" onClick={removehover}>
            {/* <div className="detail_box">
              <i className="fa-regular fa-circle-xmark"></i>
              <h3>{detailDt.title}</h3>
              {detailDt.detail.map((itemDetail, index) => (
                <div className="itemDetail" key={index}>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>{itemDetail.dt}</span>
                </div>
              ))}
            </div> */}
          </div>
        ) : (
          <></>
        )}
        {detailDt ? (
          <div className="detail_box">
            <i
              onClick={() => {
                setOverlay(false);
                setDetail(false);
              }}
              className="fa-regular fa-circle-xmark"
            ></i>
            <h3>{detailDt.title}</h3>
            {detailDt.detail.map((itemDetail, index) => (
              <div className="itemDetail" key={index}>
                <i className="fa-solid fa-circle-check"></i>
                <span>{itemDetail.dt}</span>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
        <div className="about_about">
          <div className="introduction_about">
            {about_box.map((item) => (
              <div
                className="box_item"
                key={item.id}
                onClick={(e) => {
                  handlebox(item);
                }}
              >
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

          <a href="./a.pdf" download>
            <button>
              Download CV <i className="fa-regular fa-file-lines"></i>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
