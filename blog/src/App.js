import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import PostsList from './components/PostsList';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/posts')
      .then(res => {
        // console.log(res.data);
        setPosts(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = id => {
    axios
      .delete(`http://localhost:8000/api/posts/${id}`)
      .then(res => {
        // console.log(res);
        setPosts(posts.filter(post => post.id !== Number(res.data)));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='App'>
      <h1>Blog of the Rings</h1>
      <PostsList posts={posts} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
