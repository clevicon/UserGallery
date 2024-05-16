import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../redux/actions";
import Globals from "../global/Globals";

const useLogin = () => {
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.token)

    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    React.useEffect(() => {
        if (token) {
            navigation.navigate("Dashboard")
        }
    }, [])

    const handleLogin = async () => {
        setIsLoading(true);
        const response = await Globals.APIRequest({
            url: Globals.BaseUrl + "/api/login",
            method: "POST",
            data: {
                email: email,
                password: password
            }
        })
        setIsLoading(false);

        if (response.token) {
            dispatch(addToken(response.token))
            navigation.navigate("Dashboard")
        }
        else {
            Globals.SendResponse({
                status: "error",
                message: response.error || response.message
            })
        }
    }

    return {
        handleLogin,
        setShowPassword,
        showPassword,
        email,
        password,
        setEmail,
        setPassword,
        isLoading
    }
}

export default useLogin