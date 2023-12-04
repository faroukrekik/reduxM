import { ADD_ACTION, DELETE_ACTION } from "./actionType";

export const deleteaction = (MovieID) => {
  return {
    type: DELETE_ACTION,
    payload: MovieID,
  };
};

export const addaction = (newFilms) => {
  return {
    type: ADD_ACTION,
    payload: newFilms,
  };
};
