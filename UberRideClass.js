//write a class to calculate the Uber price.

class UberRide {
    constructor(baseFare, costPerMinute, costPerMile, bookingFee) {
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
        this.bookingFee = bookingFee;
    }

    calculatePrice(durationInMinutes, distanceInMiles) {
        const timeCharge = this.costPerMinute * durationInMinutes;
        const distanceCharge = this.costPerMile * distanceInMiles;
        const subtotal = this.baseFare + timeCharge + distanceCharge;
        const total = subtotal + this.bookingFee;

        return total // Rounds to two decimal places for currency formatting
    }
}

// Example usage:
const baseFare = 2.00; // Starting fare
const costPerMinute = 0.35; // Cost per minute of the ride
const costPerMile = 1.75; // Cost per mile of the ride
const bookingFee = 1.50; // Fixed booking fee for ride

let ride = new UberRide(baseFare, costPerMinute, costPerMile, bookingFee);
let duration = 30; // Ride duration in minutes
let distance = 10; // Ride distance in miles

console.log(`The total price of the ride is: ${ride.calculatePrice(duration, distance)}`);