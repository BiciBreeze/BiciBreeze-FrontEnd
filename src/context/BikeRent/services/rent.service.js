import http from "../../shared/services/http-common.js";

class RentService {
    createRental(rentalRequest, token) {
        return http.post('api/rental', rentalRequest, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
}

export default new RentService();