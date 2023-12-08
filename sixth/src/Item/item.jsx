import './item.css';

function Item({ item }) {
    return (
        <div className='item' key={item.id}>
            <p>{item}</p>
            <div className='close'>x</div>
        </div>
    );
}

export default Item;