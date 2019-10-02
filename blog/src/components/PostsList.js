import React from 'react';

import Post from './Post';

export default function PostsList({ posts, handleDelete }) {
  return (
    <div className='posts-wrapper'>
      {posts.map(post => (
        <Post key={post.id} post={post} handleDelete={handleDelete} />
      ))}
    </div>
  );
}
