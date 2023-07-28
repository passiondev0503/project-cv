import { ActionType } from "../../ActionTypes/profile"



const initialState: any = {
    imageData: [],
    is_image_Uploaded: false
}

const imageUploadedReducer = (state = initialState, action: any) => {

    switch (action) {
        // upload Image Cases
        case ActionType.GET_IMAGE_ID_PENDING:
            return {
                ...state,
                is_image_Uploaded: true,
            }
        case ActionType.GET_IMAGE_ID_SUCCESS:
            return {
                ...state,
                imageData: action.payload,
                is_image_Uploaded: false
            }
        case ActionType.GET_IMAGE_ID_FAILURE:
            return {
                ...state,
                is_image_Uploaded: false
            }

        default: {
            return state;
        }
    }

}

export default imageUploadedReducer