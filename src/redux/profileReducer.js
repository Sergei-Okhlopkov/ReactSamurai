const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    {
      id: 1,
      message: "Привет, Ярослав! Я тут react неплохо затестил",
      imgsrc: "https://sun9-2.userapi.com/c854420/v854420628/9c617/RCESXJ6IJrE.jpg",
      likesCount: 17,
    },
    {
      id: 2,
      message: "Сейчас поищем! Как тестить?",
      imgsrc: "https://sun9-62.userapi.com/c824601/v824601152/166a85/6xMNsOcV6Js.jpg",
      likesCount: 11,
    },
  ],
  newPostText: "Nice Horse",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 1,
        message: state.newPostText,
        imgsrc: "https://sun9-2.userapi.com/c854420/v854420628/9c617/RCESXJ6IJrE.jpg",
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    }

    case UPDATE_NEW_POST_TEXT: {
      state.newPostText = action.newText;
      return state;
    }

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;
