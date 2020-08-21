import profileReducer from './profileReducer';
import dialogReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: 'Привет, Ярослав! Я тут react неплохо затестил',
          imgsrc: 'https://sun9-2.userapi.com/c854420/v854420628/9c617/RCESXJ6IJrE.jpg',
          likesCount: 17,
        },
        {
          id: 2,
          message: 'Сейчас поищем! Как тестить?',
          imgsrc: 'https://sun9-62.userapi.com/c824601/v824601152/166a85/6xMNsOcV6Js.jpg',
          likesCount: 11,
        },
      ],
      newPostText: 'Nice Horse',
    },
    dialogsPage: {
      dialogsData: [
        { id: 1, name: 'Ярослав' },
        { id: 2, name: 'Руслан' },
        { id: 3, name: 'Анастасия' },
        { id: 4, name: 'Данил' },
        { id: 5, name: 'Татьяна' },
      ],

      messagesData: [
        {
          id: 1,
          message: 'Привет! У меня есть ценная информация по поводу front-end разработки. Нужно??',
        },
        { id: 2, message: 'Привет, Серёга! Сейчас занят, но ссылку жду' },
        { id: 3, message: 'Океей, через пару минут кину!' },
        { id: 4, message: 'Когда свой проект-то закончишь?' },
      ],
      newMesText: '',
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log('State has been changed!');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

window.store = store;

export default store;
