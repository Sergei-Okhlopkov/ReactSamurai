const UPDATE_NEW_MES_TEXT = "UPDATE-NEW-MES-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  dialogsData: [
    { id: 1, name: "Ярослав" },
    { id: 2, name: "Руслан" },
    { id: 3, name: "Анастасия" },
    { id: 4, name: "Данил" },
    { id: 5, name: "Татьяна" },
  ],

  messagesData: [
    {
      id: 1,
      message: "Привет! У меня есть ценная информация по поводу front-end разработки. Нужно??",
    },
    { id: 2, message: "Привет, Серёга! Сейчас занят, но ссылку жду" },
    { id: 3, message: "Океей, через пару минут кину!" },
    { id: 4, message: "Когда свой проект-то закончишь?" },
  ],
  newMesText: "Soon",
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MES_TEXT: {
      state.newMesText = action.newText;
      return state;
    }

    case ADD_MESSAGE: {
      let newMessage = {
        id: getMaxidMes(state),
        message: state.newMesText,
      };
      state.messagesData.push(newMessage);
      state.newMesText = "";
      return state;
    }

    default:
      return state;
  }
};

const getMaxidMes = (state) => {
  //Ищем максимальный id в сообщениях
  let max = 0;
  state.messagesData.forEach((el) => {
    if (el.id > max) max = el.id;
  });

  return max + 1;
};

export const addMesActionCreator = (text) => ({ type: ADD_MESSAGE, newText: text });

export const updateNewMesTextActionCreator = (text) => ({ type: UPDATE_NEW_MES_TEXT, newText: text });

export default dialogReducer;
