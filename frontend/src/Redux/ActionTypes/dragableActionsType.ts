export const ActionType = {
    START_DRAG: "START_DRAG",
    END_DRAG: "END_DRAG"
}


interface StartDragAction {
  type: typeof ActionType.START_DRAG;
}

interface EndDragAction {
  type: typeof ActionType.END_DRAG;
}

export type DraggableActionTypes = StartDragAction | EndDragAction;