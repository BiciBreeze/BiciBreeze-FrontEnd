export class RentalRequest {
    constructor(bikeType, pickupDate, pickupTime, dropoffDate, dropoffTime, phoneNumber) {
        this.bikeType = bikeType;
        this.pickupDate = pickupDate;
        this.pickupTime = pickupTime;
        this.dropoffDate = dropoffDate;
        this.dropoffTime = dropoffTime;
        this.phoneNumber = phoneNumber;
    }
}