import './actions.css';
import MessageList from './messagelist';

function Actions(){
    return(
        <div>
            {MessageList()}
            <div className='footer-box'>
                <input type="text" className='text' placeholder='پیام خود را اینجا بنویسید...'/>
                <input type="button" value="ارسال" className='submit'/>
            </div>
        </div>
    );
    
}

export default Actions;