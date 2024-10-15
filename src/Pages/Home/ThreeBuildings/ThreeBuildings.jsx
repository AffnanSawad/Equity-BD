import React from 'react';

const ThreeBuildings = () => {
    return (
        <div>

            <div className="text-4xl font-bold text-center text-red-600 my-10 underline">

         <h1> Some Glimpsion Of Our Works </h1>

            </div>
            <div className="carousel carousel-end rounded-box flex justify-center mb-5">
  
  <div className="carousel-item">
    <img
      src="https://i.ibb.co.com/nLw7WG3/images-7.jpg"
      alt="Drink" />
  </div>
  <div className="carousel-item">
    <img
      src="https://i.ibb.co.com/qCnhMZV/images-3.jpg"
      alt="Drink" />
  </div>
  <div className="carousel-item">
    <img
      src="https://i.ibb.co.com/SmT59fB/images-6.jpg"
      alt="Drink" />
  </div>

</div>

<div className="diff aspect-[16/9]">
  <div className="diff-item-1">
    <img alt="daisy" src="https://i.ibb.co.com/3pZw7js/modern-apartment-with-comfortable-sofa-decor-generated-by-ai.jpg" />
  </div>
  <div className="diff-item-2">
    <img
      alt="daisy" className='h-[300px]'
      src="https://i.ibb.co.com/1rFng2H/image3-6-768x1365-1.webp" />
  </div>
  <div className="diff-resizer"></div>
</div>


        </div>
    );
};

export default ThreeBuildings;