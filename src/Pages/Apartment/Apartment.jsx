import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Apartment = () => {

   
   



    return (
        <div>
            {/* swiper */}
         
         <div >
        <img className="h-[500px] w-[1800px] " src="https://i.ibb.co.com/ySp4m1z/modern-tall-glass-buildings-downtown.jpg" alt="" />
         </div>

         {/* tabs */}
         <Tabs>
    <TabList className={'font-semibold'}> 
      <Tab>Apartments</Tab>
      <Tab>Offices</Tab>
      <Tab>Industrial Warehouses</Tab>
    </TabList>

    <TabPanel>
     
     
      <h2>Any content 1</h2>
    </TabPanel>



    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>


        </div>
    );
};

export default Apartment;