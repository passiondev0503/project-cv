import axios from "axios";
import { getToken } from "../../CommonUtils/common-utils";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const token = await getToken();
        const access_token = token?.access_token
        if (token) {
            config.headers["Authorization"] = `Bearer ${access_token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        // const originalRequest = error.config;
        // if (error.response.status === 401 && !originalRequest._retry) {
        //     originalRequest._retry = true;
        // const newToken = await refreshToken(); 
        // if (newToken) {
        //     originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        //     return axiosInstance(originalRequest);
        // }
        // }
        return Promise.reject(error);
    }
);

// get request
export const getRequest = async (slug:string) => {
    try {
        const response = await axiosInstance.get(slug);
        return response;
    } catch (error:any) {
        console.error("Error occurred:", error);
      return error?.response
    }
};


// path request
export const updateRequest = async (slug:string , data:any)=>{
    try{
        const response = await axiosInstance.patch(slug , data);
        return response;
    }catch (error:any) {
        return error?.response
    }

}


//post request
export const postRequest = async (slug:string , data:any)=>{
    try{
        const response = await axiosInstance.post(slug , data);
        return response;
    }catch (error:any) {
        console.error("Error occurred:", error);
        return error?.response
    }

}


//delete request
export const deleteRequest = async (slug:string)=>{
    try{
        const response = await axiosInstance.delete(slug);
        return response;
    }catch (error:any) {
        console.error("Error occurred:", error);
        return error?.response
    }

}