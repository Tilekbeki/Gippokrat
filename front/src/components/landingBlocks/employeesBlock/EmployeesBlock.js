import "./EmployeesBlock.scss";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SlideImg from "../../../resources/files/slide-professional.png";


const EmployeesBlock = () => {
    return(
        <section className="employees"> 
            <div className="container">
                <h2 className="title title_h2">Наши специалисты</h2>
                <div className="employees-slider">
                     <Swiper
                                        // install Swiper modules
                                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                                        spaceBetween={50}
                                        slidesPerView={3}
                                        navigation
                                        pagination={{ clickable: true }}
                                        scrollbar={{ draggable: true }}
                                        onSwiper={(swiper) => console.log(swiper)}
                                        onSlideChange={() => console.log('slide change')}
                                    >
                                        <SwiperSlide><img src={SlideImg} alt="Картинка слайда" /></SwiperSlide>
                                        <SwiperSlide><img src={SlideImg} alt="Картинка слайда" /></SwiperSlide>
                                        <SwiperSlide><img src={SlideImg} alt="Картинка слайда" /></SwiperSlide>
                                        <SwiperSlide><img src={SlideImg} alt="Картинка слайда" /></SwiperSlide>
                                        ...
                                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default EmployeesBlock;