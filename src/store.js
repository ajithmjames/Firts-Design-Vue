import Vue from "vue";
import Vuex from "vuex";
import router from "./router";

Vue.use(Vuex);
export default new Vuex.Store({

  state: {
    isLoggedIn: !!localStorage.getItem("token"),
    userType: localStorage.getItem("role"),
    userData: {},
    appLoading: false,
    email:null,
    userHostel:{},
    blockId:null,
    fullData:{},
    menu:[],
  },
  mutations: {
    appLoading(state, payload) {
      state.appLoading = payload;
    },
    // sessionOut(state) {
    //   localStorage.removeItem("token");
    //   state.isLoggedIn = false;
    //   router.push("/login");
    // },
    userType(state, payload) {
      state.userType = payload
      localStorage.setItem("role", payload)
    },
    menu(state, payload) {
      state.menu = payload
      localStorage.setItem("menu", JSON.stringify(payload))
      console.log("menu2", state.menu)
    },
    loginUser(state, payload) {
      localStorage.setItem("token", payload);
      state.isLoggedIn = true;
      console.log("isloggedin=",state.isLoggedIn)
      console.log("userType=",state.userType)
      if (state.isLoggedIn == true && state.userType == 'SuperAdmin') {
        router.push("/dashboard") 
      }
      else if (state.isLoggedIn == true && state.userType == 'JewelleryAdmin') {
        router.push("/JewelleryDashboard") 
      }
      else if (state.isLoggedIn == true && state.userType == 'Staff') {
        router.push("/StaffDashboard") 
      }


    },
    logoutUser(state) {
      state.userType = null;
      state.isLoggedIn = false;
      state.userData = {};
      state.userHostel = {};
      state.initial = "";
      localStorage.removeItem("userType");
      localStorage.removeItem("token");
      router.push("/");

    },
   
    userData(state, payload) {
      state.userData = payload 
    },
    fullData(state, payload) {
      state.fullData = payload 
    },
    blockId(state, payload) {
      state.blockId = payload 
    },
    userHostel(state, payload) {
      state.userHostel = payload 
      // console.log("hostel=",payload)
    }
    
  },
  actions: {
    SOCKET_() {
        // do something
        alert("Actions")
    }
}
});
