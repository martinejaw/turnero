const baseUrl = 'http://localhost:3000';

export const ApiPaths = {
  login: baseUrl + '/auth/login',
  signup: baseUrl + '/auth/signup',
  retrieveState: baseUrl + '/auth/retrieve-state',
  branches: baseUrl + '/branches',
  sections: baseUrl + '/sections',
};
