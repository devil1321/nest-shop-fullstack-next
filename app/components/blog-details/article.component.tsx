import React from 'react'
import Image from 'next/image'

const Article = () => {
  return (
    <div className='blog-details-article'>
      <p className="text-sm my-4">Helping everyone live happier, healthier lives at home through their kitchen. Kitchnis a daily food magazine on the Web celebrating life in the kitchen through home cooking and kitchen intelligence.</p>
      <p className="text-sm my-4">We've reviewed and ranked all of the best smartwatches on the market right now, and we've made a definitive list of the top 10 devices you can buy today. One of the 10 picks below may just be your perfect next smartwatch.</p>
      <p className="text-sm my-4">Those top-end wearables span from the Apple Watch to Fitbits, Garmin watches to Tizen-sporting Samsung watches. here's also Wear OS which is Google's own wearable operating system in the vein of Apple's watchOS - you’ll see it show up in a lot of these devices.</p>
      <h3 className="text-sm my-4 font-bold">Lorem ipsum dolor sit amet cons</h3>
      <p className="text-sm my-4">Throughout our review process, we look at the design, features, battery life, spec, price and more for each smartwatch, rank it against the competition and enter it into the list you'll find below.</p>
      <Image src="/assets/blog-details/blog-details-inner-image.png" alt='blog-details-inner-image' width={1200} height={500} />
      <p className="text-sm my-4">Tortor, lobortis semper viverra ac, molestie tortor laoreet amet euismod et diam quis aliquam consequat porttitor integer a nisl, in faucibus nunc et aenean turpis dui dignissim nec scelerisque ullamcorper eu neque, augue quam quis lacus pretium eros est amet turpis nunc in turpis massa et eget facilisis ante molestie penatibus dolor volutpat, porta pellentesque scelerisque at ornare dui tincidunt cras feugiat tempor lectus</p>
      <p className="w-1/2 my-4 text-sm mx-auto text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero optio sit consectetur id totam veritatis neque ipsum, magnam recusandae amet nesciunt unde. Ad voluptatem dolores quam asperiores harum optio autem illum, unde dolor aspernatur sit dolorum nulla debitis placeat maxime amet neque temporibus deleniti sequi quos, a cupiditate. Assumenda, fuga.</p>
      <p className="text-sm my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id enim, libero sit. Est donec lobortis cursus amet, cras elementum libero convallis feugiat. Nulla faucibus facilisi tincidunt a arcu, sem donec sed sed. Tincidunt morbi scelerisque lectus non. At leo mauris, vel augue. Facilisi diam consequat amet, commodo lorem nisl, odio malesuada cras. Tempus lectus sed libero viverra ut. Facilisi rhoncus elit sit sit.</p>
      <div className="blog-details-article-footer mt-5 flex justify-between items-center flex-wrap md:flex-nowrap">
        <div className="blog-details-buttons flex gap-3">
          <button className="px-5 py-2 bg-green-500 rounded-md text-white font-bold text-sm">deer</button>
          <button className="px-5 py-2 bg-green-500 rounded-md text-white font-bold text-sm">nature</button>
          <button className="px-5 py-2 bg-green-500 rounded-md text-white font-bold text-sm">conserve</button>
        </div>
        <div className="blog-details-icons mt-5 md:mt-0 flex gap-5">
          <Image src="/assets/blog-details/facebook.png" alt='icon' width={20} height={20} />
          <Image src="/assets/blog-details/twitter.png" alt='icon' width={20} height={20} />
          <Image src="/assets/blog-details/pinterest.png" alt='icon' width={20} height={20} />
          <Image src="/assets/blog-details/instagram.png" alt='icon' width={20} height={20} />
        </div>
      </div>
    </div>
  )
}

export default Article
