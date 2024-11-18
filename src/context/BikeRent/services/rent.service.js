
import http from "../../shared/services/http-common.js";

class RentService {
    createRental(rentalRequest) {
        return http.post('api/rental', rentalRequest);
    }
}

export default new RentService();
