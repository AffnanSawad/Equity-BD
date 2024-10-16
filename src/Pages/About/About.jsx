

const About = () => {
    return (
        <div>
           <div className="grid grid-cols-1  gap-2 lg:flex mt-10 -ml-8">
            <img src="https://i.ibb.co.com/sJg30Hk/523.png" alt="" />
            
            <img  src="https://i.ibb.co.com/LgDX8kq/154.jpg" alt="" />
            
            </div> 


            <div>
                <h1 className="text-4xl font-bold text-red-600 text-center underline my-10">About Us</h1>

                <p className="font-semibold text-zinc-900 mx-10 my-10">Welcome to Equity Bd, your trusted partner in real estate. Established with a mission to simplify the property buying, selling, and leasing process, we provide a seamless experience for our clients across residential, commercial, and industrial real estate sectors. Whether you’re looking to purchase your dream home, lease office space, or invest in a new property, our platform offers a comprehensive range of listings and expert services to meet all your real estate needs.

At Equity Bd, we pride ourselves on transparency, integrity, and customer satisfaction. Our team of experienced professionals is dedicated to guiding you through every step of the real estate process, from property search to final transaction. We understand that every client has unique needs, and we tailor our services to ensure a personalized and stress-free experience.

Explore our extensive listings, connect with trusted agents, and take advantage of our market insights to make informed decisions. We are here to turn your real estate dreams into reality!</p>
            </div>


        <div className="grid grid-cols-1  lg:flex gap-5">
           
           {/* picture */}
            <img src="https://i.ibb.co.com/JzmT0Vf/define-value.webp" alt="" />

            {/* table */}
           <div className="grid grid-cols-1 my-10 lg:flex justify-center align-center ">
            
        <p className="font-semibold ml-10 lg:mt-36"> 

        <span className="text-red-600">Transparency:</span> Clear and honest communication in every interaction. <br /> <br /> 
<span className="text-red-700">Customer Satisfaction:</span> We prioritize your needs and aim for 100% client satisfaction. <br /> <br />
<span className="text-red-700">Integrity:</span> We are committed to ethical practices and professional excellence.


        </p>


            
            </div> 



        
    
        </div>

    
        

        {/* ? */}

        <div className="grid grid-cols-1 ml-10 my-10 lg:flex gap-5">
            
        
           

            {/* table */}
           <div className="block my-10 lg:flex justify-center align-center ">


         
            
        <p className="font-semibold ml-10 lg:mt-36"> 

        <h1 className="text-4xl font-bold text-center text-red-600 underline mb-10">Why Choose Us?</h1>

        A wide variety of property listings across different sectors. <br /> <br /> 
 Personalized services tailored to your unique requirements. <br /> <br />
 Easy-to-use platform for property search, listing, and management.


        </p>


            
            </div> 

            {/* picture */}
            <img className="" src="https://i.ibb.co.com/vsK72PT/istockphoto-1344687455-612x612.jpg" alt="" />



        
    
        </div>

     


        </div>
    );
};

export default About;