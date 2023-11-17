import './container.css';
import Header from '../Header/header';
import Items from '../Items/items';
import Actions from '../Actions/actions';

function Container(){
    return(
        <div className='container'>
            <Header />
            <Items />
            <Actions />
        </div>
    );
}

export default Container;