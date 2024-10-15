import Banner from "../Banner/Banner";
import Buildigs from "../Buildings/Buildigs";
import Coupons from "../Coupons/Coupons";
import Marquees from "../Marquee/Marquees";
import Marquee from "../Marquee/Marquees";


const Home = () => {
    return (
        <div>
          <Marquees></Marquees>
           <Banner></Banner>
           <Buildigs></Buildigs>
           <Coupons></Coupons>
          
        </div>
    );
};

export default Home;