<template>
  <v-form @submit.prevent="resetPassword">
    <v-toolbar
      :height="45"
      class="modal-toolbar grey lighten-3 elevation-1 mb-1"
      style="padding-right: 0 !important"
    >
      <v-toolbar-title class="blue-grey--text text--darken-2 font-weight-bold">
        {{ formTitle }}
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click="$modal.hide(modalName);">
        <v-icon
          medium
          class="grey--text text--darken-1"> cancel </v-icon>
      </v-btn>
    </v-toolbar>

    <v-layout row>
      <v-flex xs12>
        <v-card
          tile
          class="grey lighten-5 pa-3"
          style="max-height: 300px; height: 350px; overflow-y: auto;"
        >
          <!-- title -->
          <v-layout
            row
            class="mb-3">
            <v-flex xs12>
              <span class="body-2">{{ $t("full_name") }} :</span>
              <span
                class="blue-grey--text text--lighten-1 mb-3 pl-2 title font-weight-bold"
              >
                {{ user.fullName }}
              </span>
            </v-flex>
          </v-layout>

          <!-- row 1 -->
          <v-layout row>
            <v-flex xs12>
              <v-text-field
                v-validate="'required|min:5'"
                ref="password"
                v-model="password"
                :error-messages="errors.collect('password')"
                :label="$t('password')"
                name="password"
                type="password"
                autofocus
                box
                background-color="white elevation-1"
              />
            </v-flex>
          </v-layout>

          <!-- row 2 -->
          <v-layout row>
            <v-flex xs12>
              <v-text-field
                v-validate="'required|confirmed:password'"
                v-model="confirmPassword"
                :error-messages="errors.collect('password_confirmation')"
                :label="$t('password_confirm')"
                name="password_confirmation"
                type="password"
                box
                background-color="white elevation-1"
              />
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- bottom toolbar -->
    <v-toolbar
      :height="44"
      flat
      class="grey lighten-2">
      <v-spacer />
      <v-btn
        class="primary"
        type="submit"
        small> {{ $t("update") }} </v-btn>
    </v-toolbar>
  </v-form>
</template>

<script>
import { UserAccountAPI } from '@/api';

export default {
  name: 'ResetPassword',
  props: {
    user: {
      type: Object,
      default: () => null,
    },
    modalName: {
      type: String,
      default: '',
    },
    formTitle: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    resetPassword() {
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          UserAccountAPI.changePassword(this.user.id, this.password)
            .then(() => {
              this.$notify({
                type: 'success',
                title: this.$t('success'),
                message: `${this.$t('password')} ${this.$t(
                  'updated_successfully',
                )}`,
              });
              this.$modal.hide(this.modalName);
            })
            .finally(() => {
              this.password = '';
              this.confirmPassword = '';
            });
        }
      });
    },
  },
};
</script>
