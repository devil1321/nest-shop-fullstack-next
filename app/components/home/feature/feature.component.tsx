import React from 'react'
import FeatureItem from './item.component'

const Feature = () => {
  return (
    <div className='home-feature flex justify-between items-start gap-3 my-12'>
      <FeatureItem img="/assets/home/category-feature-1.png" title="Everyday Fresh & Clean with Our Products" />
      <FeatureItem img="/assets/home/category-feature-2.png" title="Make your Breakfast Healthy and Easy" />
      <FeatureItem img="/assets/home/category-feature-3.png" title="The best Organic Products Online" />
    </div>
  )
}

export default Feature
