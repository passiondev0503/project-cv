import { ActionType, DraggableActionTypes } from "../../ActionTypes/dragableActionsType"



export const startDrag = (): DraggableActionTypes => {
    return {
        type: ActionType.START_DRAG
    }
}
export const endDrag = (): DraggableActionTypes => {
    return {
        type: ActionType.END_DRAG
    }
}
