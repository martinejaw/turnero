import * as userActions from './user/user.actions';
import * as branchesActions from './branches/branches.actions';
// import * as sectionsActions from './sections/sections.actions';

export const adminActions = {
  ...userActions,
  ...branchesActions,
};
