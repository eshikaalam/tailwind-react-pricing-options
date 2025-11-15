import { CircleCheckBig } from 'lucide-react'
import React from 'react'

function PricingFeatures({feature}) {
  return (
    <div>
      <p className='flex mt-4'><CircleCheckBig className='mr-2'></CircleCheckBig>{feature}</p>
    </div>
  )
}

export default PricingFeatures