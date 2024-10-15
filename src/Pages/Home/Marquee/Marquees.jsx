import Marquee from "react-fast-marquee";

const Marquees = () => {
    return (
        <div className="flex mx-2 my-2">
            <button className="btn btn-error text-white">Update</button>
       <Marquee className="font-bold ml-10">
       *Explore our latest property listings with advanced search and map features today!

       <div className="ml-10">*New Office Time is <span className="text-red-600"> 10.00 am to 5.00 pm.</span></div>

       <div className="ml-10">
       *New internal communication platform launched—stay connected with your team effortlessly!
       </div>

       
</Marquee> 
        </div>
    );
};

export default Marquees;