import data from './messages.json';
import './message.css';

function Message() {
    return (
        <div className="message-list">
            {data.map(({ id, body, isPeer }) => {
                return (
                    <div key={id} id={`message-${id}`} className={`message ${isPeer ? 'peer-message' : 'my-message'}`}>
                        <p>{body}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Message;