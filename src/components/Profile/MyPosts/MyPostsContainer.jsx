import React from 'react';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from './../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// const MyPostsContainer = () => {
//   return (
//     <storeContext.Consumer>
//       {(store) => {
//         let onAddPost = () => {
//           store.dispatch(addPostActionCreator());
//         };

//         let onPostChange = (text) => {
//           store.dispatch(updateNewPostTextActionCreator(text));
//         };

//         return (
//           <MyPosts
//             onAddPost={onAddPost}
//             onPostChange={onPostChange}
//             posts={state.posts}
//             newPostText={state.newPostText}
//           />
//         );
//       }}
//     </storeContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: () => {
      dispatch(addPostActionCreator());
    },
    onPostChange: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
