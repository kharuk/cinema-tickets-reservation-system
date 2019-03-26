import moment from 'moment';

class SearchFilmAction {
  getNextLetter = (word) =>{
    return String.fromCharCode(word.charCodeAt(word.slice(0,1)) + 1);
  }

  getFilteredData = (filters, filmListRef) => { 
    if (filters.filmName) {
      filters.filmName = filters.filmName.toLowerCase();
      filmListRef = filmListRef.where("name", "==", filters.filmName);
    }
  
    if (filters.cinema) {
      filters.cinema = filters.cinema.toLowerCase();
      filmListRef = filmListRef.where("cinema", "==", filters.cinema);
    }

    if (filters.city) {
      filters.city = filters.city.toLowerCase();
      filmListRef = filmListRef.where("city", "==", filters.city);
    }
    
    return filmListRef;
  };

  filterByDate = (films, date) => {
    if (date.isAfter(moment(), 'day')){
    date.set({hour:0,minute:0,second:0,millisecond:0})
    date.format()
    }
    let statrDate = moment(date).unix();
    let endDate = moment(moment(date).endOf("day")).unix();
    let filteredFilms = Object.entries(films).filter((item) => {
      return item[1].date.seconds >= statrDate && item[1].date.seconds <= endDate ;
    })
    filteredFilms = filteredFilms.reduce((obj, item )=>{
      obj[item[0]] = item[1]
      return obj;
    }, {})
    return filteredFilms; 
  } 
}

const searchFilmActionHelpers = new SearchFilmAction();
export default searchFilmActionHelpers;

