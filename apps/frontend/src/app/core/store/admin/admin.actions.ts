import * as userActions from './user/user.actions';
import * as branchesActions from './branches/branches.actions';
import * as sectionsActions from './sections/sections.actions';
import * as appointmentGroupActions from './appointmentGroups/appointment-group.actions';

export const adminActions = {
  ...userActions,
  ...branchesActions,
  ...sectionsActions,
  ...appointmentGroupActions,
};
