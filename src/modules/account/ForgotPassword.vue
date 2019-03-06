<template>
  <VContainer fluid fill-height pa-0>
    <VLayout row wrap>
      <VFlex xs12 md12 order-xs2 order-md1>
        <div class="text-xs-center">
          <h1 class="headline font-weight-thin mt-4">{{ appName }}</h1>

          <VLayout
            class="pa-0 ma-0"
            align-center
            justify-center
            fill-height
            fill-width
            style="z-index: 99; position:absolute; width:100%;bottom:6em"
          >
            <VFlex xs10 sm8 md4 lg3>
              <VCard class="elevation-12">
                <VToolbar dark color="sidebarColor">
                  <VToolbarTitle>
                    <div class="text-xs-center">{{ $t("password_reset_request_title") }}</div>
                  </VToolbarTitle>
                  <VSpacer/>
                </VToolbar>

                <VCardText>
                  <VForm @submit.prevent="requestReset">
                    <v-text-field
                      v-validate="'required'"
                      v-model="username"
                      :error-messages="errors.collect('username')"
                      :label="$t('username_for_login')"
                      prepend-icon="person"
                      name="username"
                      type="text"
                      autocomplete="username"
                    />

                    <v-card-actions class="text-xs-center">
                      <v-btn
                        type="submit"
                        block
                        color="navbarColor"
                        dark
                      >{{ $t("submit_reset_request") }}</v-btn>
                    </v-card-actions>
                    <v-btn :to="{ name: 'login' }" small flat class="blue--text text--darken-5">
                      <v-icon color="grey" small>arrow_back</v-icon>
                      {{ $t("login") }}
                    </v-btn>
                  </VForm>
                </VCardText>
              </VCard>
            </VFlex>
          </VLayout>
        </div>
      </VFlex>
    </VLayout>
  </VContainer>
</template>
<script>
import { mapState } from "vuex";
import { AuthAPI } from "../../api";

export default {
  name: "ForgotPassword",
  data() {
    return {
      username: ""
    };
  },
  computed: {
    ...mapState("core", ["appName"])
  },
  methods: {
    requestReset() {
      this.$validator.validateAll().then(valid => {
        if (valid) {
          AuthAPI.forgot(this.username)
            .then(() => {
              this.$validator.reset();
              this.$notify({
                type: "success",
                title: this.$t("success"),
                message: `${this.$t("password_reset_requested")}`
              });
              this.$router.push({ name: "login" });
            })
            .catch(err => {
              if (err.statusCode === 422) {
                this.$notify({
                  type: "danger",
                  title: this.$t("error"),
                  message: `${this.$t("username_not_found")}`
                });
              }
            });
        }
      });
    }
  }
};
</script>
