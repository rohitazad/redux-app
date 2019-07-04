import { ADD_ARTICLE } from "../../Constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}
