import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/template-parts/components/Team.scss";
// npm install swiper

const Team = () => {
  return (
    <section className="team">
      <div className="team__container">
        <div className="team__head">
          <div>
            <span className="label">Best tutors are all here</span>
            <h2>Meet our team</h2>
          </div>

          <div className="team__buttons">
            <div className="team__button team__button--prev">prev</div>
            <div className="team__button team__button--next">next</div>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          slidesPerGroup={1}
          spaceBetween={24}
          loop={true}
          speed={600}
          navigation={{
            nextEl: ".team__button--next",
            prevEl: ".team__button--prev",
          }}
          breakpoints={{
            1200: { slidesPerView: 4 },
            992: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
          className="team__slider"
        >
          <SwiperSlide>Картка 1</SwiperSlide>
          <SwiperSlide>Картка 2</SwiperSlide>
          <SwiperSlide>Картка 3</SwiperSlide>
          <SwiperSlide>Картка 4</SwiperSlide>
          <SwiperSlide>Картка 5</SwiperSlide>
          <SwiperSlide>Картка 6</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
