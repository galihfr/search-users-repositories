import axios from 'axios';

export const  SEARCH_USER_GITHUB = 'SEARCH_USER_GITHUB';
export const SEARCH_REPOSITORIES_GITHUB = 'SEARCH_REPOSITORIES_GITHUB';
export const RESET_RESULT_SEARCH = 'RESET_RESULT_SEARCH';

export const getResultSearch = (userName) => {
    return (dispatch) => {
      axios({
        method: 'GET',
        url: `https://api.github.com/users/${userName}`,
      })
        .then((res) => {
            dispatch({
                type: SEARCH_USER_GITHUB,
                payload: {
                    loading: false,
                    data: res.data,
                    errorMessage: false,
                  },
              });
        })
        .then(() => axios({method: 'GET', url: `https://api.github.com/users/${userName}/repos`}))
        .then((res) => {
          dispatch({
            type: SEARCH_REPOSITORIES_GITHUB,
              payload: {
                  loading: false,
                  data: res.data,
                  errorMessage: false,
                },
          });
        })
        .catch(() => {
          dispatch({
            type: SEARCH_USER_GITHUB,
            payload: {
              loading: false,
              data: false,
              errorMessage: true,
            },
          });
        });
    };
  };

export const resetResultSearch = () => {
  return (dispatch) => {
    dispatch({
      type: RESET_RESULT_SEARCH,
    });
  };
};