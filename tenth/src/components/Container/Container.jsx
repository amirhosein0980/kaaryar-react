import './Container.css';
import { useState, useEffect } from 'react';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Aside from "../Aside/Aside";

function Container() {
  const [posts, setPosts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = currentCategory ? `https://kaaryar0506reactblog.liara.run/posts?category=${currentCategory}` : 'https://kaaryar0506reactblog.liara.run/posts';
    fetch(url)
      .then(response => {
        if (!response.ok) {
          return response.text().then(text => { throw new Error(JSON.parse(text).message); });
        }
        return response.json();
      })
      .then(data => { setPosts(data); })
      .catch(error => {
        setError(error.message);
      });
  }, [currentCategory]);
  
  return (
    <div className="container">
      <Header />
      {error && <div className="error">{error}</div>}<br />
      <section className='container_section_main'>
        <Main posts={posts} />
        <Aside setCurrentCategory={setCurrentCategory} />
      </section>
    </div>
  );
}

export default Container;