import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperProps } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SimpleSwiperProps extends SwiperProps {
  children: React.ReactNode;
  className?: string;
};

const SimpleSwiper: React.FC<SimpleSwiperProps> = ({ children, className, ...rest }) => {
  return (
    <Swiper
      navigation
      pagination={{ type: 'bullets', clickable: true }}
      autoplay={true}
      loop={true}
      className={className}
      modules={[Autoplay, Navigation, Pagination]}
      {...rest}
    >
      {children}
    </Swiper>
  );
};

export default SimpleSwiper;
