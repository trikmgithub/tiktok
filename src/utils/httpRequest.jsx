import axios from 'axios';
import.meta.env;

const httpRequest = axios.create({
    baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}`,
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default httpRequest;
