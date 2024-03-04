import { GlobalComponents } from "./components/global";

export default function Home(props:any) {
  return (
    <main className="container mx-auto">
      <div className="home-section-with-sidebar">
        <GlobalComponents.SidebarComponents.FullSidebar />
      </div>
    </main>
  );
}
