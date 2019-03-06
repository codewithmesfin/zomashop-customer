<template>
  <v-app class="grey lighten-4">
    <v-card flat>
      <v-toolbar dense flat height="30px" color="white" class="mb-1">app.user-update</v-toolbar>
    </v-card>
    <v-toolbar-title class="mt-2">user</v-toolbar-title>
    <div class="ma-3" style="border:1px solid lightgray;border-radius:3px">
      <v-toolbar dense flat class="elevation-1 white">
        <v-tooltip bottom>
          <v-btn slot="activator" icon @click="$router.push({ name: 'user-list' })">
            <v-icon>arrow_back</v-icon>
          </v-btn>
          <span>{{ $t("go back") }}</span>
        </v-tooltip>
        <v-toolbar-title
          class="blue-grey--text text--darken-2 font-weight-bold"
        >{{ $t("update_user") }}</v-toolbar-title>
      </v-toolbar>
      <v-divider/>
      <v-card flat>
        <v-container grid-list-xs>
          <form-error-messages :messages="errorMessage"/>
          <v-layout row justify-center pt-3>
            <v-flex md10>
              <!-- row 1 -->
              <v-layout row wrap>
                <v-flex pr-5 xs6>
                  <v-text-field
                    v-validate="'required'"
                    autofocus
                    label="Full name"
                    v-model="item.fullName"
                    name="full name"
                    :error-messages="errors.collect('full name')"
                  />
                </v-flex>
                <v-flex pr-5 xs6>
                  <v-text-field
                    label="Phone No"
                    v-validate="'required'"
                    v-model="item.phoneNo"
                    name="phone no"
                    :error-messages="errors.collect('phone no')"
                  />
                </v-flex>
                <v-flex pr-5 xs6>
                  <v-text-field label="Phone No" v-model="item.otherPhoneNo" name="phone no"/>
                </v-flex>
                <v-flex pr-5 xs6>
                  <v-text-field label="Telegram Account" v-model="item.telegram_account"/>
                </v-flex>
                <v-flex pr-5 xs6>
                  <v-select
                    :items="roles"
                    label="Role type"
                    v-validate="'required'"
                    v-model="item.userRoleId"
                    item-text="name"
                    item-value="id"
                    name="role type"
                    :error-messages="errors.collect('role type')"
                  />
                </v-flex>
                <v-flex pr-5 xs6>
                  <v-text-field
                    label="Email"
                    v-validate="'required'"
                    v-model="item.email"
                    name="email"
                    :error-messages="errors.collect('email')"
                  />
                </v-flex>
                <v-flex pr-5 xs6>
                  <v-text-field
                    label="Password"
                    v-validate="'required'"
                    v-model="item.password"
                    type="password"
                    name="password"
                    :error-messages="errors.collect('password')"
                  />
                </v-flex>
                <v-flex pr-5 xs6>
                  <v-text-field
                    label="Confirm password"
                    v-validate="'required'"
                    v-model="confirm_password"
                    type="password"
                    name="password"
                    :error-messages="errors.collect('password')"
                  />
                </v-flex>
                <v-flex pr-5 xs12>
                  <div class="text-xs-right">
                    <v-btn
                      @click="$router.push({ name: 'user-list' })"
                      class="text-capitalize"
                    >Cancel</v-btn>
                    <v-btn color="purple white--text" @click="save" class="text-capitalize">Save</v-btn>
                  </div>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import { UserAccountAPI } from "@/api/";
import { RoleAPI } from "@/api";

export default {
  data() {
    return {
      resourceName: "User Account",
      item: {},
      confirm_password: "",
      items: [],
      roles: []
    };
  },

  async created() {
    const { userId } = this.$route.params;
    this.item = await UserAccountAPI.get(userId);
    this.roles = (await RoleAPI.all()).rows;
  },

  methods: {
    async save() {
      const valid = await this.$validator.validateAll();
      if (valid) {
        this.errorMessage = null;
        try {
          await UserAccountAPI.update(this.item);
          this.item = {};
          this.$notify({
            type: "success",
            title: this.$t("success"),
            message: `${this.$t(this.resourceName)} ${this.$t(
              "updated"
            )} ${this.$t("successfully")}.`
          });
          this.$router.push({ name: "user-list" });
        } catch (err) {
          if (err.statusCode === 422) {
            const { messages } = err.details;
            this.errorMessage = messages;
          }
        }
      }
    }
  }
};
</script>

<style>
</style>
