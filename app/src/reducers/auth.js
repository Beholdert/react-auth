import { AUTH_USER } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { test: "Redux test" };
    default:
      return state;
  }
};
