import "../CSS Files/CarasoleMain.css";

function Slider() {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src={"../images/Slider101.jpg"}
            className="d-block w-100 roundImage"
            alt="Slider1"
          />
          <div className="carousel-caption d-none d-md-block">
            <div className="headingOne"></div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src={"../../images/Portfolio13.jpg"}
            className="d-block w-100 roundImage"
            alt="Slider2"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="headingTitle">We are Providing Security Services</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={"../../images/Portfolio21.jpg"}
            className="d-block w-100 roundImage"
            alt="Slider3"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="headingTitle">We are Providing Plumber Services</h5>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
