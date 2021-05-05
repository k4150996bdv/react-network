import React from 'react';
import s from './MyPosts.module.css'
import ReduxPostForm from './MyPostsForm';
import Post from './Post/Post';

const MyPosts = React.memo (props => {
  console.log("RENDER")
  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)
 
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <ReduxPostForm onSubmit={onAddPost} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}
)

export default MyPosts;