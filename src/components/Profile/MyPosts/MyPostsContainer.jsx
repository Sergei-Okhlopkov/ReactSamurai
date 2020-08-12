import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "./../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState().profilePage;

  let onAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    // let text = newPostElement.current.value;
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <MyPosts
      onAddPost={onAddPost}
      onPostChange={onPostChange}
      posts={state.posts}
      newPostText={state.newPostText}
    />
  );
};

export default MyPostsContainer;
