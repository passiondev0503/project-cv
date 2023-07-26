import { ActionType } from '../../ActionTypes/profile';
import { getRequest, updateRequest , postRequest } from '../../../Service/MakeRequests';
import { getToken } from '../../../CommonUtils/common-utils';




//get profile data action
export const getProfileData = () => async (dispatch) => {
    const userData = await getToken();
    const id = userData?.userId;
    dispatch({ type: ActionType.GET_PROFILE_DATA_IS_PENDING });
    try {
        const response = await getRequest(`/users/${id}`);
        if (response.status === 200) {
            dispatch({
                type: ActionType.GET_PROFILE_DATA_IS_SUCCESS,
                payload: response.data,
            });
        }
    } catch (error) {
        dispatch({ type: ActionType.GET_PROFILE_DATA_IS_FAILURE, payload: error });
        console.log(error);
    }
};


//update profile data action 
export const updateProfileData = (data) => async (dispatch) => {
    const userData = await getToken();
    const id = userData?.userId;
    dispatch({ type: ActionType.UPDATE_PROFILE_DATA_IS_PENDING });
    try {
        let response = await updateRequest(`/users/${id}`, data)
        if (response.status === 200) {
            dispatch({
                type: ActionType.UPDATE_PROFILE_DATA_IS_SUCCESS,
                payload: response.data,
            });
        }

    } catch (error) {

        dispatch({
            type: ActionType.UPDATE_PROFILE_DATA_IS_FAILURE,
            payload: error,
        });

    }

}

export const getImageIDRequest = (data) => async (dispatch) => {

    try {
        const response = await postRequest(`/uploads` , data);
        if (response.status === 201) {
            dispatch({
                type: ActionType.GET_IMAGE_ID_SUCCESS,
                payload: response.data,
            });
        }
    } catch (error) {
        console.log(error);
    }
}