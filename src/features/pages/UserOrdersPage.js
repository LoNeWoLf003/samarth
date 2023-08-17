import NavBar from '../navbar/NavBar';
import UserOrders from '../user/components/userOrders';

function UserOrdersPage() {
  return (
    <div>
      <NavBar>
        <h1 className='mx-auto text-2xl'>My Orders</h1>
        <UserOrders></UserOrders>
      </NavBar>
    </div>
  );
}

export default UserOrdersPage;