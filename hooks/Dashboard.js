import React from "react";
import Globals from "../global/Globals";

const useDashboard = () => {
    const [users, setUsers] = React.useState([]);
    const [noMoreData, setNoMoreData] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    const page = React.useRef(1);

    React.useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async (isLoadMore) => {
        const response = await Globals.APIRequest({
            url : `${Globals.BaseUrl}/api/users?page=${page.current}`,
            method : "GET",
        })

        setIsLoading(false)

        if(response.data?.length > 0){
            isLoadMore ? setUsers(prev => [...prev, ...response.data]) : setUsers(response.data);
        }
        else{
            isLoadMore ? setNoMoreData(true) : null;
        }
    }

    const handleEndReached = () => {
        page.current = page.current + 1;
        getUsers(true)
    }

    return {
        users,
        noMoreData,
        handleEndReached,
        isLoading
    }

}

export default useDashboard;