<template>
  <v-app>
    <v-container grid-list-xs>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm12 md9 lg9>
          <h1 class="text-xs-center">Featured Zoma Shopp Men's Wear</h1>
          <p class="py-3">
            Lorem ipsum dolor sit amet, nam ut eius urbanitas signiferumque.
            Omnesque convenire eum in, et augue nostro gubergren eam. At alia
            facer pro, alterum fabulas blandit his ne. Elaboraret scribentur
            pri an. Vix nonumy omnium ea, dicam prompta apeirian ne vim, eos eius
            erroribus ei. Nostro invenire vim an, nam no vitae soluta.
          </p>
        </v-flex>
        <v-flex xs12 sm12 md6 lg6 pa-3 v-for="i in 16" :key="i">
          <v-card style="cursor: pointer">
            <v-card-text>
              <v-layout row wrap justify-center>
                <v-flex xs12 sm12 md5 lg5>
                  <img src="@/assets/menwear.jpg" alt style="width:100%">
                </v-flex>
                <v-flex xs12 sm12 md1 lg1>
                  <v-divider vertical></v-divider>
                </v-flex>
                <v-flex xs12 sm12 md6 lg6>
                  <h3>Zoma Shop Smart Men's Wear</h3>
                  <p class="grey--text py-2">
                    Lorem ipsum dolor sit amet,
                    nam ut eius urbanitas signiferumque.
                    Omnesque
                  </p>
                  <h3>$70.00
                    <v-btn
                      class="purple--text text-capitalize"
                      flat
                      @click="$router.push({name:'order-list'})"
                    >Order now</v-btn>
                  </h3>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>