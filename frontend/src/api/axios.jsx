import axios from 'axios';

const API = axios.create({
        baseURL: 'http://localhost:5000',
});

// Attach token from localStorage to every request if present
API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = `Bearer ${token}`;
        }
        // Debug: log token presence and outgoing headers
        try {
            // eslint-disable-next-line no-console
            console.debug('API request', config.method, config.url, 'tokenPresent=', !!token, 'headers=', config.headers);
        } catch (e) {
            // ignore logging errors
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default API;