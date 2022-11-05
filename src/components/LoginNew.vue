<template>
  <div>
    <v-layout wrap>
      <v-flex xs12 lg12 md6>
        <v-img class="align-center" src="../reserve/wh3.jpg" height="100vh">
          <v-layout wrap justify-center>
          
            
          
            <v-card
              outlined
            
              height="450"
              width="445"
              color="rgb(194, 222, 217)"
            >
              <v-card wrap flat class="px-6" color="rgb(194, 222, 217)" >
                <center>
                  <v-flex pt-5 pb-2 class="fn4"> Welcome To </v-flex>
                  <v-flex pb-2 class="fn1" style="font-size: 22px">
                    Whale Shark
                  </v-flex>
                  <v-flex pb-2 class="fn3"
                  style="font-size:29px"> <strong>Login</strong> </v-flex>
                </center>
                <v-flex py-2>Phone Number</v-flex>
                <v-text-field v-model="phone"
                 placeholder="Phone Number" solo></v-text-field>
                <v-flex py-2>Passsword</v-flex>
                <v-text-field type="password" v-model="password" placeholder="Password" solo></v-text-field>
                <v-btn block color="hsl(195, 65%, 29%)" large tile @click="putdata()"
                  >CONTINUE
                </v-btn>
              </v-card>
            </v-card>
          </v-layout>
        </v-img>
      </v-flex>
    </v-layout>
  </div>
</template>



<script>
import axios from "axios";
// import store from "./../store";
export default {
  data() {
    return {
      phone: null,
      password: null,
      value: [],
    };
  },
  mounted() {
    // this.getData();
  },
  methods: {
    putdata() {
      var userData = {};
      // userData["accessType"] = "signin";
      userData["phone"] = this.phone;
      userData["password"] = this.password;
      axios({
        method: "POST",
        url: "/user/login/password",
        data: userData,
      })
        .then((response) => {
          if (response.data.status) {
            // store.commit("loginUser", response.data.token);
            this.$router.push("/home");
          } else {
            this.msg = response.data.msg;
            this.showSnackBar = true;
          }
        })
        .catch((err) => {
          this.ServerError = true;
          console.log(err);
        });
    },
  },
};
</script>