import CategoriesMenu from "../../categories-menu/categories-menu.component";
import { Outlet } from "react-router-dom";
function Home() {
    return (
        <div>
            <CategoriesMenu />
            <Outlet />
        </div>
    );
}

export default Home;
