import { create } from "zustand";
import useAxiosPublic from "../utility/useAxiosPublic";
import axios from "axios";

const axiosPublic = useAxiosPublic();

const backendUrl = `https://protfolio-backend-re1g.onrender.com`


const ApiStore = create((set) => ({


    getIntroDetails: [],
    getIntroRequest: async () => {
        try {
            const res = await axios.get(`${backendUrl}/api/getintro`);
            if (res.data.status === "success") {
                console.log("My Name is Mobinul Islam Mahi")
                set({ getIntroDetails: res.data["data"] });

            } else {
                console.error("Failed to fetch intro data");
            }
        } catch (error) {
            console.error("Error fetching intro data", error);
        }
    },
    getBlogs: [],
    getblogRequest: async () => {
        try {
            const res = await axiosPublic.get(`/api/getblogs`);
            if (res.data.status === "success") {
                set({ getBlogs: res.data["data"] });

            } else {
                console.error("Failed to fetch intro data");
            }
        } catch (error) {
            console.error("Error fetching intro data", error);
        }
    },
    getBlogDetails: [],
    getblogDetailsRequest: async (id) => {
        try {
            const res = await axiosPublic.get(`/api/getblog/${id}`);
            if (res.data.status === "success") {
                set({ getBlogDetails: res.data["data"] });

            } else {
                console.error("Failed to fetch intro data");
            }
        } catch (error) {
            console.error("Error fetching intro data", error);
        }
    },
    getEducation: [],
    getEducationRequest: async () => {
        try {
            const res = await axiosPublic.get(`/api/geteducations`);
            if (res.data.status === "success") {
                set({ getEducation: res.data["data"] });

            } else {
                console.error("Failed to fetch intro data");
            }
        } catch (error) {
            console.error("Error fetching intro data", error);
        }
    },
    frontendSkills: [],
    getfrontendskillsRequest: async () => {
        try {
            const res = await axiosPublic.get(`/api/getfrontendskills`);
            if (res.data.status === "success") {
                console.log('My frontend skills in', res.data['data'][0].frontendskills);
                set({ frontendSkills: res.data['data'][0].frontendskills });
    
            } else {
                console.error("Failed to fetch intro data");
            }
        } catch (error) {
            console.error("Error fetching intro data", error);
        }
    },
    
    backendSkills: [],
    getbackendskillsRequest: async () => {
        try {
            const res = await axiosPublic.get(`/api/getbackendskills`);
            if (res.data.status === "success") {
                set({ backendSkills: res.data["data"] });

            } else {
                console.error("Failed to fetch intro data");
            }
        } catch (error) {
            console.error("Error fetching intro data", error);
        }
    },

    getExperience: [],
    getExperienceRequest: async () => {
        try {
            const res = await axiosPublic.get(`/api/getexperiences`);
            if (res.data.status === "success") {
                set({ getExperience: res.data["data"] });

            } else {
                console.error("Failed to fetch intro data");
            }
        } catch (error) {
            console.error("Error fetching intro data", error);
        }
    },
    getGallery: [],
    getGalleryRequest: async () => {
        try {
            const res = await axiosPublic.get(`/api/getgalleries`);
            if (res.data.status === "success") {
                set({ getGallery: res.data["data"] });

            } else {
                console.error("Failed to fetch intro data");
            }
        } catch (error) {
            console.error("Error fetching intro data", error);
        }
    },
    getPortfolio: [],
    getPortfolioRequest: async () => {
        try {
            const res = await axiosPublic.get(`/api/getportfolios`);
            if (res.data.status === "success") {
                set({ getPortfolio: res.data["data"] });

            } else {
                console.error("Failed to fetch intro data");
            }
        } catch (error) {
            console.error("Error fetching intro data", error);
        }
    },
    getServiceList: [],
    getServiceRequest: async () => {
        try {
            const res = await axios.get(`${backendUrl}/api/getservices`);
            if (res.data.status === "success") {
                set({ getServiceList: res.data["data"] });

            } else {
                console.error("Failed to fetch intro data");
            }
        } catch (error) {
            console.error("Error fetching intro data", error);
        }
    },


}));

export default ApiStore;
