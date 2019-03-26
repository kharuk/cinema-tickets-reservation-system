export const links = {
  MAIN_PAGE_PATH: '/',
  SIGN_UP_PAGE: '/account/signup',
  SIGN_IN_PAGE: '/account/login',
  FILM_SEARCH_PAGE: '/films',
  FILM_PAGE:`/films/:id`,
  SITES_SELECTION_PAGE: '/sites-selection',
  ORDERS_PAGE: '/profile',
  CURRENT_ORDERS_PAGE: '/profile/current-orders',
  PREVIOUS_ORDERS_PAGE: '/profile/previous-orders',
  PROFILE_PAGE: '/profile/account-settings'
}

export const linkGenerator = {
  getFilmPageLink :(id) => {
    return `/films/${id}`;
  }
}