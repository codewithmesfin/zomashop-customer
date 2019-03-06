<template>
  <v-app>
    <v-container grid-list-xs>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm12 md4 lg3 pa-3>
          <div>
            <img src="@/assets/mobile.png" alt style="width:100%;max-height:400px;max-width:220px;">
          </div>
        </v-flex>
        <v-flex xs12 sm12 md6 lg7 pa-3 v-for="i in 2" :key="i">
          <h1>Zoma Shopp</h1>
          <p class="py-3">
            Lorem ipsum dolor sit amet, nam ut eius urbanitas signiferumque.
            Omnesque convenire eum in, et augue nostro gubergren eam. At alia
            facer pro, alterum fabulas blandit his ne. Elaboraret scribentur
            pri an. Vix nonumy omnium ea, dicam prompta apeirian ne vim, eos eius
            erro
          </p>
          <p>
            Lorem ipsum dolor sit amet, nam ut eius urbanitas signiferumque.
            Omnesque convenire eum in, et augue nostro gubergren eam. At alia
            facer pro, alterum fabulas blandit his ne. Elaboraret scribentur
            pri an. Vix nonumy omnium ea, dicam prompta apeirian ne vim, eos eius
            erro
          </p>
          <p>
            Lorem ipsum dolor sit amet, nam ut eius urbanitas signiferumque.
            Omnesque convenire eum in, et augue nostro gubergren eam. At alia
            facer pro, alterum fabulas blandit his ne. Elaboraret scribentur
            pri an. Vix nonumy omnium ea, dicam prompta apeirian ne vim, eos eius
            erro
          </p>
        </v-flex>
        <v-flex xs12 sm12 md5 lg4 pa-3>
          <div>
            <img src="@/assets/item.png" alt style="width:100%;">
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>