<template>
  <v-app class="grey lighten-4">
    <v-divider></v-divider>
    <v-card flat>
      <v-toolbar dense flat height="30px" color="white" class="mb-1">app.user-create</v-toolbar>
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
        >{{ $t("craete_user") }}</v-toolbar-title>
        <v-spacer/>
        <v-btn @click="$router.push({ name: 'user-list' })" class="text-capitalize">Cancel</v-btn>
        <v-btn color="primary white--text" @click="save" class="text-capitalize">Save</v-btn>
      </v-toolbar>
      <v-divider/>
      <v-card flat>
        <v-container grid-list-xs>
          <form-error-messages :messages="errorMessage"/>
          <v-layout row justify-center pt-3>
            <v-flex md10>
              <!-- row 1 -->
              <v-layout row wrap>
                <v-flex pr-5 xs12 sm12 md6 lg6>
                  <v-text-field
                    v-validate="'required'"
                    autofocus
                    label="Full name"
                    v-model="item.fullName"
                    name="full name"
                    :error-messages="errors.collect('full name')"
                  />
                </v-flex>
                <v-flex pr-5 xs12 sm12 md6 lg6>
                  <v-text-field
                    label="Phone No"
                    v-validate="'required'"
                    v-model="item.phoneNo"
                    name="phone no"
                    :error-messages="errors.collect('phone no')"
                  />
                </v-flex>
                <v-flex pr-5 xs12 sm12 md6 lg6>
                  <v-text-field label="Other phone No" v-model="item.otherPhoneNo" name="phone no"/>
                </v-flex>
                <v-flex pr-5 xs12 sm12 md6 lg6>
                  <v-text-field
                    label="Telegram Account"
                    v-validate="'required'"
                    v-model="item.telegram_account"
                    name="telegram"
                    :error-messages="errors.collect('telegram')"
                  />
                </v-flex>
                <v-flex pr-5 xs12 sm12 md6 lg6>
                  <Select
                    :items="items"
                    label="Role type"
                    name="role type"
                    item-text="name"
                    item-value="id"
                    v-model="item.userRoleId"
                    @selected="selectBuilding"
                    :noData="noData"
                    :loading="isLoading"
                    :addNewBtn="addNewBtn"
                    @onNewItem="show"
                    @search="onRoleSearch"
                  />
                </v-flex>
                <v-flex pr-5 xs12 sm12 md6 lg6>
                  <v-text-field
                    label="Email"
                    v-validate="'required'"
                    v-model="item.email"
                    name="email"
                    :error-messages="errors.collect('email')"
                  />
                </v-flex>
                <v-flex pr-5 xs12>
                  <v-autocomplete
                    :items="buildings"
                    label="Building"
                    name="building"
                    item-text="building_name"
                    item-value="id"
                    v-model="item.buildingIds"
                    v-if="building"
                    :search-input.sync="search"
                    hide-selected
                    multiple
                    persistent-hint
                    small-chips
                  />
                </v-flex>
                <v-flex pr-5 xs12 sm12 md6 lg6>
                  <v-text-field
                    label="Password"
                    v-validate="'required'"
                    v-model="item.password"
                    type="password"
                    name="password"
                    :error-messages="errors.collect('password')"
                  />
                </v-flex>
                <v-flex pr-5 xs12 sm12 md6 lg6>
                  <v-text-field
                    label="Confirm password"
                    v-validate="'required'"
                    v-model="confirm_password"
                    type="password"
                    name="password"
                    :error-messages="errors.collect('password')"
                  />
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
import { RoleAPI, UserAccountAPI } from "@/api";
import Select from "@/shared/select/Select";

export default {
  data() {
    return {
      isLoading: false,
      noData: "No matching result ",
      items: [],
      itemId: "",
      isModalVisible: false,
      addNewBtn: "Add New Role",
      dialog: false,
      item: {},
      items: []
    };
  },
  components: {
    Select
  },
  async created() {
    this.onRoleSearch();
  },

  methods: {
    show(show) {
      this.dialog = show;
    },
    async onRoleSearch(val) {
      let f1 = {
        where: {
          name: { regexp: "/" + val + "/i" }
        }
      };

      let f2 = {
        limit: 3
      };
      let filter = val ? f1 : f2;
      this.items = (await RoleAPI.all(filter)).rows;
    },
    close(event) {
      this.dialog = false;
    },
    async save() {
      const valid = await this.$validator.validateAll();
      if (valid) {
        this.errorMessage = null;
        try {
          await UserAccountAPI.create(this.item);
          this.$notify({
            type: "success",
            title: this.$t("success"),
            message: `${this.$t(this.resourceName)} ${this.$t(
              "created"
            )} ${this.$t("successfully")}.`
          });
          location.reload(true);
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
