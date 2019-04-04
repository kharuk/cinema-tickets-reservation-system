import { createSelector } from 'reselect';
import searchFilmActionHelpers from '../helper/SearchFilmActionHelpers';

const getFilmFilters = (state) => state.filters;
const getFilms = (state) => state.films;

export const getFiltredFilms = createSelector(
    [getFilmFilters, getFilms],
    (filmFilters, films) => 
      searchFilmActionHelpers.getFilteredData(filmFilters, films)
  )

const getChosenFilmId = (state) => state.chosenFilm;
export const getChosenFilm = createSelector(
    [getChosenFilmId, getFilms, getFilmFilters],
    (chosenFilmId, films, filmFilters) => 
      searchFilmActionHelpers.getChosenFilmWithFiltredSession(chosenFilmId, films, filmFilters)
  )