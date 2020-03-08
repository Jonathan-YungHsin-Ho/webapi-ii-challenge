import React from 'react';

export default function Posts({ post, handleDelete }) {
  return (
    <div className='post'>
      <h2>{post.title}</h2>
      <h3>{post.contents}</h3>
      <p>
        Post: {post.id} | Last Updated: {post.updated_at}
      </p>
      <div className='btn-wrapper'>
        <div className='btn'>
          <p>Edit Post</p>
        </div>
        <div className='btn' onClick={() => handleDelete(post.id)}>
          <p>Delete Post</p>
        </div>
      </div>
    </div>
  );
}
