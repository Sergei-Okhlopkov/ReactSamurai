import React from 'react';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from './../../../redux/profileReducer';
import MyPosts from './MyPosts';
import storeContext from '../../../storeContext';

const MyPostsContainer = () => {
  return (
    <storeContext.Consumer>
      {(store) => {
        let state = store.getState().profilePage;

        let onAddPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let onPostChange = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };

        return (
          <MyPosts
            onAddPost={onAddPost}
            onPostChange={onPostChange}
            posts={state.posts}
            newPostText={state.newPostText}
          />
        );
      }}
    </storeContext.Consumer>
  );
};

export default MyPostsContainer;
