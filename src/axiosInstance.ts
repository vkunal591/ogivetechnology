import axios from 'axios';
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const axiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    },
});


// Add a request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const currentRoute = window.location.href;
        if (error.response && error.response.status === 401 && currentRoute.indexOf("login") == -1
        ) {
            // Handle unauthorized access
            // For example, redirect to login page
            localStorage.removeItem("token");
            window.location.href = 'admin/login';
        }
        return Promise.reject(error);
    }
);


export default axiosInstance;
