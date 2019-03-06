<template>
  <v-app class>
    <v-container grid-list-xs>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm12 md4 lg4 pa-3>
          <v-card flat>
            <v-card-title class="primary--text">Login to your Account</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="login">
                <v-alert v-if="authError" :value="true" type="error">{{ authError }}</v-alert>
                <v-text-field
                  v-validate="'required'"
                  v-model="user.email"
                  :error-messages="errors.collect('email')"
                  :label="$t('email')"
                  prepend-icon="person"
                  name="email"
                  type="text"
                  autocomplete="email"
                />
                <v-text-field
                  v-validate="{ required: true, min: 5 }"
                  v-model="user.password"
                  :error-messages="errors.collect('password')"
                  :label="$t('password')"
                  prepend-icon="lock"
                  name="password"
                  autocomplete="current-password"
                  type="password"
                />
                <div class="ml-3">
                  <v-checkbox label="remember" color="teal" v-model="value" value="value"/>
                </div>
                <div class="text-xs-center my-1">
                  <v-btn
                    :loading="loading"
                    type="submit"
                    color="primary"
                    dark
                    class="text-capitalize"
                  >{{ $t("log_in") }}</v-btn>
                </div>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm12 md7 lg7 pa-3>
          <v-card flat>
            <v-card-title class="primary--text">Create new user account</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="signup">
                <v-alert v-if="authError" :value="true" type="error">{{ authError }}</v-alert>
                <v-layout row wrap justify-center>
                  <v-flex xs12 sm12 md6 lg6 px-3>
                    <v-text-field
                      v-validate="'required'"
                      v-model="user.firstname"
                      :error-messages="errors.collect('first_name')"
                      :label="$t('first_name')"
                      prepend-icon="person"
                      name="first_name"
                      type="text"
                      autocomplete="firstname"
                    />
                  </v-flex>
                  <v-flex xs12 sm12 md6 lg6 px-3>
                    <v-text-field
                      v-validate="'required'"
                      v-model="user.lastname"
                      :error-messages="errors.collect('last_name')"
                      :label="$t('last_name')"
                      prepend-icon="person"
                      name="last_name"
                      type="text"
                      autocomplete="lastname"
                    />
                  </v-flex>
                  <v-flex xs12 sm12 md6 lg6 px-3>
                    <v-text-field
                      v-validate="'required'"
                      v-model="user.phone"
                      :error-messages="errors.collect('phone')"
                      :label="$t('phone')"
                      prepend-icon="person"
                      name="phone"
                      type="text"
                      autocomplete="phone"
                    />
                  </v-flex>
                  <v-flex xs12 sm12 md6 lg6 px-3>
                    <v-text-field
                      v-validate="'required'"
                      v-model="user.telegram_account"
                      :error-messages="errors.collect('telegram_account')"
                      :label="$t('telegram_account')"
                      prepend-icon="person"
                      name="telegram_account"
                      type="text"
                      autocomplete="telegram_account"
                    />
                  </v-flex>
                  <v-flex xs12 sm12 md6 lg6 px-3>
                    <v-text-field
                      v-validate="'required'"
                      v-model="user.email"
                      :error-messages="errors.collect('email')"
                      :label="$t('email')"
                      prepend-icon="person"
                      name="email"
                      type="text"
                      autocomplete="email"
                    />
                  </v-flex>
                  <v-flex xs12 sm12 md6 lg6 px-3>
                    <v-text-field
                      v-validate="{ required: true, min: 5 }"
                      v-model="user.password"
                      :error-messages="errors.collect('password')"
                      :label="$t('password')"
                      prepend-icon="lock"
                      name="password"
                      autocomplete="current-password"
                      type="password"
                    />
                  </v-flex>
                </v-layout>

                <div class="text-xs-center my-1">
                  <v-btn
                    :loading="loading"
                    type="submit"
                    color="primary"
                    dark
                    class="text-capitalize"
                  >{{ $t("sign_up") }}</v-btn>
                </div>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>


<script>
import AccountService from "@/shared/services";

export default {
  name: "Login",
  data() {
    return {
      loading: false,
      authError: false,
      user: {}
    };
  },
  methods: {
    login() {
      const self = this;
      this.$validator.validateAll().then(valid => {
        if (valid) {
          this.loading = true;
          self.authError = null;
          AccountService.login(this.user.email, this.user.password)
            .then(() => {
              this.$validator.reset();
              this.$router.push({ name: "dashboard" });
            })
            .catch(err => {
              this.loading = false;
              if (err.statusCode === 401) {
                self.authError = "Username or password is incorrect";
              } else if (err.statusCode === 403) {
                self.authError = "Unauthorized to log in.";
              }
            });
        }
      });
    }
  }
};
</script>

<style>
.forgotPassword {
  text-decoration: none;
}
</style>

