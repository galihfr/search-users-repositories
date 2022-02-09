import { SEARCH_USER_GITHUB, SEARCH_REPOSITORIES_GITHUB, RESET_RESULT_SEARCH } from '../actions/SearchEngineAction';

const initialState = {
    profile: {},
    repositories: [],
    isLoading: false,
    errorMessage: false,
};

const SearchEngineReducer = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_USER_GITHUB:
        return {
          ...state,
          profile: action.payload.data,
          errorMessage: action.payload.errorMessage
        };

      case SEARCH_REPOSITORIES_GITHUB:
        return {
          ...state,
          repositories: action.payload.data,
        };

      case RESET_RESULT_SEARCH:
        return {
          profile: {},
          repositories: [],
        };
  
      default:
        return state;
    }
  };
  
  export default SearchEngineReducer;
  