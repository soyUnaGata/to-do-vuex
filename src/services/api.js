import axios from "axios";

const instance = axios.create({
    baseURL: "https://649aaf8cbf7c145d02394de0.mockapi.io/api/v1",
    headers: {'content-type':'application/json'}
});

export default instance;