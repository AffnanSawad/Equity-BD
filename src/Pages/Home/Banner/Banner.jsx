// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <Swiper  navigation={true} modules={[Navigation]} className="mySwiper h-[600px] mb-5">

        <SwiperSlide> <img src="https://i.ibb.co.com/hXw7LmX/urban-traffic-with-cityscape.jpg" alt="" /></SwiperSlide> 
       
        <SwiperSlide> <img src="https://i.ibb.co.com/ZWLJmWm/new-buildings-with-green-areas.jpg" alt="" /> </SwiperSlide>

        <SwiperSlide> <img src="https://i.ibb.co.com/ySp4m1z/modern-tall-glass-buildings-downtown.jpg" alt="" /> </SwiperSlide>
     
       
      </Swiper>
    );
};

export default Banner;