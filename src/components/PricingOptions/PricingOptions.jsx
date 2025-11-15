
import React, { use } from 'react';

import PricingCard from '../PricingCard/PricingCard';
import PricingCardDaisyUi from '../PricingCard/PricingCardDaisyUi';

function PricingOptions({pricingPromise}) {
  const PricingData = use(pricingPromise);
  return (
    <div>
        <h2 className='text-2xl text-black'>Get our Membership</h2>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
          {
            // PricingData.map(pricing => <PricingCard
            // key={pricing.id}
            // pricing={pricing}
            // >
            // </PricingCard>)
          }
           {/* same card using daisy UI */}
          {
            PricingData.map(pricing => <PricingCardDaisyUi 
            key={pricing.id}
            pricing={pricing}
            ></PricingCardDaisyUi>)
          }
        </div>
    </div>
  )
}

export default PricingOptions