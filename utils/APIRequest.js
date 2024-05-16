const APIRequest = async (request) => {
    const { url, data, method } = request;
    let APIResponse;

    try{
        await fetch(url, {
            method,
            body : method === "POST" ? JSON.stringify(data) : undefined,
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(response => response.json())
        .then(response => {
            APIResponse = response;
        })
        .catch(err => {
            APIResponse = {
                status : "error",
                message : "Something went wrong 002(L)"
            }
        })
    } catch(err){
        APIResponse = {
            status : "error",
            message : "Something went wrong 001(L)"
        }
    }

    return APIResponse;
}

export default APIRequest;''