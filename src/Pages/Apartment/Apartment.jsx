import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ApartMentCard from './ApartMentCard/ApartMentCard';

const Apartment = () => {

  // state
  const[cards,setcards]=useState([]);

  // fetching = loading data
  useEffect( ()=>{

    fetch('data.json')

    .then(res=> res.json())

    .then(data=> {
      setcards(data);
    })

  } ,[] )

  // filtering data by their type

  const apartment = cards.filter(item=> item.type ==='Apartment')
  const office = cards.filter(item=> item.type ==='Office')
  const industry = cards.filter(item=> item.type ==='Industry')

   
   



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


    {/*
    
    1. TabPanel e type onusare mapping.
    
    2. Card bosai dewa
    
    */}
    
    {/* apartment */}
    <TabPanel>
    
 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 my-5'>
 {
      apartment.map(item=><ApartMentCard
      
        key={item._id}
        item={item}
      
      
      ></ApartMentCard>)
    }
 </div>
     
    </TabPanel>


   
   {/* office */}
   
    <TabPanel>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 my-5'>
 {
      office.map(item=><ApartMentCard
      
        key={item._id}
        item={item}
      
      
      ></ApartMentCard>)
    }
 </div>
    </TabPanel>

  {/* industry */}
  <TabPanel>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 my-5'>
 {
      industry.map(item=><ApartMentCard
      
        key={item._id}
        item={item}
      
      
      ></ApartMentCard>)
    }
 </div>
  </TabPanel>



  </Tabs>


        </div>
    );
};

export default Apartment;