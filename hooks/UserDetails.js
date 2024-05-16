import React from "react";
import Globals from "../global/Globals";

const useUserDetails = (id) => {
    const [userDetails, setUserDetails] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        getUserDetails();
    }, [])

    const getUserDetails = async () => {
        const response = await Globals.APIRequest({
            url : `${Globals.BaseUrl}/api/users/${id}`,
            method : "GET",
        })

        setIsLoading(false)

        if(response.data){
            setUserDetails(response)
        }
    }

    

    return {
        userDetails,
        isLoading
    }

}

export default useUserDetails;