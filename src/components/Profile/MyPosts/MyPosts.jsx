import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsEl = props.posts.map((p) => (
    <Post message={p.message} imgsrc={p.imgsrc} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    // props.dispatch(addPostActionCreator());
    props.onAddPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.dispatch(updateNewPostTextActionCreator(text));
    props.onPostChange(text);
  };

  return (
    <div>
      <h3>My posts</h3>
      <div className={s.addPost}>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Запостить</button>
        </div>
      </div>
      <div className={s.posts}>{postsEl}</div>
    </div>
  );
};

export default MyPosts;
