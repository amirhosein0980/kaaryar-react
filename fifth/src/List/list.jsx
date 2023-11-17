import './list.css';
import OrderItem from '../OderItem/orderitem';
import orders from '../orders.json';

function List() {
    const maximumTotal = Math.max(...orders.map(order => order.total));
    return (
        <div className='list'>
            <div className="list-buy">
                {orders.filter(order => order.type === 'buy').map((order, index) => (
                    <OrderItem key={index} {...order} maximumTotal={maximumTotal} />
                ))}
            </div>
            <div className="list-sell">
                {orders.filter(order => order.type === 'sell').map((order, index) => (
                    <OrderItem key={index} {...order} maximumTotal={maximumTotal} />
                ))}
            </div>
        </div>
    );
};

export default List;