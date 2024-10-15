import Banner from "../Banner/Banner";
import Buildigs from "../Buildings/Buildigs";
import Coupons from "../Coupons/Coupons";
import Map from "../Map/Map";

import Marquees from "../Marquee/Marquees";




const Home = () => {
    return (
        <div>
          <Marquees></Marquees>
           <Banner></Banner>
           <Buildigs></Buildigs>
           <Coupons></Coupons>
           <Map></Map>
          
          
          
        </div>
    );
};

export default Home;