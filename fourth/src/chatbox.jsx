import './chatbox.css';
import Actions from './actions';

function ChatBox(){
    return (
        <div className="chatbox">
            {Actions()}
        </div>
    );
}

export default ChatBox;