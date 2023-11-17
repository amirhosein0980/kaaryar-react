import './orderitem.css';

function OrderItem ({ quantity, price, type, total, maximumTotal }) {
    const widthPercentage = (total && maximumTotal) ? (total / maximumTotal) * 100 : 0;

    return (
        <div className={`order-item ${type}`}>
            <div>{quantity}</div>
            <div>{price}</div>
            <div>{total}</div>
            <div className="total-bar" style={{ width: `${widthPercentage}%` }}></div>
        </div>
    );
};

export default OrderItem;