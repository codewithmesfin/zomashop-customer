<template>
  <v-app class="grey lighten-4">
    <v-divider></v-divider>
    <v-card flat>
      <v-toolbar dense flat height="30px" color="white" class="mb-1">app.user-list</v-toolbar>
    </v-card>
    <v-toolbar-title class="mt-2">user</v-toolbar-title>
    <div class="ma-3" style="border:1px solid lightgray;border-radius:3px">
      <v-toolbar flat class="elevation-1 white">
        <v-toolbar-title class="blue-grey--text text--darken-2 font-weight-bold">
          <v-btn
            color="teal  white--text"
            @click="$router.push({ name: 'user-create' })"
            class="text-capitalize"
          >Create User</v-btn>
        </v-toolbar-title>
        <v-spacer/>
        <v-spacer/>
        <v-text-field
          class="mb-2"
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        />
        <div></div>
      </v-toolbar>
      <v-divider/>
      <v-card flat>
        <v-data-table
          id="printMe"
          :headers="headers"
          :items="items"
          :rows-per-page-text="$t('users_per_page')"
          :search="search"
        >
          <template slot="items" slot-scope="props">
            <td>{{props.index+1}}</td>
            <td>{{props.item.fullName}}</td>
            <td>{{props.item.email}}</td>
            <td>{{props.item.phoneNo}}</td>
            <td>{{props.item.telegram_account}}</td>
            <td>{{props.item.userRole.name}}</td>
            <td class="justify-center layout px-0">
              <v-menu offset-y>
                <v-btn slot="activator" small color="primary" dark class="text-capitalize">Action
                  <v-icon small>expand_more</v-icon>
                </v-btn>
                <v-list>
                  <v-list-tile
                    ripple
                    @click="$router.push({name:'user-update',params:{userId:props.item.id}})"
                  >
                    <v-list-tile-title>{{ $t("action_edit") }}</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile @click="deleteItem(props.item.id)">
                    <v-list-tile-title>{{ $t("action_delete") }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </td>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import { UserAccountAPI, RoleAPI } from "@/api";
import { tableMixin } from "@/shared/mixins";

export default {
  name: "User List",
  mixins: [tableMixin],

  data() {
    return {
      filter: {
        limit: 100,
        offset: 0,
        include: ["userRole"],
        where: {}
      },
      resource: UserAccountAPI,
      resourceName: "user",
      searchField: "fullName",
      headers: [
        {
          text: "#",
          sortable: false
        },
        {
          text: "Name",
          align: "left",
          value: "fullName"
        },
        {
          text: "Email",
          value: "email"
        },
        {
          text: "Phone Number",
          value: "phone"
        },
        {
          text: "Telegram Account",
          value: "telegram_account"
        },
        {
          text: "Role",
          value: "role"
        },
        {
          text: "Action",
          value: "action",
          align: "center",
          sortable: false
        }
      ]
    };
  }
};
</script>