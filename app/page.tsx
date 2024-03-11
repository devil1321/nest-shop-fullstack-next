import { GlobalComponents } from "./components/global";
import { HomeComponents } from "./components/home";

export default function Home(props:any) {
  return (
    <main className="container mx-auto">
      <div className="home-section-with-sidebar md:flex md:justify-between md:items-start">
        <GlobalComponents.SidebarComponents.FullSidebar />
        <div className="homve-section-with-sidebar-inner md:w-4/5">
          <HomeComponents.CarouselComponents.Carousel />
          <HomeComponents.CategoriesComponents.Categories />
          <HomeComponents.FeatureComponents.Feature />
          <HomeComponents.Products />
          <HomeComponents.DealsComponents.Deals />
        </div>
      </div>
      <HomeComponents.FiguresComponents.Figures />
      <HomeComponents.ProductsComponents.ProductsInner />
      <GlobalComponents.Banner 
        img="/assets/home/footer-img.png" 
        heading="Stay home & get your daily needs from our shop" 
        paragraph="Start You'r Daily Shopping with Nest Mart" 
      />
    </main>
  );
}
