<template>
  <v-app>
    <v-container grid-list-xs>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm12 md6 lg6 pa-3>
          <v-card @click="order" style="cursor: pointer">
            <img src="@/assets/item.png" alt style="width:100%">
          </v-card>
        </v-flex>
        <v-flex xs12 sm12 md6 lg6 pa-3>
          <v-layout row wrap justify-center>
            <v-flex xs12 sm12 md6 lg6 px-3 pb-3 v-for="i in 4" :key="i">
              <v-card @click="order" style="cursor: pointer">
                <v-card-text>
                  <img src="@/assets/cape.png" alt style="width:100%">
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm12 md6 lg6 pa-3 v-for="i in 16" :key="i">
          <v-card @click="order" style="cursor: pointer">
            <v-card-text>
              <v-layout row wrap justify-center>
                <v-flex xs12 sm12 md5 lg5>
                  <img src="@/assets/bag.png" alt style="width:100%">
                </v-flex>
                <v-flex xs12 sm12 md1 lg1>
                  <v-divider vertical></v-divider>
                </v-flex>
                <v-flex xs12 sm12 md6 lg6>
                  <h3>Navy Zoma Shop Cap</h3>
                  <p class="grey--text py-2">
                    Lorem ipsum dolor sit amet,
                    nam ut eius urbanitas signiferumque.
                    Omnesque
                  </p>
                  <h3>$70.00</h3>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-btn fab bottom right color="primary" dark fixed @click="dialog = !dialog">
      <v-icon>chat</v-icon>
    </v-btn>

    <v-divider></v-divider>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    order() {
      this.$router.push({ name: "order-list" });
    }
  }
};
</script>