import { Link } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import ProductList from "../product-list/components/ProductList";

function Home() {
    return ( 
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
        </div>
     );
}

export default Home;