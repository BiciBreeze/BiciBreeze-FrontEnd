export class RentalRequest {
    static counter = 1;

    constructor(bikeType, pickupDate, pickupTime, dropoffDate, dropoffTime, phoneNumber) {
        this.id = RentalRequest.counter++;
        this.bikeType = bikeType;
        this.pickupDate = pickupDate;
        this.pickupTime = pickupTime;
        this.dropoffDate = dropoffDate;
        this.dropoffTime = dropoffTime;
        this.phoneNumber = phoneNumber;
        this.status = 0; // default status
        this.createdAt = new Date().toISOString();
        this.updatedAt = new Date().toISOString();
    }
}