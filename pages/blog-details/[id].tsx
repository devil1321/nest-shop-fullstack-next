// /app/blog-details/[id].tsx

import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import blogs from '@/public/assets/blogs.json'
import * as Interfaces from '@/app/controller/interfaces'
import { BlogDetailsComponents } from '@/app/components/blog-details';


const BlogDetails:React.FC<{ blog:Interfaces.Blog }> = ({ blog }) => {
  return (
    <div className="blog-details">
      <BlogDetailsComponents.BlogImage />
      <BlogDetailsComponents.Article />
      <BlogDetailsComponents.Author />
      <BlogDetailsComponents.Form />
      <BlogDetailsComponents.CommentsComponents.Comments />
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
