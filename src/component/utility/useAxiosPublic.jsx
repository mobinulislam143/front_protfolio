import axios from 'axios';

const backendUrl = `https://protfolio-backend-wbgd.onrender.com`;

const axiosPublic = axios.create({
    baseURL: backendUrl  
});

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
