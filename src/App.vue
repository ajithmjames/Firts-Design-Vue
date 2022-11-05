<template>
  <v-app>
    <v-main>
      <v-app-bar height="80px" style="background-color: rgb(31, 137, 169)" v-if="$route.path != '/' ">
        <v-layout wrap lg12>
          <v-flex xs1> 
            <v-img src="./reserve/wh3.png" contain height="70px"></v-img>
          </v-flex>
          <v-flex class="fn3" xs10 pt-4 style="font-size:22px"> <strong> Whale-Shark</strong></v-flex>
          <v-flex pt-5 style="font-size:22px" ><strong>Account</strong></v-flex>
        </v-layout>
      </v-app-bar>
      <!-- <Header v-if="$route.name!= 'login'"/> -->
      <!-- <Headerxs/> -->

      <router-view> </router-view>

      <!-- <Footer v-if="$route.name!= 'login'"/> -->
    </v-main>
  </v-app>
</template>
<script>
// import HelloWorld from './components/HelloWorld';
import "./assets/style.css";

// import Header from './common/appHeader'
// import Headerxs from './common/appHeaderxs'

// import Footer from './common/footer'
import axios from "axios";
// import store from './store'

export default {
  name: "App",

  // components: {
  //   // HelloWorld,
  //   Header,
  //   Footer,
  //   // Headerxs

  // },

  beforeMount() {
    if (typeof localStorage.getItem("token") == "string") {
      // this.$store.commit("appLoading", true);
      axios({
        method: "get",
        url: "/user/admin/get",
        headers: {
          token: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (response.data.status == true) {
            // store.commit("appLoading", false);
            // store.commit("userData", response.data.data);
            // store.commit("userType", response.data.data.role);
          } else {
            // localStorage.removeItem("token")
            this.appLogout();
          }
        })
        .catch((err) => {
          // this.$store.commit("appLoading", false);
          console.log(err);
        });
    }
  },
  data: () => ({
    //
  }),
  methods: {
    //   appLogout() {
    //  store.state.userType = null;
    //         store.state.isLoggedIn = false;
    //         store.state.userData = {};
    //         store.state.initial = "";
    //         localStorage.removeItem("userType");
    //         localStorage.removeItem("token");
    //         this.$router.push("/");
    //     axios({
    //       method: "get",
    //       url: "/user/admin/logout",
    //       headers: {
    //         token: localStorage.getItem("token"),
    //       },
    //     }).then((response) => {
    //       if (response.data.status) {
    //         store.state.userType = null;
    //         store.state.isLoggedIn = false;
    //         store.state.userData = {};
    //         store.state.initial = "";
    //         localStorage.removeItem("userType");
    //         localStorage.removeItem("token");
    //         this.$router.push("/");
    //       }
    //     });
    //   },
  },
};
</script>
