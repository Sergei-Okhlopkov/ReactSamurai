import React from 'react';
import { addMesActionCreator, updateNewMesTextActionCreator } from './../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import storeContext from '../../storeContext';

const DialogsContainer = (props) => {
  return (
    <storeContext.Consumer>
      {(store) => {
        let onAddMessage = (text) => {
          store.dispatch(addMesActionCreator(text));
        };

        let onChangeMessage = (text) => {
          store.dispatch(updateNewMesTextActionCreator(text));
        };

        return (
          <Dialogs
            onAddMessage={onAddMessage}
            onChangeMessage={onChangeMessage}
            dialogsPage={store.getState().dialogsPage}
          />
        );
      }}
    </storeContext.Consumer>
  );
};

export default DialogsContainer;
