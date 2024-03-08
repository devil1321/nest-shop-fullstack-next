import { GlobalComponents } from "./components/global";
import { HomeComponents } from "./components/home";

export default function Home(props:any) {
  return (
    <main className="container mx-auto">
      <div className="home-section-with-sidebar flex justify-between items-start">
        <GlobalComponents.SidebarComponents.FullSidebar />
        <div className="homve-section-with-sidebar-inner w-4/5">
          <HomeComponents.CarouselComponents.Carousel />
          <HomeComponents.CategoriesComponents.Categories />
          <HomeComponents.FeatureComponents.Feature />
          <HomeComponents.Products />
        </div>
      </div>
    </main>
  );
}
