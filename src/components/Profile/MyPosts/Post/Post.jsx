import React from 'react';
import p from './Post.module.css'

const Post = (props) => {
  return (
    <div className={p.item}>
      <img src="https://cdn.cliqueinc.com/posts/278702/best-face-moisturizers-278702-1553206520079-main.700x0c.jpg" alt="" />
      {props.message}
      
      <div>
        <span>like</span> {props.likesCount}
      
      </div>
      
    </div>
  );
}

export default Post;