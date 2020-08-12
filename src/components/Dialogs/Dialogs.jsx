import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { addMesActionCreator, updateNewMesTextActionCreator } from "./../../redux/dialogsReducer";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsEl = state.dialogsData.map((d) => <DialogItem name={d.name} id={d.id} />);

  let messagesEl = state.messagesData.map((m) => <Message message={m.message} />);

  let newMessageElement = React.createRef();

  let onAddMessage = () => {
    let text = newMessageElement.current.value;
    // props.dispatch(addMesActionCreator(text));
    props.onAddMessage(text);
  };

  let onChangeMessage = () => {
    let text = newMessageElement.current.value;
    // props.dispatch(updateNewMesTextActionCreator(text));
    props.onChangeMessage(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsEl}</div>
      <div className={s.messages}>{messagesEl}</div>
      <div className={s.addmessage}>
        <textarea onChange={onChangeMessage} ref={newMessageElement} value={state.newMesText} />
        <button onClick={onAddMessage}>Отправить</button>
      </div>
    </div>
  );
};

export default Dialogs;
