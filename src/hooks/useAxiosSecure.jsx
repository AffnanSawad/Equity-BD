import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://equity-bd-server.vercel.app'
})
const useAxiosSecure = () => {

    return axiosSecure;
};

export default useAxiosSecure;