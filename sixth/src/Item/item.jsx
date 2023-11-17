import './item.css';
import works from '../works.json';

function Item() {
    return (
        <div>
            {works.map(({ id, body }) => {
                return (
                    <div className='item'>
                        <p key={id}>{body}</p>
                        <div className='close'>x</div>
                    </div>
                );
            })}
        </div>
    );
}

export default Item;