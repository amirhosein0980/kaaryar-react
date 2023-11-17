import './header.css';
import List from './list';

function Header() {
    return (
        <div className="header">
            <div className="header-header">
                <div className="header-item">Sell</div>
                <div className="header-item">Buy</div>
            </div>
            <div className="header-main">
                <div className="header-item">Total (SAT)</div>
                <div className="header-item">Amount (SAT){List()}</div>
                <div className="header-item">PRICE (RIAL){List()}</div>
                <div className="header-item">Total (SAT)</div>
                <div className="header-item">Amount (SAT){List()}</div>
            </div>
        </div>
    );
};

export default Header;