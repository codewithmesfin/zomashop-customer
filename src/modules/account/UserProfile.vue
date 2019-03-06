<template>
  <div>
    <v-layout row justify-center>
      <v-flex xs6>
        <v-tabs color="teal lighten-5" dark fixed-tabs slider-color="teal">
          <v-tab ripple class="teal--text">
            <v-icon color="teal">account_circle</v-icon>
            {{ $t("user_profile") }}
          </v-tab>
          <v-tab ripple class="teal--text">
            <v-icon color="teal">lock</v-icon>
            {{ $t("change_password") }}
          </v-tab>

          <v-tab-item>
            <v-card ref="card" flat color="white" class="py-5">
              <div class="layout ma-0 align-center column">
                <v-avatar size="80" color="primary">
                  <img src="@/assets/logo.png">
                </v-avatar>
                <div class="flex text-sm-center">
                  <div class="headline bold">{{ user.fullName }}zzzz</div>
                  <div class="subheading">{{ user.phoneNo }}</div>
                  <span class="title font-weight-thin">
                    <v-chip color="primary" label small text-color="white">{{ user.role }}</v-chip>
                  </span>
                </div>
              </div>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <form-error-messages :messages="errorMessage"/>
            <v-card flat class="py-5" color="white">
              <v-form @submit.prevent="update">
                <v-layout row>
                  <v-flex xs8 offset-xs2 pb-0 pt-0>
                    <v-text-field
                      v-validate="'required|min:5'"
                      ref="oldPassword"
                      v-model="item.oldPassword"
                      :error-messages="errors.collect('oldPassword')"
                      :label="$t('old_password')"
                      name="oldPassword"
                      type="password"
                    />
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs8 offset-xs2 pb-0 pt-0>
                    <v-text-field
                      v-validate="'required|min:5'"
                      ref="newPassword"
                      v-model="item.newPassword"
                      :error-messages="errors.collect('newPassword')"
                      :label="$t('new_password')"
                      name="newPassword"
                      type="password"
                    />
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs8 offset-xs2 pb-0 pt-0>
                    <v-text-field
                      v-validate="'required|confirmed:newPassword'"
                      v-model="item.confirmPassword"
                      :error-messages="
                            errors.collect('password_confirmation')
                          "
                      :label="$t('password_confirm')"
                      name="password_confirmation"
                      type="password"
                    />
                  </v-flex>
                </v-layout>
                <div class="text-xs-center">
                  <v-btn round type="submit" color="primary">{{ $t("save") }}</v-btn>
                </div>
              </v-form>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { UserAccountAPI } from "@/api";
import AccountService from "@/shared/services";

export default {
  data() {
    return {
      errorMessage: null,
      user: AccountService.getProfile(),
      item: {}
    };
  },
  methods: {
    update() {
      delete this.item.confirmPassword;
      this.errorMessage = null;
      this.$validator.validateAll().then(valid => {
        if (valid) {
          UserAccountAPI.updatePassword(this.item)
            .then(res => {
              this.$notify({
                type: "success",
                title: this.$t("success"),
                message: `${this.$t("password")} ${this.$t(
                  "updated_successfully"
                )}`
              });
              AccountService.updateToken(res.tokenId);
            })
            .catch(err => {
              if (err.statusCode === 401) {
                this.errorMessage = err.message;
              }
            })
            .finally(() => {
              this.item = {};
            });
        }
      });
    }
  }
};
</script>

<style>
.tab-class {
  border: 1px solid #c0c0c0;
  background-color: white;
  border-radius: 1px;
}
</style>
