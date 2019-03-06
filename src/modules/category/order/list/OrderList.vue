<template>
  <v-app>
    <v-container grid-list-xs>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm12 md6 lg6 pa-3>
          <v-card>
            <v-carousel
              delimiter-icon="stop"
              prev-icon="mdi-arrow-left"
              next-icon="mdi-arrow-right"
              height="300px"
            >
              <v-carousel-item>
                <img src="@/assets/laptop.jpg" alt="image 1" style="width:100%;height:100%">
              </v-carousel-item>
              <v-carousel-item>
                <img src="@/assets/item.png" alt="image 1" style="width:100%;height:100%">
              </v-carousel-item>
              <v-carousel-item>
                <img src="@/assets/headset.jpg" alt="image 1" style="width:100%;height:100%">
              </v-carousel-item>
            </v-carousel>
          </v-card>
          <v-container grid-list-xs>
            <h2 class="primary--text text-xs-center">Related Products</h2>
            <v-layout row wrap justify-center>
              <v-flex xs12 sm12 md4 lg4 pa-3 v-for="i in 3" :key="i">
                <img src="@/assets/laptop.jpg" alt style="width:100%">
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex xs12 sm12 md6 lg6 pa-3>
          <v-form>
            <v-layout row wrap justify-center>
              <v-flex xs12>
                <h2 class="mb-3">Zoma shop MacBook Air Laptop</h2>
                <h3>
                  $70.00
                  <small>Sale</small>
                </h3>
              </v-flex>
              <v-flex xs12 sm12 md6 lg6 px-3>
                <v-autocomplete
                  label="Select size"
                  :items="sizes"
                  item-text="title"
                  hide-selected
                  clearable
                />
              </v-flex>
              <v-flex xs12 sm12 md6 lg6 px-3>
                <v-text-field name="name" label="Amount" type="number" min="1"/>
              </v-flex>
              <v-flex xs12 sm12 md12 lg12 px-3>
                <v-btn color="primary" block @click="$router.push({name:'login'})">Add to Cart
                  <v-icon>add_shopping_cart</v-icon>
                </v-btn>
              </v-flex>
              <v-flex xs12 pa-3>
                <v-card flat>
                  <v-toolbar color="grey lighten-1" flat dense>
                    <p>Zoma Shopping Website</p>
                  </v-toolbar>
                  <v-divider></v-divider>
                  <v-toolbar color="grey lighten-4" flat dense>
                    <p>Lorem ipsum dolor sit amet, nam ut eius urbanitas</p>
                  </v-toolbar>
                  <v-divider></v-divider>
                  <v-toolbar color="grey lighten-4" flat dense>
                    <p>Lorem ipsum dolor sit amet, nam ut eius urbanitas</p>
                  </v-toolbar>
                </v-card>
              </v-flex>
            </v-layout>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      sizes: [{ title: "Smaller" }, { title: "Medium" }, { title: "Bigger" }]
    };
  }
};
</script>


