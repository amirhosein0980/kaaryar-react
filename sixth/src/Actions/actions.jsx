import './actions.css';

function Actions({removeClick,addinput}){
    return(
        <div className='actions'>
            <button className='secondary' onClick={removeClick}>حذف همه</button>
            <button className='primary' onClick={addinput}>کار جدید</button>
        </div>
    );
}

export default Actions;