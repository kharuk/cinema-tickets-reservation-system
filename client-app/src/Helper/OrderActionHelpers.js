import reservationServise from '../services/ReservationServices';
import moment from 'moment';

class OrderAction {

  formOrder = (session, chosenSeats, chosenExtraServices) => {
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
      chosenExtraServices
    }
    return data
  }

  sortOrdersByDate = (orders) => {
    let currentOrders = [];
    let previousOrders = [];
    orders && orders.forEach(order => {
      if (moment(order.date) >= moment()){
        currentOrders.push(order);
      } else {
        previousOrders.push(order);
      }
    });
    return ({currentOrders, previousOrders})
  }

}

const orderActionHelpers = new OrderAction();
export default orderActionHelpers;



