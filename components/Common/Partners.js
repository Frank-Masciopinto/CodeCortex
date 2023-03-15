import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const Partners = () => {
  return (
    <>
      <div className="partner-area ptb-100">
        <div className="container">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper partner-slides"
          >
            <SwiperSlide>
              <div className="partners-card">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="/images/partners/Adobe-Solution-Partner-Program.png" alt="partner" />
                </a>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="partners-card">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="/images/partners/Amazon-Web-Services-Partner.png" alt="partner" />
                </a>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="partners-card">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="/images/partners/Google-Developer-Certified-Agency.png" alt="partner" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partners-card">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="/images/partners/Microsoft-Certified-Consulting-Partner.png" alt="partner" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide style={{alignSelf: "center"}}>
              <div className="partners-card">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="/images/partners/red.svg" alt="partner" style={{width: "134px"}}/>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide style={{alignSelf: "center"}}>
              <div className="partners-card">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="/images/partners/wallmart.jpg" alt="partner" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide style={{alignSelf: "center"}}>
              <div className="partners-card" >
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="/images/partners/hilton.svg" alt="partner" style={{width: "134px"}}/>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partners;
