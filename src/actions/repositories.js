import { GET_REPOS } from '../reducers';

export const listRepositories = (user) => {
  return {
    type: GET_REPOS,
    payload: {
      request: {
        url: `/users/${user}/repos`
      }
    }
  };
}