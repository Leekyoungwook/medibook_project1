// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { symptom } from "../constants/data";
import previc from "../assets/previc.png"
import nextic from "../assets/nextic.png"


import "swiper/css/navigation";
import "swiper/css/pagination";


// Import Swiper styles
import "swiper/css";
import { useRef } from "react";
import { Link } from "react-router-dom";


export default () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  console.log(prevRef.current);
  return (
    <div className="box-wrapper w-full flex justify-between items-center p-4 bg-white border">
      <div className="text-center w-[20%]">
        <h3 className="text-xl font-semibold">
          자주 나타나는
          <br />
          증상
        </h3>
      </div>
      <div className="relative w-[80%]">
        <div className="flex gap-3 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 absolute justify-between w-full">
          <button className="text-xl" ref={prevRef}>
            <img src={previc} alt="" className="w-5 h-5" />
          </button>
          <button className="text-xl" ref={nextRef}>
            <img src={nextic} alt="" className="w-5 h-5" />
          </button>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={15}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {
            symptom.map((symptom, index) => (
              <SwiperSlide key={index} className="rounded-lg overflow-hidden shadow-inner-lg">
                <Link to={symptom.to}>
                  <div className="absolute opacity-30 overlay w-full h-full bg-white z-10 left-0 top-0"></div>
                  <h5 className="absolute w-full text-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-white text-xl font-semibold drop-shadow-md">{symptom.text}</h5>
                  <img src={symptom.image} alt="symptom" className="overflow-hidden"/>
                </Link>
              </SwiperSlide>
            ))
          }
          {/* <SwiperSlide>{symptom.image}</SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

