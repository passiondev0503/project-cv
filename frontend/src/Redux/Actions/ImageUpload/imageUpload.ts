import { ActionType } from '../../ActionTypes/profile';
import { postRequest } from '../../../Service/MakeRequests';

import { Dispatch } from 'redux';

// update Profile Image action 
export const getImageIDRequest = (data:any) => async (dispatch:Dispatch) => {

    dispatch({ type: ActionType.GET_IMAGE_ID_PENDING })

    try {
        const response = await postRequest(`/uploads`, data);
        if (response.status === 201) {
            dispatch({
                type: ActionType.GET_IMAGE_ID_SUCCESS,
                payload: response.data,
            });
            console.log("response" , response)
        }
    } catch (error) {

        dispatch({ type: ActionType.GET_IMAGE_ID_FAILURE , payload:error })
        console.log(error);
    }
}