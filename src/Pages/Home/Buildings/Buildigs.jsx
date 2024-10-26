

const Buildigs = () => {
    return (
        <div className="mt-4 lg:mt-4">
        
        <div>
            <h1 className="text-4xl font-bold text-red-500 text-center">What We Build?</h1>
            <p className="text-xl font-bold text-center">
                We typically builds residential homes, commercial office spaces, and industrial warehouses.
            </p>
        </div>

    <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3  gap-2 mr-20 ml-3   my-10 ">

    
            {/* card 1 */}
            <div className="card card-compact bg-base-100 w-96 shadow-xl  mb-4 lg:ml-20">
  <figure>
    <img
      src="https://i.ibb.co.com/7pWJcnw/Detached-singlefamily-home-in-a-suburban-neighborhood-810x540.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-xl font-bold">Residential Homes</h2>
    <p className="font-semibold">Residential homes come in various forms, including single-family homes, apartments, and townhouses. **Single-family homes** are standalone houses with Residential homes include single-family homes, which offer privacy and space, typically priced between $150,000 and $500,000; apartments, ideal for urban living, generally ranging from $100,000 to $300,000; and townhouses, which share walls with neighbors and cost between $200,000 and $400,000. Prices vary based on location and amenities. </p>
   
   
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>


{/* card 2 */}
<div className="card card-compact bg-base-100 w-96 shadow-xl mb-5 lg:ml-20">
  <figure>
    <img
      src="https://i.ibb.co.com/5k4sfdB/urban-architecture-office-building-business-600nw-1339962440.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-xl font-bold">Commercial Office </h2>
    <p className="font-semibold">Commercial office spaces include Class A buildings, which are modern and prime-located, typically priced at $30 to $60 per square foot annually; Class B buildings, which are functional and cost between $20 and $30 per square foot annually; and coworking spaces that offer flexibility for freelancers and small businesses, ranging from $200 to $800 per month.</p>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>


{/* card 3 */}
<div className="card card-compact bg-base-100 w-96 shadow-xl mb-5 lg:ml-20">
  <figure>
    <img
      src="https://i.ibb.co.com/ZzKxRzv/industrial-park-factory-building-warehouse.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-xl font-bold"> Industrial Warehouses</h2>
    <p className="font-semibold">Industrial warehouses are large spaces designed for storage, manufacturing, and distribution. They include **bulk warehouses**, ideal for storing large quantities of goods, typically priced at $5 to $10 per square foot annually; **flex warehouses**, which combine warehouse and office functions, costing between $8 and $15 per square foot annually; and **refrigerated warehouses**, specialized for perishable goods, priced at $10 to $20 per square foot annually. Prices vary based on location, size, and specific features.</p>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  */}
  </div> 
</div>


    </div>


        </div>
    );
};

export default Buildigs;