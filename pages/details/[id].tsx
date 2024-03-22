import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import products from '@/public/assets/products.json'
import * as Interfaces from '@/app/controller/interfaces'
import "../../app/globals.css";
import { DetailsComponents } from '@/app/components/details';
import Layout from '../layout';

const Details:React.FC<{ product:Interfaces.Product }> = ({ product }) => {
  return (
  <Layout>
    <div className='details'>
      <DetailsComponents.CarouselComponents.Carousel product={product} productImgSrc={product.img} />
      <DetailsComponents.TabsComponents.Tabs />
      <DetailsComponents.Related />
    </div>
  </Layout>
  );
};

export default Details;

export const getStaticPaths: GetStaticPaths = async () => {
  try{
    const products = await axios.get('http://localhost:3000/assets/products.json');
    const data: Interfaces.Product[] = await products.data;
    
    const paths = data.map((p: { id:number }) => ({
      params: { id: p.id.toString() },
    }));
    return { paths, fallback: false };
  }catch(err){
    console.log(err)
    return { paths:[],fallback:false}
  }

};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try{
    const product = products.find((p:Interfaces.Product) => p.id.toString() === params?.id?.toString())
    return {
      props: { product }
    }
  }catch(err){
    console.log(err)
    return {
      props:{}
    }
  }
};
