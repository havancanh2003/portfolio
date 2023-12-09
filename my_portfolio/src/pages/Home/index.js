import "./Home.scss";

function Home() {
  return (
    <section className="section">
      <div className="left">
        <div className="icon_home">
          <a href="https://www.facebook.com/chelsea.canh.338">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#github">
            <i className="fa-brands fa-git-alt"></i>
          </a>
          <a href="#world">
            <i className="fa-solid fa-globe"></i>
          </a>
        </div>
        <div className="about_home">
          <div className="title">
            <h1>Ha Van Canh</h1>
            <i className="fa-solid fa-hand"></i>
          </div>
          <h3>----- Visual Developer</h3>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </span>
          <button>
            Hi <i className="fa-brands fa-hubspot"></i>
          </button>
        </div>
      </div>
      <div className="img_home">
        <img
          src="https://famashow.pt/wp-content/uploads/2023/09/GettyImages-1646858323-850x1099.jpg"
          alt=""
        />
      </div>
    </section>
  );
}

export default Home;
