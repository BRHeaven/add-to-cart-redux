/* eslint-disable no-self-assign */
/* eslint-disable no-fallthrough */
const stateCard = {
  modalCard : {}
};
const cardReducer = ( state = stateCard, action ) => {
  switch ( action.type ) {
    case "setModalCard" :{
      state.modalCard = action.infoModalCard;
      state.modalCard = state.modalCard;
      return {...state};
    }
    default: ;
  }
  return {...state}
}
export default cardReducer;