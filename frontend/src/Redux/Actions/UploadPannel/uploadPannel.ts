import {Dispatch} from "redux"
import { ActionType } from "../../ActionTypes/getUploadPannel"
import { getRequest, deleteRequest } from "../../../Service/MakeRequests"

export const getUploadPannelIamges = ( param?: any)=> async(dispatch:Dispatch)=>{
    dispatch({type:ActionType.GET_UPLOAD_PANNEL_IMAGE_PENDING})
    try{let response:any;
        if (param === undefined){
            response = await getRequest("/uploads")
        } else {
            response = await getRequest(`/uploads?name=${param}`)
        }
        if(response.status === 200){
            dispatch({type:ActionType.GET_UPLOAD_PANNEL_IMAGE_SUCCESS, payload:response?.data})
        } else {
            return;
        }
    } catch(error) {
        console.log("getUploadPannelIamges" , error)
        dispatch({type:ActionType.GET_UPLOAD_PANNEL_IMAGE_FAILURE, payload:error})
    }
}

export const deleteUploadPannelIamges = ( param: any) => async (dispatch:Dispatch) => {
    let response:any = await deleteRequest(`/uploads/${param}`);

    if (response == 1) {
        dispatch({type:ActionType.GET_UPLOAD_PANNEL_IMAGE_PENDING})
        try{
            let response:any;
            if (param === undefined){
                response = await getRequest("/uploads")
            } else {
                response = await getRequest(`/uploads?name=${param}`)
            }
            if(response.status === 200){
                dispatch({type:ActionType.GET_UPLOAD_PANNEL_IMAGE_SUCCESS, payload:response?.data})
            } else {
                return;
            }
        }catch(error){
            console.log("getUploadPannelIamges" , error)
            dispatch({type:ActionType.GET_UPLOAD_PANNEL_IMAGE_FAILURE, payload:error})
        }
    } else {
        return;
    }
}