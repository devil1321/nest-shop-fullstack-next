import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import blogs from '@/public/assets/blogs.json'
import * as Interfaces from '@/app/controller/interfaces'
import { BlogDetailsComponents } from '@/app/components/blog-details';
import FullSidebar from '@/app/components/global/sidebar/full-sidebar.component';
import "../../app/globals.css";
import Banner from '@/app/components/global/banner.component';

const BlogDetails:React.FC<{ blog:Interfaces.Blog }> = ({ blog }) => {
  return (
  <div className='blog-details'>
    <div className="blog-details-inner md:flex md:justify-between md:items-start gap-3">
      <div className='md:w-3/4 lg:w-4/5'>
        <BlogDetailsComponents.BlogImage 
          img={blog.img}
          title={blog.title}
          views={blog.views}
          />
        <BlogDetailsComponents.Article />
        <BlogDetailsComponents.Author />
        <BlogDetailsComponents.Form />
        <BlogDetailsComponents.CommentsComponents.Comments />
      </div>
      <div className='md:w-1/4 lg:w-1/5'>
        <FullSidebar />
      </div>
    </div>
    <Banner
        img="/assets/about/about-footer.png" 
        heading="Stay home & get your daily needs from our shop" 
        paragraph="Start You'r Daily Shopping with Nest Mart" 
      />
  </div>
  );
};

export default BlogDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  try{
    const blogs = await axios.get('http://localhost:3000/assets/blogs.json');
    const data: Interfaces.Blog[] = await blogs.data;
    
    const paths = data.map((b: { id:number }) => ({
      params: { id: b.id.toString() },
    }));
    return { paths, fallback: false };
  }catch(err){
    console.log(err)
    return { paths:[],fallback:false}
  }

};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try{
    const blog = blogs.find((b:Interfaces.Blog) => b.id.toString() === params?.id?.toString())
    return {
      props: { blog }
    }
  }catch(err){
    console.log(err)
    return {
      props:{}
    }
  }
};
