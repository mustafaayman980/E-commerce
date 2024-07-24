import image1 from "../../../src/assets/image/Rectangle 5.png";
import image2 from "../../../src/assets/image/Rectangle 5 (1).png";

import image3 from "../../../src/assets/image/Frame 616.png";
import image4 from "../../../src/assets/image/image 2.png";
import image5 from "../../../src/assets/image/2.png";

import "./slider.css";

function Slider() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide container">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image1} className=" w-100" alt="..." />
          <div
            className="carousel-caption"
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              justifyContent: "space-between",
              textAlign: "left",
            }}
          >
            <div className="slidInfo">
              <img src={image3} alt="..." />
            </div>
            <div className="text">
              <p>Best Deal Online on smart watches</p>
              <h5>SMART WEARABLE.</h5>
              <p>UP to 80% OFF</p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={image1} className=" w-100" alt="..." />
          <div
            className="carousel-caption"
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              justifyContent: "space-between",
              textAlign: "left",
            }}
          >
            <div className="slidInfo">
              <img src={image4} alt="..." />
            </div>
            <div className="text">
              <p>Best Deal Online on smart watches</p>
              <h5>SMART WEARABLE.</h5>
              <p>UP to 80% OFF</p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={image1} className=" w-100" alt="..." />
          <div
            className="carousel-caption"
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              justifyContent: "space-between",
              textAlign: "left",
            }}
          >
            <div className="slidInfo">
              <img src={image5} alt="..." />
            </div>
            <div className="text">
              <p>Best Deal Online on smart watches</p>
              <h5>SMART WEARABLE.</h5>
              <p>UP to 80% OFF</p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default Slider;
