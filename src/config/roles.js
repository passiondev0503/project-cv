const allRoles = {
  user: ['getCvs', 'manageCvs', 'manageUploads', 'getUploads', 'manageTemplates', 'getTemplates'],
  admin: ['getUsers', 'manageUsers'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
