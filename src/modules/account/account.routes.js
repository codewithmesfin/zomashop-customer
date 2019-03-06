import PasswordResetRequests from "./PasswordResetRequests.vue";
import UserAccountList from "./user-account/UserAccountList.vue";
import UserAccountCreate from "./user-account/UserAccountCreate.vue";
import UserAccountUpdate from "./user-account/UserAccountUpdate.vue";

import UserProfile from "./UserProfile.vue";

export default [
  {
    path: "account/profile",
    name: "user-profile",
    component: UserProfile,
    meta: {
      allowedUserRoles: [
        "Committee Officer",
        "Question Organizing Team",
        "Question Receiving Team"
      ]
    }
  },

  {
    path: "account/password-reset-requests",
    name: "password-reset-requests",
    component: PasswordResetRequests
  },
  {
    path: "account/users",
    name: "user-list",
    component: UserAccountList
  },
  {
    path: "account/users/new",
    name: "user-create",
    component: UserAccountCreate
  },
  {
    path: "account/users/:userId/update",
    name: "user-update",
    component: UserAccountUpdate
  }
];
