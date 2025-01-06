import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slider1 from "../../assets/home/slide1.jpg";
import slider2 from "../../assets/home/slide2.jpg";
import slider3 from "../../assets/home/slide3.jpg";
import slider4 from "../../assets/home/slide4.jpg";
import slider5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitle";

const Category = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"From 11:00 AM to 10.00 PM"}
        heading={"Order Online"}
      ></SectionTitle>
      <div className="my-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          centeredSlides={false}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slider1} alt="salad" />
            <h3 className="text-4xl uppercase -mt-16 mb-20 text-center text-slate-200">
              Salad
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="pizza" />
            <h3 className="text-4xl uppercase -mt-16 mb-20 text-center text-slate-200">
              Pizza
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} alt="soup" />
            <h3 className="text-4xl uppercase -mt-16 mb-20 text-center text-slate-200">
              Soup
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider4} alt="desert" />
            <h3 className="text-4xl uppercase -mt-16 mb-20 text-center text-slate-200">
              Desert
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider5} alt="salads" />
            <h3 className="text-4xl uppercase -mt-16 mb-20 text-center text-slate-200">
              Salads
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
