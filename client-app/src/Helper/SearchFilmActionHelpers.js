import moment from 'moment';
import _ from 'lodash';

class SearchFilmAction {
  getNextLetter = (word) =>{
    return String.fromCharCode(word.charCodeAt(word.slice(0,1)) + 1);
  }

  capitalizeFirstLatter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  getTimeFromDate = (date) =>{
    return moment(date).format("hh:mm a");
  }

  getFormatedDate = (date) =>{
    return moment(date).format("MM/DD/YYYY");
  }

  

  getFilteredData = (filters, films) => { 
    let filtredData = JSON.parse(JSON.stringify(films))
    if (filters.filmName) {
      filters.filmName = filters.filmName.toLowerCase();
      filtredData =  _.filter(filtredData, function(item) {
        return _.includes(item.film_info.filmName.toLowerCase(), filters.filmName);
      });
    }
  
    if (filters.cinema) {
      filters.cinema = filters.cinema.toLowerCase();
      filtredData =  _.forEach(filtredData, function(item) {
        item.sessions = _.filter(item.sessions, function(item){
          return _.startsWith(item.cinema.cinemaName.toLowerCase(), filters.cinema);
        })      
      });
    }

    if (filters.city) {
      filters.city = filters.city.toLowerCase();
      filtredData =  _.forEach(filtredData, function(item) {
        item.sessions = _.filter(item.sessions, function(item){
          return _.includes(item.cinema.location.toLowerCase(), filters.city);
        }) 
      });
    }

    filtredData = this.filterByDate(filtredData, filters.date);
    
    return filtredData;
  };



  filterByDate = (films, date) => {
    if (date.isAfter(moment(), 'day')){
    date.set({hour:0,minute:0,second:0,millisecond:0})
    date.format()
    }
    let statrDate = moment(date).unix();
    let endDate = moment(moment(date).endOf("day")).unix();
    let filteredFilms = _.forEach(films, (item) => {
      item.sessions = _.filter(item.sessions, function(item){
        return moment(item.date).unix() >= statrDate && moment(item.date).unix() <= endDate ;
      })  
    })
    return filteredFilms; 
  } 

  filterByCity = (sessions, city) => {
    city = city.toLowerCase();
    return _.filter(sessions, { 'location': city });
  }

}

/* 

export const fetchFilmList = (filter) =>
    delay(500)
        .then(() => {
            let filteredList = [];
            filmDatabase
            .forEach(film => {
                if (film.title.indexOf(filter.filmName) !== -1 || !filter.filmName){
                    let filteredFilm = {...film};
                    film
                        .cities
                        .forEach(city => {
                            if (city.name === filter.city) {
                                var filteredCinemas = filterCinemas(city, filter);
                                if (filteredCinemas.length > 0){
                                    var filteresCities = {
                                        ...city,
                                        cinemas: filteredCinemas
                                    };
                                    filteredFilm = {
                                        ...film,
                                        cities: filteresCities
                                    }
                                    filteredList.push(filteredFilm);
                                }
                            }
                        });
                }
            });
            return filteredList;
        })

const filterCinemas = (city, filter) => {
    var filteredCinemas = [];
    city
        .cinemas
        .forEach(cinema => {
            if (cinema.name === filter.cinema || !filter.cinema) {
                var filteredHallsSchedule = filterSchedule(cinema, filter);
                if (filteredHallsSchedule.length > 0){
                    filteredCinemas.push({
                        ...cinema,
                        halls: filteredHallsSchedule
                    });
                }
            }
        })

    return filteredCinemas;
}

const filterSchedule = (cinema, filter) => {
    var filteredHalls = [];
    cinema
        .halls
        .forEach(hall => {
            var filteredHallSchedule = hall
                .schedule
                .filter(seance =>
                    seance.dateTime.year() === filter.date.getFullYear() &&
                    seance.dateTime.month() === filter.date.getMonth() &&
                    seance.dateTime.date() === filter.date.getDate() &&
                    hall.seatAmount - seance.occupiedSeats.length >= filter.freeSeats)
            if (filteredHallSchedule.length > 0){
                filteredHalls.push({
                    ...hall,
                    schedule: filteredHallSchedule
                })
            }
        })

    return filteredHalls;
}
 */
const searchFilmActionHelpers = new SearchFilmAction();
export default searchFilmActionHelpers;

