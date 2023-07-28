import {Dispatch} from "redux"
import { ActionType } from "../../ActionTypes/getUploadPannel"
import { getRequest } from "../../../Service/MakeRequests"

export const getUploadPannelIamges = ()=> async(dispatch:Dispatch)=>{
    dispatch({type:ActionType.GET_UPLOAD_PANNEL_IMAGE_PENDING})
    try{
        let response:any = await getRequest("/uploads")
        if(response.status === 200){
            dispatch({type:ActionType.GET_UPLOAD_PANNEL_IMAGE_SUCCESS, payload:response?.data})
        }

    }catch(error){
        console.log("getUploadPannelIamges" , error)
        dispatch({type:ActionType.GET_UPLOAD_PANNEL_IMAGE_FAILURE, payload:error})
    }
}