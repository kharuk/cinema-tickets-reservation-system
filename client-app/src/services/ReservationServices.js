class ReservationServise{
    
  countTotalPrice = (chosenSeats, chosenExtraServices, sessionSeatTypes, extraServices) => {
    let priceOfTickets = chosenSeats.reduce((sum, current) => 
    sum + sessionSeatTypes[current.type], 0);

    let priceOfExtraServices = Object.keys(chosenExtraServices).reduce((sum, current) =>
    sum + chosenExtraServices[current]*extraServices[current], 0);
    let totalPrice = priceOfTickets + priceOfExtraServices;
    return {priceOfTickets, priceOfExtraServices, totalPrice};
  }
}

const reservationServise = new ReservationServise();

export default reservationServise;