import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import { testimonialsData } from '../data/testimonialsData';

export const Testimonials = () => {
  return (
    <>
      <section className="Testimonials">
        <h2>What they’ve said</h2>

        <Swiper
          slidesPerView={1}
          loop={true}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {testimonialsData.map((data) => (
            <SwiperSlide key={data.title}>
              <div className="cardBody">
                <img src={data.img} alt={data.title} />
                <h3>{data.title}</h3>

                <div className="cardText">
                  <p>{data.details}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};
