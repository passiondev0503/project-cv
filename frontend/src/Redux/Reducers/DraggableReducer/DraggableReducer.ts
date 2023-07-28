import {ActionType, DraggableActionTypes } from "../../ActionTypes/dragableActionsType";


interface DraggableState {
  isDragging: boolean;
  active_Tab:number
}

const initialState:DraggableState = {
    isDragging: false,
    active_Tab:0
  };
  
  const draggableReducer = (state = initialState, action:DraggableActionTypes) => {
    switch (action.type) {
      case ActionType.START_DRAG:
        return {
          ...state,
          isDragging: true,
          active_Tab:4
        };
      case ActionType.END_DRAG:
        return {
          ...state,
          isDragging: false,
        };
      default:
        return state;
    }
  };
  
  export default draggableReducer;
  