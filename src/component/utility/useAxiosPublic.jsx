import axios from 'axios';

const backendUrl = `https://protfolio-server-omega.vercel.app`;

const axiosPublic = axios.create({
    baseURL: backendUrl  
});

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
