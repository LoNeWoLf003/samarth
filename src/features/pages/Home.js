import NavBar from "../navbar/NavBar";
import ProductList from "../product-list/components/ProductList";

function Home() {
    return ( 
        <div>
            <NavBar>
            <ProductList />
            </NavBar>
        </div>
     );
}

export default Home;