import React from 'react'
import PricingFeatures from './PricingFeatures';

function PricingCard({pricing}) {
    const {name, price, features} = pricing;
  return (
    <div  className='border-2 bg-blue-200 rounded-2xl p-4 m-4'>
       {/* card header */} 
     <div>
        <h1 className='text-5xl'>{name}</h1>
       <h4 className='text-3xl'>{price}</h4> 
     </div> 
     {/* card body */}
    <div className='bg-blue-50 rounded-2xl p-2 mt-5 border-1'>
        {
            features.map((feature, index) => <PricingFeatures 
            feature={feature}
            key = {index}
            ></PricingFeatures>)
        }
    </div>
    <button className="btn btn-wide mt-5 rounded-2xl w-full border-amber-600 bg-amber-100">Subscribe</button>
    </div>
  )
}

export default PricingCard