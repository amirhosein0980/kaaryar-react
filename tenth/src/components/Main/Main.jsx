import './Main.css';

function Main({ posts }) {
    return (
        <main className="main">
            {posts.map(post =>
                <div className='main_post' key={post.id}>
                    <h1><a href="##">{post.title}</a></h1>
                    <div className='writer'>
                        <div className='avatar'></div>
                        <h4>ارسال شده توسط {post.author.name} در تاریخ {post.dateTime} دسته بندی: {post.category}</h4>
                    </div>
                    <p>{post.summary}</p>
                </div>
            )}
        </main>
    );
}

export default Main;