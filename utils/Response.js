import Toast from 'react-native-toast-message';

const SendResponse = (response) => {
    const { status, message } = response;

    Toast.show({
        type: status,
        text1: status,
        text2: message
    });

}

const ShowResponse = () => {
    return(
        <Toast />
    )
}

export {
    SendResponse,
    ShowResponse
}

