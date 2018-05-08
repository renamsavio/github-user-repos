export const GET_REPOS = 'github-user-repos/repos/LOAD';
export const GET_REPOS_SUCCESS = 'github-user-repos/repos/LOAD_SUCCESS';
export const GET_REPOS_FAIL = 'github-user-repos/repos/LOAD_FAIL';

export function reducer(state ={ repos: []}, action) {
  switch(action.type) {
    case GET_REPOS:
      return { ...state, loading: true };
    case GET_REPOS_SUCCESS:
      return {...state, loading: false, repos: action.payload.data};
    case GET_REPOS_FAIL:
      return {...state,loading: false, error: 'Error while fetching repositories'};
    default:
      return state;
  }
}