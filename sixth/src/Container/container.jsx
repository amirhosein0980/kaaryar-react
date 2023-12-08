import './container.css';
import Header from '../Header/header';
import Items from '../Items/items';
import Actions from '../Actions/actions';
import { useState, useEffect } from 'react';

function Container() {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem(['items'])) || ['item']);
    const [additem, setadditem] = useState(false);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    const handleClick = () => {
        setItems([]);
    }

    const handleNewTaskClick = () => {
        if (inputValue !== '') {
            setItems(prevItems => [...prevItems, inputValue]);
            setInputValue('');
        }
        setadditem(!additem);
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleNewTaskClick();
        }
    }

    return (
        <div className='container'>
            <Header />
            <Items items={items} />
            {additem && <input className='newInput' type="text" value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} />}
            <Actions removeClick={handleClick} addinput={handleNewTaskClick} />
        </div>
    );
}

export default Container;