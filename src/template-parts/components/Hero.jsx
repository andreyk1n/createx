import "../../styles/template-parts/components/Hero.scss";
import hero from "../../images/hero/hero.svg";
import play from "../../images/hero/play.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__row">
          <div className="hero__text">
            <div className="hero__play">
              <button>
                <img src={play} alt="Play button" /> Play showreel
              </button>
            </div>
            <h1>Enjoy studying with Createx Online Courses</h1>
            <div className="hero__buttons">
              <button className="button button__white">About us</button>
              <button className="button button__orange">Explore courses</button>
            </div>
          </div>
          <img src={hero} alt="Hero image" className="hero__image" draggable="false" />
        </div>
        <div className="hero__items">
          <div className="hero__item">
            <span>1200</span> Students graduated
          </div>
          <div className="circle"></div>
          <div className="hero__item">
            <span>84</span> Completed courses
          </div>
          <div className="circle"></div>
          <div className="hero__item">
            <span>16</span> Qualified tutors
          </div>
          <div className="circle"></div>
          <div className="hero__item">
            <span>5</span> Years of experience
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
