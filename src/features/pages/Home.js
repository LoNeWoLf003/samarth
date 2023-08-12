import NavBar from "../navbar/NavBar";
import ProductList from "../product-list/ProductList";

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