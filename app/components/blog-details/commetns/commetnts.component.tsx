import React from 'react'
import Comment from './comment.component'

const Comments = () => {
  return (
    <div className='blog-details-comments'>
      <h2 className="text-3xl font-bold my-12">Comments</h2>
      <Comment 
        className='my-12'
        img="/assets/blog-details/profile-1.png"
        date='3 April 2023'
        nickname='Anna'
        content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
        suscipit exercitationem accusantium obcaecati quos voluptate nesciunt
        facilis itaque modi commodi dignissimos sequi repudiandae minus ab
        deleniti totam officia id incidunt? '
      />
      <Comment 
        className='my-12 md:ml-12'
        img="/assets/blog-details/profile-2.png"
        date='14 April 2023'
        nickname='Brenna'
        content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
        suscipit exercitationem accusantium obcaecati quos voluptate nesciunt
        facilis itaque modi commodi dignissimos sequi repudiandae minus ab
        deleniti totam officia id incidunt? '
      />
      <Comment 
        className='my-12'
        img="/assets/blog-details/profile-3.png"
        date='23 April 2023'
        nickname='Gemma'
        content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
        suscipit exercitationem accusantium obcaecati quos voluptate nesciunt
        facilis itaque modi commodi dignissimos sequi repudiandae minus ab
        deleniti totam officia id incidunt? '
      />
    </div>
  )
}

export default Comments
