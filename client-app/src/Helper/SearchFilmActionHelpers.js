class SearchFilmAction {
  getNextLetter = (word) =>{
    return String.fromCharCode(word.charCodeAt(word.slice(0,1)) + 1);
  }

}

const searchFilmActionHelpers = new SearchFilmAction();

export default searchFilmActionHelpers;

