import './list.css';
import OrderItem from './orderitem';
import orders from './orders.json';

function List () {
    const maximumTotal = Math.max(...orders.map(order => order.total));
    return (
        <div className="list">
            {orders.map((order, index) => (
                <OrderItem key={index} {...order} maximumTotal={maximumTotal} />
            ))}
        </div>
    );
};

export default List;