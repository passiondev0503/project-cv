export const ActionType = {
    GET_UPLOAD_PANNEL_IMAGE_SUCCESS: "GET_UPLOAD_PANNEL_IMAGE_SUCCESS",
    GET_UPLOAD_PANNEL_IMAGE_PENDING: "GET_UPLOAD_PANNEL_IMAGE_PENDING",
    GET_UPLOAD_PANNEL_IMAGE_FAILURE: "GET_UPLOAD_PANNEL_IMAGE_FAILURE",
}

interface StartUploadAction {
    type: typeof ActionType.GET_UPLOAD_PANNEL_IMAGE_SUCCESS,
    payload: any
}

interface PendingUploadAction {
    type: typeof ActionType.GET_UPLOAD_PANNEL_IMAGE_PENDING,
    payload: any
}

interface EndUploadAction {
    type: typeof ActionType.GET_UPLOAD_PANNEL_IMAGE_FAILURE,
    payload: any
}

export type UploadPannelType = StartUploadAction | PendingUploadAction | EndUploadAction