export class RentalRequest {
    static counter = 1;

    constructor(bikeType, pickupDateTime, dropoffDateTime, phoneNumber) {
        this.id = RentalRequest.counter++;
        this.bikeType = bikeType.value;
        this.pickupDateTime = pickupDateTime;
        this.dropoffDateTime = dropoffDateTime;
        this.phoneNumber = phoneNumber.value;
        this.status = 0; // default status
        this.createdAt = new Date().toISOString();
        this.updatedAt = new Date().toISOString();
    }
}