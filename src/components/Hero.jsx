import "./Hero.css";

// ✅ Change these imports to match your real file names
import img1 from "../assets/sample1.jpg";
import img2 from "../assets/sample2.jpg";
import img3 from "../assets/sample3.jpg";
import img4 from "../assets/sample4.jpg";
import img5 from "../assets/sample5.jpg";

export default function Hero() {
  const images = [img1, img2, img3, img4, img5];

  return (
    <section className="hero">
      <div className="heroInner">
        <div className="heroText">
          <h1>Building Strong Foundations</h1>
          <p>
            GRAC-TA Builders delivers quality construction services with
            reliability, excellence, and integrity.
          </p>

          <button className="cta">Book Now</button>
        </div>

        {/* ✅ Moving horizontal slider */}
        <div className="carouselWrap" aria-label="Project previews">
          <div className="fadeLeft" />
          <div className="fadeRight" />

          <div className="carouselTrack">
            {/* Duplicate the list for seamless looping */}
            {[...images, ...images].map((src, i) => (
              <div className="carouselCard" key={i}>
                <img src={src} alt={`preview ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}