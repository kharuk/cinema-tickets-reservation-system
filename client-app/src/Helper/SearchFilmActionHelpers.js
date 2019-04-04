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

  getFilteredData =  (filters, films) => { 
    if (films) {
      let filtredData = _.cloneDeep(films);
      if (!_.isArray(filtredData)) {
        filtredData = [filtredData];
      }
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

      if (filters.selectedCity) {
        filters.selectedCity = filters.selectedCity.toLowerCase();
        filtredData =  _.forEach(filtredData, function(item) {
          item.sessions = _.filter(item.sessions, function(item){
            return _.includes(item.cinema.location.toLowerCase(), filters.selectedCity);
          }) 
        });
      }

      filtredData = this.filterByDate(filtredData, filters.sessionDate);
      return filtredData;
    }    
  };

  filterByDate = (films, date) => {
    if (moment(date).isAfter(moment(), 'day')){
      date.set({hour:0,minute:0,second:0,millisecond:0})
      date.format()
    }
    let statrDate = moment(date);
    let endDate = moment(moment(date).endOf("day"));
    let filteredFilms = _.forEach(films, (item) => {
      item.sessions = _.filter(item.sessions, (item) =>
        moment(item.date).isSameOrAfter(statrDate) && moment(item.date).isSameOrBefore(endDate)
      )  
    })
    return filteredFilms; 
  } 

  getChosenFilmWithFiltredSession = (chosenFilmId, films, filters) => {
    const chosenFilm = _.find(films, {'film_id': chosenFilmId});
    const chosenFilmWithFiltredSession = this.getFilteredData(filters, chosenFilm);
    return chosenFilmWithFiltredSession && chosenFilmWithFiltredSession[0];
  } 
    
}

const searchFilmActionHelpers = new SearchFilmAction();
export default searchFilmActionHelpers;

