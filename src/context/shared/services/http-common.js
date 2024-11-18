import axios from "axios";
import {authenticationInterceptor} from "../../iam/services/authentication.interceptor.js";
import {rentInterceptor} from "@/context/BikeRent/services/rent.interceptor.js";

const API_BASE_URL = 'http://localhost:5108';

const http = axios.create({
    baseURL: API_BASE_URL,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}
});

// Add authentication interceptor
http.interceptors.request.use(authenticationInterceptor);
http.interceptors.request.use(rentInterceptor);

// Export the http object
export default http;