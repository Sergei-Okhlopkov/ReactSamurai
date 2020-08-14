import { addMesActionCreator, updateNewMesTextActionCreator } from './../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onAddMessage: (text) => {
      dispatch(addMesActionCreator(text));
    },
    onChangeMessage: (text) => {
      dispatch(updateNewMesTextActionCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
