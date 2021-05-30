export const getTours = () => dispatch => {
  dispatch({ type: actionTypes.GET_TOURS });
};

export const getFeatures = () => dispatch => {
  dispatch({ type: actionTypes.GET_FEATURES });
};
