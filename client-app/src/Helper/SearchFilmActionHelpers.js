import moment from 'moment';

class SearchFilmAction {
  getNextLetter = (word) =>{
    return String.fromCharCode(word.charCodeAt(word.slice(0,1)) + 1);
  }

  getFilteredDate = (filters, filmListRef) => {
  
    if (filters.filmName) {
      filters.filmName = filters.filmName.toLowerCase();
      /* let nextLetterInFilm = searchFilmActionHelpers.getNextLetter(filters.filmName);
      queryFilmName = queryFilmName.where('name', '>=', filters.filmName).where('name', '<=', nextLetterInFilm); */ 
      filmListRef = filmListRef.where("name", "==", filters.filmName);
    }
  
    if (filters.cinema) {
      filters.cinema = filters.cinema.toLowerCase();
      /* let nextLetterInCinema = searchFilmActionHelpers.getNextLetter(filters.cinema);
      queryCinema = queryCinema.where('cinema', '>=', filters.cinema).where('cinema', '<=', nextLetterInCinema);  */
      filmListRef = filmListRef.where("cinema", "==", filters.cinema);
    }
  
  
    if (filters.city) {
      filters.city = filters.city.toLowerCase();
      /* let nextLetterInCity = searchFilmActionHelpers.getNextLetter(filters.city);
      queryCity = queryCity.where('city', '>=', filters.city).where('city', '<=', nextLetterInCity); */ 
      filmListRef = filmListRef.where("city", "==", filters.city);
    }

    if (filters.date) {

      let date = moment(filters.date).format("X");
    //  let date1 = moment(filters.date).format("YYYY:MM:DD");
    //  console.log(date1);
      let date2 = moment(filters.date).add(1, "day");
      date2 = moment(date2).format("X");
    //  filmListRef = filmListRef.where("date", ">=", date)/* .where("date", "<", date2) */;
    }
    return filmListRef;
  };

}

const searchFilmActionHelpers = new SearchFilmAction();

export default searchFilmActionHelpers;

