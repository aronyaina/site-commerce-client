import axios from "axios";

axios.interceptors.request.use(
    function(config) {
        config.baseURL = "api/";
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
const action = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch,
}
export default action;