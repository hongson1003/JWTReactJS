import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8111'
});

instance.defaults.withCredentials = true
// instance.defaults.headers.common['Authorization'] = `Bearer  ${'hi'}`;
// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    // const token = getAuthToken(); // Lấy token từ Redux store
    // console.log('token', token)
    // if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
}, function (err) {
    // Do something with request error
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    const status = err.response?.status || 500;
    // we can handle global errors here
    switch (status) {
        // authentication (token related issues)
        case 401: {
            return Promise.reject(err);
        }

        // forbidden (permission related issues)
        case 403: {
            return Promise.reject(err);
        }

        // bad request
        case 400: {
            return Promise.reject(err);
        }

        // not found
        case 404: {
            return Promise.reject(err);
        }

        // conflict
        case 409: {
            return Promise.reject(err);
        }

        // unprocessable
        case 422: {
            return Promise.reject(err);
        }

        // generic api error (server related) unexpected
        default: {
            return Promise.reject(err);
        }
    }
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});


export default instance;