<template>
  <div>
    <v-layout wrap>
      <v-flex xs12>
        <v-img
          src="../../assets/cylinder-purple-stage-background-pedestal-podium-product-display-show-product-purple-background-3d-rendering.jpg"
        >
          <v-layout wrap align-center justify-center fill-height>
            <v-flex xs3 >
              <span style="color: white"> Email</span>

              <v-text-field label="mail id" single-line solo v-model="email"></v-text-field>


              <span style="color: white">Passsword</span>


              <v-text-field label="Password" single-line solo v-model="pass"></v-text-field>

              <v-btn  depressed color="primary" @click="loginn()"> Login </v-btn>

            </v-flex>
          </v-layout>
        </v-img>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import axios from 'axios';
import store from "./../../store";
export default {
    data() {
        return {
            email: null,
            pass: null,
            msg: null,
        }
        
    },

    methods: {
        // validateInput(){
        //     if(!this.email) {
        //         this.msg ='Provide a valid username';

        //         return;
        //     }
        //     else if (!this.pass) {
        //         this.msg ='Provide a password';
        //         return;
        //     }
        //     else {
        //         this.loginn();
        //     }
        // },
        loginn(){
           var userdata ={};
           userdata["email"] = this.email;
           userdata["password"] = this.pass;

           axios({
            method : "POST",
            url : "/user/login",
            data : userdata,
           })
           .then((response) => {
        //   store.commit("appLoading", false);
          if (response.data.status) {
            // store.commit("userType", response.data.mainRole);
            // store.commit("userData", response.data.data);
            // store.commit("fullData", response.data);
            // store.commit("loginUser", response.data.data.token);
            // localStorage.setItem("id",response.data.data.id);
            // store.commit("menu", response.data.menus);
          } else {
            this.msg = response.data.msg;
            this.showSnackBar = true;
          }
        })
        .catch((err) => {
          store.commit("appLoading", false);
          this.ServerError = true;
          console.log(err);
        });

        }
    }
}
</script>