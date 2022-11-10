<template>
  <div>
    <vue-element-loading
      :active="appLoading"
      :is-full-screen="true"
      background-color="#FFFFFF"
      color="blue"
      spinner="ring"
    />
    <ServerError v-if="ServerError" />
    <v-layout wrap ma-4>
       
        <v-flex xs12 pa-4>
                  <span class="fn4"> <h3> Whale Shark Conservation Project</h3></span>
        </v-flex>
      <v-flex xs12 sm6 pa-2>
          <v-card elevation="8" color="#26a8cf" to="/page2"> 

              <!-- <v-img height="300px" src="../../assets/images/login2.jpg">

              </v-img> -->
              <v-layout wrap pa-3 pt-lg-12 pb-lg-8>
                 <v-flex xs12 text-center align-self-center>
                   <span  class="fn6" style="text-transform: uppercase">Total Number of Users </span> &nbsp;
                    <!-- <span class="bold" style="color: green; font-size: 30px">{{usercount}}</span> -->
                 </v-flex>
                 <v-flex class="font-weight-bold" xs12 text-center style="font-size:45px;color:black">
                  {{usercount}}
                 </v-flex>
              </v-layout>
          </v-card>
      </v-flex>
          <!-- <span>Total Number of Records:</span> <span>{{recordcount}}</span> -->
      <v-flex xs12 sm6 pa-2>
        
        <v-card elevation="8" color="#26a8cf" to="/page4">
               <!-- <v-img  height="300px" src="../../assets/images/dash.jpg">

              </v-img> -->
              <v-layout wrap pa-3 pt-lg-12 pb-lg-8>
                 <v-flex xs12 text-center align-self-center>
                   <span  class="subhead bold" style="text-transform: uppercase">Total Number of Records</span> &nbsp;
                    <!-- <span class="bold" style="color: green; font-size: 30px">{{recordcount}}</span> -->
                 </v-flex>
                  <v-flex class="font-weight-bold" xs12 text-center style="font-size:45px;color:black">
                  {{recordcount}}
                 </v-flex>
              </v-layout>
          </v-card>
      </v-flex>
    </v-layout>
   
  </div>
</template>
<script>
import axios from "axios";
// import store from "../../store"
export default {
  data() {
    return {
      ServerError: false,
      appLoading: false,
      userList: [],
      recordcount:0,
      usercount:0
    };
  },

  computed:
  {
    // userName()
    // {
    //   return store.state.USDD
    // }
  },

  mounted() {
    this.getData();
  },

  methods: {

    // addd()
    // {
    //    store.commit("USD","this is the second valur")
    // },
    getData() {
      this.appLoading = true;
      axios({
        url: "/admin/home",
        method: "get",
        headers: {
          token: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          this.appLoading = false;
          if (response.data.status) {
            this.recordcount = response.data.recordcount;
            this.usercount = response.data.usercount
          }
        })
        .catch((err) => {
          this.appLoading = false;
          this.ServerError = true;
          console.log(err);
        });
    },
  },
};
</script>