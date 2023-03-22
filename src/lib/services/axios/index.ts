import axios from 'axios';

const axiosInstance = axios.create();

// implements axios interceptors - refresh token for example

export { axiosInstance };