import React from "react";
import { addMesActionCreator, updateNewMesTextActionCreator } from "./../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let onAddMessage = (text) => {
    // let text = newMessageElement.current.value;
    props.store.dispatch(addMesActionCreator(text));
  };

  let onChangeMessage = (text) => {
    // let text = newMessageElement.current.value;
    props.store.dispatch(updateNewMesTextActionCreator(text));
  };

  return (
    <Dialogs
      onAddMessage={onAddMessage}
      onChangeMessage={onChangeMessage}
      dialogsPage={props.store.getState().dialogsPage}
    />
  );
};

export default DialogsContainer;
