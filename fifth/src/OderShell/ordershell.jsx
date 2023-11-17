import './ordershell.css';
import Header from '../Header/header';
import List from '../List/list';

function OrderShell() {
    return (
        <div className="order-shell">
            <Header />
            <List />
        </div>
    );
};

export default OrderShell;