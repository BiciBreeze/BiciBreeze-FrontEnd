import { useAuthenticationStore } from "../../iam/services/authentication.store.js";

/**
 * Interceptor to add authentication token to rental-related API requests
 *
 * @summary
 * This interceptor adds the authentication token to the headers of rental-related API requests.
 * @param config - The Axios request configuration
 * @returns {Promise<AxiosRequestConfig>}
 */

export const rentInterceptor = (config) => {
    const authenticationStore = useAuthenticationStore();
    const token = authenticationStore.currentToken;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
};