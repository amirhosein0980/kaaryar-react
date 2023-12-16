import './Aside.css';
import { useState, useEffect } from 'react';

function Aside({ setCurrentCategory }) {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    fetch('https://kaaryar0506reactblog.liara.run/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);
  
  return (
    <aside className="aside">
      <h1>لینک های بلاگ</h1>
      <button onClick={() => setCurrentCategory(undefined)}>همه</button>
      {categories.map(cate =>
        <p key={cate.slug} onClick={() => setCurrentCategory(cate.slug)}>{cate.name}</p>
      )}
    </aside>
  );
}

export default Aside;