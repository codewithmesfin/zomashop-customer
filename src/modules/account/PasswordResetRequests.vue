<template>
  <div>
    <v-container fluid class="pb-0">
      <v-layout>
        <v-flex xs12>
          <div class="headline font-weight-thin">{{ $t("password_reset_requests") }}</div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="pt-2" fluid grid-list-lg>
      <v-layout wrap>
        <v-flex xs12>
          <v-card class="pt-2">
            <v-toolbar flat color="white">
              <v-spacer/>
              <v-flex xs12 md4>
                <v-text-field
                  v-model="search"
                  :label="$t('search')"
                  single-line
                  append-icon="search"
                  solo
                />
              </v-flex>
            </v-toolbar>

            <v-data-table
              :headers="headers"
              :items="items"
              :pagination.sync="pagination"
              :total-items="totalItems"
              :loading="loading"
              :rows-per-page-text="$t('password_change_requests_per_page')"
            >
              <template slot="headerCell" slot-scope="props">
                <span class="table-header-text caption font-weight-bold">
                  {{
                  $t(props.header.textKey)
                  }}
                </span>
              </template>

              <template slot="items" slot-scope="props">
                <td>{{ props.item.fullName }}</td>
                <td>{{ props.item.email }}</td>
                <td>{{ props.item.phoneNo }}</td>
                <td>
                  <v-btn color="primary" small @click="reset(props.item);">
                    <v-icon>check</v-icon>
                    {{ $t("change_password") }}
                  </v-btn>
                </td>
              </template>
            </v-data-table>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { UserAccountAPI } from "@/api";
import { tableMixin } from "@/shared/mixins";
import ResetPassword from "./ResetPassword.vue";

export default {
  name: "PasswordResetRequests",
  components: {
    // ResetPassword
  },
  mixins: [tableMixin],
  data() {
    return {
      resource: UserAccountAPI,
      resourceName: "User",
      searchField: "fullName",
      filter: { where: { passwordChangeRequested: true } },
      headers: [
        {
          textKey: "full_name",
          value: "fullName"
        },
        {
          textKey: "email",
          sortable: false,
          value: "email"
        },
        {
          textKey: "phone_number",
          sortable: false,
          value: "phoneNumber"
        },
        {
          textKey: "actions",
          value: "actions"
        }
      ]
    };
  },
  methods: {
    reset(user) {
      this.$modal.show(
        ResetPassword,
        {
          modalName: "reset-password-modal",
          formTitle: this.$t("change_password"),
          user
        },
        {
          name: "reset-password-modal",
          height: "auto",
          scrollable: true,
          width: 800,
          pivotY: 0
        },
        {
          closed: () => {
            this.loadData();
          }
        }
      );
    }
  }
};
</script>

<style></style>
