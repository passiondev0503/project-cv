import { ActionType } from "../../ActionTypes/profile";


const initialState = {
    isLoading: true,
    data: {},
    error: null,
    updatedProfile: {},
    isProfileUpdated: false,
    updateProfileError: null,
    imageData:{}
}
const profileReducer = (state = initialState, action) => {
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

            }
        case ActionType.UPDATE_PROFILE_DATA_IS_SUCCESS:
            return {
                ...state,
                updatedProfile: action.payload,
                isProfileUpdated: false,
                updateProfileError:null
            }
        case ActionType.UPDATE_PROFILE_DATA_IS_FAILURE:
            return {
                ...state,
                isProfileUpdated: false,
                updateProfileError: action.payload
            }
         case ActionType.GET_IMAGE_ID_SUCCESS:
                return {
                    ...state,
                    imageData: action.payload,
                }

        default: {
            return state;
        }

    }
};

export default profileReducer;

