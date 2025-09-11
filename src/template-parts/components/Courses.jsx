import "../../styles/template-parts/components/Courses.scss";
import course_1 from "../../images/courses/course_1.jpg";
import course_2 from "../../images/courses/course_2.jpg";
import course_3 from "../../images/courses/course_3.jpg";
import course_4 from "../../images/courses/course_4.jpg";
import course_5 from "../../images/courses/course_5.jpg";
import course_6 from "../../images/courses/course_6.jpg";

const Courses = () => {
  return (
    <section className="courses">
      <div className="courses__container">
        <div className="courses__row">
          <div className="courses__text">
            <span className="label">Ready to learn?</span>
            <h2>Featured Courses</h2>
          </div>
          <button className="button button__white">View all courses</button>
        </div>
        <div className="courses__items">
          <div className="courses__item">
            <img
              src={course_1}
              alt="Course creator"
              className="courses__image"
              draggable="false"
            />
            <div className="courses__info">
              <span className="courses__label courses__label--green">
                Marketing
              </span>
              <p className="courses__title">
                The Ultimate Google Ads Training Course
              </p>
              <div className="courses__price">
                <span>$100</span> | by Jerome Bell
              </div>
            </div>
          </div>

          <div className="courses__item">
            <img
              src={course_2}
              alt="Course creator"
              className="courses__image"
              draggable="false"
            />
            <div className="courses__info">
              <span className="courses__label courses__label--green">
                Marketing
              </span>
              <p className="courses__title">
                The Ultimate Google Ads Training Course
              </p>
              <div className="courses__price">
                <span>$100</span> | by Jerome Bell
              </div>
            </div>
          </div>

          <div className="courses__item">
            <img
              src={course_3}
              alt="Course creator"
              className="courses__image"
              draggable="false"
            />
            <div className="courses__info">
              <span className="courses__label courses__label--green">
                Marketing
              </span>
              <p className="courses__title">
                The Ultimate Google Ads Training Course
              </p>
              <div className="courses__price">
                <span>$100</span> | by Jerome Bell
              </div>
            </div>
          </div>

          <div className="courses__item">
            <img
              src={course_4}
              alt="Course creator"
              className="courses__image"
              draggable="false"
            />
            <div className="courses__info">
              <span className="courses__label courses__label--green">
                Marketing
              </span>
              <p className="courses__title">
                The Ultimate Google Ads Training Course
              </p>
              <div className="courses__price">
                <span>$100</span> | by Jerome Bell
              </div>
            </div>
          </div>

          <div className="courses__item">
            <img
              src={course_5}
              alt="Course creator"
              className="courses__image"
              draggable="false"
            />
            <div className="courses__info">
              <span className="courses__label courses__label--green">
                Marketing
              </span>
              <p className="courses__title">
                The Ultimate Google Ads Training Course
              </p>
              <div className="courses__price">
                <span>$100</span> | by Jerome Bell
              </div>
            </div>
          </div>

          <div className="courses__item">
            <img
              src={course_6}
              alt="Course creator"
              className="courses__image"
              draggable="false"
            />
            <div className="courses__info">
              <span className="courses__label courses__label--green">
                Marketing
              </span>
              <p className="courses__title">
                The Ultimate Google Ads Training Course
              </p>
              <div className="courses__price">
                <span>$100</span> | by Jerome Bell
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Courses;
