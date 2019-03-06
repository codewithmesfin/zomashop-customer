<template>
  <v-app>
    <v-container grid-list-xs>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm12 md7 lg7 pa-3>
          <v-card>
            <v-layout row wrap justify-center>
              <v-flex xs12 sm12>
                <v-toolbar flat>
                  <v-btn icon>
                    <v-icon>clear</v-icon>
                  </v-btn>
                  <img src="@/assets/laptop.jpg" alt style="width:70px">
                  <h2 class="primary--text">MacBook Air new Laptop</h2>
                  <v-spacer></v-spacer>
                  <strong>$70.00</strong>
                </v-toolbar>
                <v-toolbar flat>
                  <v-spacer></v-spacer>
                  <small class="text-xs-center">Smaller</small>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-divider></v-divider>
                <v-toolbar flat>
                  <v-btn icon>
                    <v-icon>clear</v-icon>
                  </v-btn>
                  <img src="@/assets/newshoe.jpg" alt style="width:80px" class="py-2 px-2">
                  <h2 class="primary--text">New brand Men Shoe</h2>
                  <v-spacer></v-spacer>
                  <strong>$70.00</strong>
                </v-toolbar>
                <v-toolbar flat>
                  <v-spacer></v-spacer>
                  <small class="text-xs-center">Smaller</small>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-divider></v-divider>
                <v-toolbar flat>
                  <v-btn icon>
                    <v-icon>clear</v-icon>
                  </v-btn>
                  <img src="@/assets/bag.png" alt style="width:70px" class="mx-2">
                  <h2 class="primary--text">New Brand Bag</h2>
                  <v-spacer></v-spacer>
                  <strong>$70.00</strong>
                </v-toolbar>
                <v-toolbar flat>
                  <v-spacer></v-spacer>
                  <small class="text-xs-center">Medium</small>
                  <v-spacer></v-spacer>
                  <h3 class="primary--text">Sub total: $210.00</h3>
                </v-toolbar>
                <v-divider></v-divider>
                <v-toolbar flat>
                  <v-btn color="primary" block large>Check Out
                    <v-icon>arrow_forward</v-icon>
                  </v-btn>
                </v-toolbar>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>