import "../../styles/template-parts/components/Certificate.scss";
import image from "../../images/certificate/image.jpg";
import inner1 from "../../images/certificate/inner1.svg";
import inner2 from "../../images/certificate/inner2.svg";
import inner3 from "../../images/certificate/inner3.svg";

const Certificate = () => {
  return (
    <div className="certificate">
      <div className="certificate__container">
        <div className="certificate__text">
          <span className="label">Createx Certificate</span>
          <h2>Your expertise will be confirmed</h2>
          <p>We are accredited by international professional organizations and institutes:</p>
          <div className="certificate__inners">
            <img src={inner1} alt="Institues" className="certificate__inner" />
            <img src={inner2} alt="Institues" className="certificate__inner" />
            <img src={inner3} alt="Institues" className="certificate__inner" />
          </div>
        </div>
        <img src={image} alt="Certificate" className="certificate__image" draggable="false" />
      </div>
    </div>
  );
};

export default Certificate;
