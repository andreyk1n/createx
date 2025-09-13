import { useState } from "react";
import "../../styles/template-parts/components/Tabs.scss";
import image from "../../images/tabs/image.svg";

const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    {
      label: <>Experienced Tutors</>,
      content: (
        <>
          <div className="tabs__text">
            <h3>Only practicing tutors</h3>
            <p>
              Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames
              dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis
              mollis augue. Nunc, sodales tortor sit diam mi amet massa.
              Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id
              dignissim massa ut amet. Amet enim, nisi tempus vehicula.
            </p>
          </div>
          <img src={image} alt="Tabs image" className="tabs__image" />
        </>
      ),
    },
    {
      label: <>Feedback & Support</>,
      content: (
        <>
          <div className="tabs__text">
            <h3>2. Only practicing tutors</h3>
            <p>
              Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames
              dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis
              mollis augue. Nunc, sodales tortor sit diam mi amet massa.
              Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id
              dignissim massa ut amet. Amet enim, nisi tempus vehicula.
            </p>
          </div>
          <img src={image} alt="Tabs image" className="tabs__image" />
        </>
      ),
    },
    {
      label: <>24/7 Online Library</>,
      content: (
        <>
          <div className="tabs__text">
            <h3>3. Only practicing tutors</h3>
            <p>
              Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames
              dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis
              mollis augue. Nunc, sodales tortor sit diam mi amet massa.
              Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id
              dignissim massa ut amet. Amet enim, nisi tempus vehicula.
            </p>
          </div>
          <img src={image} alt="Tabs image" className="tabs__image" />
        </>
      ),
    },
    {
      label: <>Community</>,
      content: (
        <>
          <div className="tabs__text">
            <h3>4. Only practicing tutors</h3>
            <p>
              Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames
              dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis
              mollis augue. Nunc, sodales tortor sit diam mi amet massa.
              Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id
              dignissim massa ut amet. Amet enim, nisi tempus vehicula.
            </p>
          </div>
          <img src={image} alt="Tabs image" className="tabs__image" />
        </>
      ),
    },
  ];

  return (
    <section className="tabs">
      <div className="tabs__container">
        <span className="label">Our benefits</span>
        <h2>That’s how we do it</h2>
        <div className="tabs__buttons">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tabs__button ${
                activeIndex === index ? "tabs__button--active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tabs__content ${
              activeIndex === index ? "tabs__content--active" : ""
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tabs;
