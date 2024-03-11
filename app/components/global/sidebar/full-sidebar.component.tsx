import { CACHE_ONE_YEAR } from "next/dist/lib/constants";
import Category from "./category.component";
import Filter from "./filter.component";
import Products from "./products.component";

const FullSidebar = () =>{
    return(
        <div className="sidebar px-2 md:p-0">
            <Category />
            <Filter />
            <Products />
        </div>
    )
}

export default FullSidebar