import './header.css';

function Header() {
    return (
        <div className="header">
            <div className="header-header">
                <div className="header-item">Sell</div>
                <div className="header-item">Buy</div>
            </div>
            <div className="header-main">
                <div className="header-item">Total (SAT)</div>
                <div className="header-item">Amount (SAT)</div>
                <div className="header-item">PRICE (RIAL)</div>
                <div className="header-item">Total (SAT)</div>
                <div className="header-item">Amount (SAT)</div>
            </div>
        </div>
    );
};

export default Header;