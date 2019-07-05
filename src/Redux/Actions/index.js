import {
  ADD_ARTICLE,
  DATA_LOADED,
  DATA_REQUESTED
} from "../../Constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

// React Redux : asynchronous actions in Redux, the naive way

// export function getData() {
//   debugger;
//   return function(dispatch) {
//     return fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(res => res.json())
//       .then(json => dispatch({ type: DATA_LOADED, payload: json }));
//   };
// }
export function getData() {
  return { type: DATA_REQUESTED };
}
