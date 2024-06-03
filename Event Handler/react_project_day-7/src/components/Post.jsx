import React from 'react';

  function Post({title, body, description}) {
    return (
      <div className="post">
        <div className="post-details">
          <h1>{title}</h1>
          <p>{description}</p>
          <p>{body}</p>
        </div>
      </div>
    );
  }
  
  export default Post;
  