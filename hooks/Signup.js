import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Checkbox from "expo-checkbox";
import Icon from "react-native-vector-icons/FontAwesome"; // Import the appropriate icon library
import { useNavigation } from "@react-navigation/native";
import  Globals from "../global/Globals";

const useSignup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation();


    const handleSignup = async () => {
        if (!rememberMe) {
            Globals.SendResponse({
                status: "error",
                message: "You must agree to terms of use to continue"
            })
            return;
        }
        setIsLoading(true);
        const response = await Globals.APIRequest({
            url: Globals.BaseUrl + "/api/register",
            method: "POST",
            data: {
                // username: username,
                // fullname: fullname,
                email: email,
                password: password
            }
        })
        setIsLoading(false);

        console.log(response)

        if (response.token) {
            navigation.navigate("Login")
        }
        else {
            Globals.SendResponse({
                status : "error",
                message : response.error || response.message 
            })
        }
    }

    return {
        handleSignup,
        email,
        password,
        isLoading,
        setEmail,
        setPassword,
        setRememberMe,
        showPassword,
        rememberMe,
        setShowPassword
    }

}

export default useSignup