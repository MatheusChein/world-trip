import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Image, Box, Flex, Text } from '@chakra-ui/react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './swiperCaroussel.module.scss'

import { SwiperSlideContent } from './SwiperSlideContent';

export function SwiperCaroussel() {
  function handleOnSwiper(swiper) {
    console.log(swiper);
  }

  return (
    <Box
      p='0rem 15rem 3rem'
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true}}
        scrollbar={{ draggable: true }}
        onSwiper={handleOnSwiper}
      >
        <SwiperSlide>
          <SwiperSlideContent handleOnSwiper={handleOnSwiper}/>
        </SwiperSlide>

        <SwiperSlide>
          <SwiperSlideContent handleOnSwiper={handleOnSwiper}/>
        </SwiperSlide>

        <SwiperSlide>
          <SwiperSlideContent handleOnSwiper={handleOnSwiper}/>
        </SwiperSlide>
      </Swiper>

    </Box>

  )
}