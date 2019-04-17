import moment from "moment";
import _ from "lodash";

class SearchFilmAction {
  getNextLetter = word => {
    return String.fromCharCode(word.charCodeAt(word.slice(0, 1)) + 1);
  };

  capitalizeFirstLatter = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  getTimeFromDate = date => {
    return moment(date).format("hh:mm a");
  };

  getFormatedDate = date => {
    return moment(date).format("MM/DD/YYYY");
  };

  getFilteredData = (filters, films) => {
    if (films) {
      let filtredData = _.cloneDeep(films);
      if (!_.isArray(filtredData)) {
        filtredData = [filtredData];
      }
      if (filters.filmName) {
        filters.filmName = filters.filmName.toLowerCase();
        filtredData = _.filter(filtredData, function(item) {
          return _.includes(
            item.film_info.filmName.toLowerCase(),
            filters.filmName
          );
        });
      }

      if (filters.cinema) {
        filters.cinema = filters.cinema.toLowerCase();
        filtredData = _.forEach(filtredData, function(item) {
          item.sessions = _.filter(item.sessions, function(item) {
            return _.startsWith(
              item.cinema.cinemaName.toLowerCase(),
              filters.cinema
            );
          });
        });
      }

      if (filters.selectedCity) {
        filters.selectedCity = filters.selectedCity.toLowerCase();
        filtredData = _.forEach(filtredData, function(item) {
          item.sessions = _.filter(item.sessions, function(item) {
            return _.includes(
              item.cinema.location.toLowerCase(),
              filters.selectedCity
            );
          });
        });
      }

      if (filters.countOfSeats) {
        filtredData = _.forEach(filtredData, function(item) {
          item.sessions = _.filter(item.sessions, function(item) {
            return item.seatsAvailable >= filters.countOfSeats;
          });
        });
      }

      filtredData = this.filterByDate(filtredData, filters.sessionDate);
      return filtredData;
    }
  };

  filterByDate = (films, date) => {
    if (moment(date).isAfter(moment(), "day")) {
      date = moment(date).set({
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
      });
      date = moment(date).format();
    }
    const startDate = moment(date);
    const endDate = moment(moment(date).endOf("day"));
    const filteredFilms = _.forEach(films, item => {
      item.sessions = _.filter(
        item.sessions,
        item =>
          moment(item.date).isSameOrAfter(startDate) &&
          moment(item.date).isSameOrBefore(endDate)
      );
    });
    return filteredFilms;
  };

  getChosenFilmWithFiltredSession = (chosenFilmId, films, filters) => {
    const chosenFilm = _.find(films, { _id: chosenFilmId });
    const chosenFilmWithFiltredSession = this.getFilteredData(
      filters,
      chosenFilm
    );
    return chosenFilmWithFiltredSession && chosenFilmWithFiltredSession[0];
  };

  getFilmSearchLists = films => {
    // debugger;
    const filmList = [];
    const cinemaList = [];
    const cityList = [];
    _.forEach(films, film => {
      if (film.sessions.length > 0) {
        filmList.push(film.film_info.filmName);
        _.forEach(film.sessions, session => {
          if (moment(session.date).isSameOrAfter(moment())) {
            if (cinemaList.indexOf(session.cinema.cinemaName) === -1) {
              cinemaList.push(session.cinema.cinemaName);
            }
            if (cityList.indexOf(session.cinema.location) === -1) {
              cityList.push(session.cinema.location);
            }
          }
        });
      }
    });
    return {
      filmList,
      cinemaList,
      cityList
    };
  };
}

const searchFilmActionHelpers = new SearchFilmAction();
export default searchFilmActionHelpers;
