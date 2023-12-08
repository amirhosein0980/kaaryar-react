import './items.css';
import Item from '../Item/item';

function Items({ items }){
    return(
        <div className='items'>
            {items.map(item => <Item key={item.id} item={item} />)}
        </div>
    );
}

export default Items;