import './messagelist.css';
import Message from './message.jsx';

function MessageList() {
    return (
        <div className='main-box'>
            {Message()}
        </div>
    );
}
export default MessageList;