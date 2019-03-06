<template>
  <v-app>
    <v-divider/>
    <v-container>
      <div>
        <h1>Our new brand awesome Items</h1>
        <p class="py-3">
          Lorem ipsum dolor sit amet, nam ut eius urbanitas signiferumque.
          Omnesque convenire eum in, et augue nostro gubergren eam. At alia
          facer pro, alterum fabulas blandit his ne. Elaboraret scribentur
          pri an. Vix nonumy omnium ea, dicam prompta apeirian ne vim, eos eius
          erroribus ei. Nostro invenire vim an, nam no vitae soluta.
        </p>
      </div>
      <v-layout row wrap justify-center>
        <v-flex xs6 v-for="i in 10" pa-4 :key="i">
          <v-card>
            <v-img
              class="primary--text"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">Top 10 Zoma Shop Items</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div>
                <span class="grey--text">Number {{i}}</span>
                <br>
                <span>Omnesque convenire</span>
                <br>
                <span>Lorem ipsum dolor sit amet, nam ut eius urbanitas signiferumque.</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {};
</script>

<style></style>
