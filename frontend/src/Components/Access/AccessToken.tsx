import { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const AccessToken = () => {
    const { token } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            let decodedToken:any = jwt_decode(token);
            let expiry = decodedToken?.exp;
            let userId = decodedToken?.sub;
            const userToken = {
                "userId": userId,
                "access_token": token,
                "expiry": expiry
            };
            localStorage.setItem("token", JSON.stringify(userToken));
            navigate("/");
        }
    }, [token]);

    return null;
}

export default AccessToken;
