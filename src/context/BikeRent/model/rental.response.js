export class RentalResponse {
    constructor(reservationId, bikeType, pickupDate, pickupTime, dropoffDate, dropoffTime, phoneNumber, status) {
        this.reservationId = reservationId;
        this.bikeType = bikeType;
        this.pickupDate = pickupDate;
        this.pickupTime = pickupTime;
        this.dropoffDate = dropoffDate;
        this.dropoffTime = dropoffTime;
        this.phoneNumber = phoneNumber;
        this.status = status;
    }
}