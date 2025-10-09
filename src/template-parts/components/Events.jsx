import "../../styles/template-parts/components/Events.scss";
import image from "../../images/events/decor.svg";
import image1 from "../../images/events/decor1.svg";

const Events = () => {
  return (
    <div className="events">
      <div className="events__container">
        <span className="label">Our Events</span>
        <h2>Lectures & workshops</h2>
        <div className="events__items">
            <div className="events__item">
                <div className="events__date">
                    05
                    <div>
                        <b>August</b>
                        11:00 – 14:00
                    </div>
                </div>
                <div className="events__text">
                    <p>Formation of the organizational structure of the company in the face of uncertainty.</p>
                    <span>Onine master-class</span>
                </div>
                <button className="events__button button button__white">View more</button>
            </div>

            <div className="events__item">
                <div className="events__date">
                    05
                    <div>
                        <b>August</b>
                        11:00 – 14:00
                    </div>
                </div>
                <div className="events__text">
                    <p>Formation of the organizational structure of the company in the face of uncertainty.</p>
                    <span>Onine master-class</span>
                </div>
                <button className="events__button button button__white">View more</button>
            </div>

            <div className="events__item">
                <div className="events__date">
                    05
                    <div>
                        <b>August</b>
                        11:00 – 14:00
                    </div>
                </div>
                <div className="events__text">
                    <p>Formation of the organizational structure of the company in the face of uncertainty.</p>
                    <span>Onine master-class</span>
                </div>
                <button className="events__button button button__white">View more</button>
            </div>
        </div>

        <div className="events__bottom">
            <p>Do you want more?</p>
            <div className="button button__orange">Explore all events</div>
        </div>
      </div>
      <img src={image} alt="Decorative image" className="events__decor events__decor--1" draggable="false" />
      <img src={image1} alt="Decorative image" className="events__decor events__decor--2" draggable="false" />
    </div>
  );
};

export default Events;
