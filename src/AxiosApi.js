import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://example-d8239.firebaseio.com'
});

    axiosApi.interceptors.request.use(req=> {
        console.log(req);
        return req;
    });
    axiosApi.interceptors.response.use(res=> {
        console.log('res' ,res);
        return res;
    });

export default axiosApi;