import AdminProductList from "../admin/components/AdminProductList";
import NavBar from "../navbar/NavBar";

function AdminHome() {
    return ( 
        <div>
            <NavBar>
                <AdminProductList></AdminProductList>
            </NavBar>
        </div>
     );
}

export default AdminHome;