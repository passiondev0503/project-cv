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
export const getRequest = async (slug) => {
    try {
        const response = await axiosInstance.get(slug);
        return response;
    } catch (error) {
        console.error("Error occurred:", error.message);
        return Promise.reject(error.message);
    }
};

// path request
export const updateRequest = async (slug , data)=>{
    try{
        const response = await axiosInstance.patch(slug , data);
        return response;
    }catch (error) {
        console.error("Error occurred:", error.response);
        return error?.response
    }

}



export const postRequest = async (slug , data)=>{
    try{
        const response = await axiosInstance.post(slug , data);
        return response;
    }catch (error) {
        console.error("Error occurred:", error.message);
        return Promise.reject(error.message);
    }

}