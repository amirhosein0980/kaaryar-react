import './Container.css';
import Header from "../Header/Header";
import Comment from "../Comment/Comment";

function Container() {
  return (
    <div>
        <div className='Container'>
            <Header />
            <Comment />
        </div>
    </div>
  );
}

export default Container;
