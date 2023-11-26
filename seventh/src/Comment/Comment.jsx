import './Comment.css';
import Comments from '../comments.json';

function Comment() {
  return (
    <div className='Comment'>
      {Comments
        .map(comment => (
          <div key={comment.id}>
            <div className='Item'><div className='replay'><p>پاسخ</p></div>{comment.text}</div>
            {Comments
              .filter(Comment => Comment.parentId === comment.id)
              .map(Comment => (
              <div className='child-Item' key={Comment.id}><div className='replay'><p>پاسخ</p></div>{Comment.text}</div>
              ))}
          </div>
        ))}
    </div>
  );
}

export default Comment;