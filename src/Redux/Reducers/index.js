import { ADD_ARTICLE, FOUND_BAD_WORD } from "../../Constants/action-types";

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
  if (action.type === ADD_ARTICLE) {
    //debugger;
    //state.articles.push(action.payload);
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  if (action.type === FOUND_BAD_WORD) {
    //debugger;
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
};

export default rootReducer;
