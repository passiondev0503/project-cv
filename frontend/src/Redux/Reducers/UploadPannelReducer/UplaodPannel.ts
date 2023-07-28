import { ActionType, UploadPannelType } from "../../ActionTypes/getUploadPannel";

const initialState = {
    image_uploaded_data: [],
    is_data_uploaded: false,
    paginationData: {
        totalPages: "",
        totalResults: "",
        limit: "",
        page: "",
    },
};

const uploadPannel = (state = initialState, action: UploadPannelType) => {
    switch (action.type) {
        case ActionType.GET_UPLOAD_PANNEL_IMAGE_PENDING:
            return {
                ...state,
                is_data_uploaded: true,
            };
        case ActionType.GET_UPLOAD_PANNEL_IMAGE_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                is_data_uploaded: false,
                image_uploaded_data: action.payload?.results,
                paginationData: {
                    ...state.paginationData,
                    totalPages: action.payload?.totalPages,
                    totalResults: action.payload?.totalResults,
                    limit: action.payload?.limit,
                    page: action.payload?.page,
                },
            };
        case ActionType.GET_UPLOAD_PANNEL_IMAGE_FAILURE:
            return {
                ...state,
                is_data_uploaded: false,
            };
        default:
            return state;
    }
};

export default uploadPannel;
