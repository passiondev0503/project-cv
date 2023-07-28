import { ActionType } from '../../ActionTypes/profile';
import { getRequest, updateRequest, postRequest } from '../../../Service/MakeRequests';
import { getToken } from '../../../CommonUtils/common-utils';
import { Dispatch } from 'redux';




//get profile data action
export const getProfileData = () => async (dispatch:Dispatch) => {
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
export const updateProfileData = (data:any) => async (dispatch:Dispatch) => {

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
        }else if(response.status === 400){
            dispatch({
                type: ActionType.UPDATE_PROFILE_DATA_IS_FAILURE,
                payload: response?.data,
            });
        }

    } catch (error) {
        dispatch({
            type: ActionType.UPDATE_PROFILE_DATA_IS_FAILURE,
            payload: error,
        });

    }

}

// update Profile Image action 
// export const getImageIDRequest = (data:any) => async (dispatch:Dispatch) => {

//     dispatch({ type: ActionType.GET_IMAGE_ID_PENDING })

//     try {
//         const response = await postRequest(`/uploads`, data);
//         if (response.status === 201) {
//             dispatch({
//                 type: ActionType.GET_IMAGE_ID_SUCCESS,
//                 payload: response.data,
//             });
//         }
//     } catch (error) {

//         dispatch({ type: ActionType.GET_IMAGE_ID_FAILURE , payload:error })
//         console.log(error);
//     }
// }