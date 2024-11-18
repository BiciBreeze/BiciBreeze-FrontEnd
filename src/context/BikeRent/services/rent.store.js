import { defineStore } from 'pinia';
import RentService from '@/context/BikeRent/services/rent.service.js';

export const useRentStore = defineStore('rent', {
    state: () => ({
        rentals: [],
        rental: null,
    }),
    actions: {
        async fetchRentals() {
            try {
                const response = await RentService.getRentals();
                this.rentals = response.data;
            } catch (error) {
                console.error('Failed to fetch rentals:', error);
            }
        },
        async fetchRentalById(rentalId) {
            try {
                const response = await RentService.getRentalById(rentalId);
                this.rental = response.data;
            } catch (error) {
                console.error('Failed to fetch rental:', error);
            }
        },
        async createRental(rentalRequest) {
            try {
                const response = await RentService.createRental(rentalRequest);
                this.rentals.push(response.data);
            } catch (error) {
                console.error('Failed to create rental:', error);
            }
        },
        async updateRental(rentalId, rentalRequest) {
            try {
                const response = await RentService.updateRental(rentalId, rentalRequest);
                const index = this.rentals.findIndex(rental => rental.id === rentalId);
                if (index !== -1) {
                    this.rentals[index] = response.data;
                }
            } catch (error) {
                console.error('Failed to update rental:', error);
            }
        },
        async deleteRental(rentalId) {
            try {
                await RentService.deleteRental(rentalId);
                this.rentals = this.rentals.filter(rental => rental.id !== rentalId);
            } catch (error) {
                console.error('Failed to delete rental:', error);
            }
        },
    },
});