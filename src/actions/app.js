export const UPDATE_PAGE = 'UPDATE_PAGE';
export const UPDATE_OFFLINE = 'UPDATE_OFFLINE';
export const UPDATE_DRAWER_STATE = 'UPDATE_DRAWER_STATE';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';

export const navigate = path => dispatch => {
  // Extract the page name from path.
  const page = path === '/' ? 'search-page' : path.slice(1);

  // Any other info you might want to extract from the path (like page type),
  // you can do here
  dispatch(loadPage(page));

  // Close the drawer - in case the *path* change came from a link in the drawer.
  dispatch(updateDrawerState(false));
};

const loadPage = page => dispatch => {
  switch (page) {
    case 'search-page':
      import('../pages/search-page.js');
      break;
    case 'concept-matcher-page':
      import('../pages/concept-matcher-page.js');
      break;
    case 'escalations/new':
      import('../pages/escalations-new-page.js');
      break;
    case 'escalations/:id':
      import('../pages/escalations-show-page.js');
      break;
    case 'concepts/:id':
      import('../pages/concepts-show-page.js');
      break;
    case 'circumstances/:id':
      import('../pages/circumstances-show-page.js');
      break;
    default:
      page = '404';
      import('../pages/guide-page-missing.js');
  }

  dispatch(updatePage(page));
};

const updatePage = page => {
  return {
    type: UPDATE_PAGE,
    page,
  };
};

let snackbarTimer;

export const showSnackbar = () => dispatch => {
  dispatch({
    type: OPEN_SNACKBAR,
  });
  window.clearTimeout(snackbarTimer);
  snackbarTimer = window.setTimeout(
    () => dispatch({ type: CLOSE_SNACKBAR }),
    3000
  );
};

export const updateOffline = offline => (dispatch, getState) => {
  // Show the snackbar only if offline status changes.
  if (offline !== getState().app.offline) {
    dispatch(showSnackbar());
  }
  dispatch({
    type: UPDATE_OFFLINE,
    offline,
  });
};

export const updateDrawerState = opened => {
  return {
    type: UPDATE_DRAWER_STATE,
    opened,
  };
};
