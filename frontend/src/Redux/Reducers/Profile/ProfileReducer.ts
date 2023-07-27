import { ActionType } from "../../ActionTypes/profile";


const initialState = {
    isLoading: true,
    data: {},
    error: null,
    updatedProfile: {},
    isProfileUpdated: false,
    updateProfileError: null,
    imageData: {},
    is_image_Uploaded: false
}
const profileReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case ActionType.GET_PROFILE_DATA_IS_PENDING:
            return {
                ...state,
                isLoading: true
            }
        case ActionType.GET_PROFILE_DATA_IS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case ActionType.GET_PROFILE_DATA_IS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        // upodate profile cases
        case ActionType.UPDATE_PROFILE_DATA_IS_PENDING:
            return {
                ...state,
                isProfileUpdated: true,
                updateProfileError:null

            }
        case ActionType.UPDATE_PROFILE_DATA_IS_SUCCESS:
            return {
                ...state,
                updatedProfile: action.payload,
                isProfileUpdated: false,
                updateProfileError: null
            }
        case ActionType.UPDATE_PROFILE_DATA_IS_FAILURE:
            return {
                ...state,
                isProfileUpdated: false,
                updateProfileError: action.payload
            }
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
};

export default profileReducer;

