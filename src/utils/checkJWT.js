import appService from '../Services/appService';

let checkJWTAndSetLoginStatus = async () => {
    let response = await appService.checkJWTLogin();
    return response.errCode;
}

const checkJWT = {
    checkJWTAndSetLoginStatus,
}

export default checkJWT;