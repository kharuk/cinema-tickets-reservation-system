import reservationServise from '../services/ReservationServices';

class OrderAction {

  formOrder = (session, chosenSeats, chosenExtraServices) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const price = reservationServise.countTotalPrice(
      chosenSeats, 
      chosenExtraServices, 
      session.session_info.seat_type, 
      session.session_info.extra_services
    )
    const data ={
      filmName: session.film.film_info.filmName,
      cinema: session.cinema.cinemaName,
      location: session.cinema.location,
      date: session.date,
      price,
      chosenSeats,
      chosenExtraServices,
      user_id: user._id
    }
    return data
  }

}

const orderActionHelpers = new OrderAction();
export default orderActionHelpers;



