import http from "../../shared/services/http-common.js";

export class AuthenticationService {
    signIn(signInRequest) {
        return http.post('/api/v1/authentication/sign-in', signInRequest);
    }

    signUp(signUpRequest) {
        return http.post('/api/v1/authentication/sign-up', signUpRequest);
    }
}