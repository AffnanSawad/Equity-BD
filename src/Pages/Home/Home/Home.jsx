import Accordian from "../Accordian/Accordian";
import Banner from "../Banner/Banner";
import Buildigs from "../Buildings/Buildigs";
import Coupons from "../Coupons/Coupons";
import Map from "../Map/Map";

import Marquees from "../Marquee/Marquees";
import ThreeBuildings from "../ThreeBuildings/ThreeBuildings";




const Home = () => {
    return (
        <div>
          <Marquees></Marquees>
           <Banner></Banner>
           <Buildigs></Buildigs>
           <Coupons></Coupons>
           <Map></Map>
           <ThreeBuildings></ThreeBuildings>
           <Accordian></Accordian>
          
          
          
        </div>
    );
};

export default Home;