<template>
  <!-- <v-app>
    <v-main class="ServerError">
      <v-container fluid fill-height>
        <v-row
          
          style="
            font-family: poppinssemibold;
            color: #464646;
            letter-spacing: 2px;
          "
        >
          <v-col>
            <v-img src="../assets/gif.gif" height="550px" contain></v-img> 
          </v-col>
          <v-col pt-12 cols="12" text-center>
            <span style="font-size: 30px"> 500! </span>
          </v-col>
          <v-col cols="12" text-center>
            <span style="font-size: 18px">
              Oops something went wrong in our side
            </span>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app> -->
  <div>
    <v-layout wrap>
      <v-flex xs12>
        <v-img src="../assets/gif.gif" height="500px" contain>
        </v-img>
      </v-flex>
      <v-flex xs12 style="font-size:20px" text-center>
        <span>
          500 ErroR <br>
          Page Not Found !
        </span>
      </v-flex>
    </v-layout>
  </div>
</template>
<style scoped>
.ServerError {
  min-height: 100vh;
  min-width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99999;
  background-color: white;
  overflow-x: hidden;
}
</style>