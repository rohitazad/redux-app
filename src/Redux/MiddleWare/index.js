import { ADD_ARTICLE, FOUND_BAD_WORD } from "../../Constants/action-types";
const forbiddenWords = ["spam", "money", "free"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      //
      //debugger;
      if (action.type === ADD_ARTICLE) {
        //debugger;
        const foundWord = forbiddenWords.filter(word => {
          return action.payload.title.includes(word);
        });
        if (foundWord.length > 0) {
          //debugger;
          action.type = FOUND_BAD_WORD;
          action.payload.state = FOUND_BAD_WORD;
          return dispatch(action);
        }
      }
      return next(action);
    };
  };
}
