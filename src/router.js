import Vue from "vue";
import Router from "vue-router";
// import store from "./store";

Vue.use(Router);
let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/log",
      name:"login",
      props: true,
      component: () => import("./components/LoginNew"),
      },
      {
        path: "/",
        name:"Page",
        props: true,
        component: () => import("./components/MysorePage"),
        },
        {
          path: "/home",
          name:"home1",
          props: true,
          component: () => import("./components/HomePage"),
          children:[
            {
              path: "/page1",
              name:"home2",
              component: () => import("./components/DashPage"),

            },
            {
              path: "/page2",
              name:"home3",
              component: () => import("./components/UserList"),

            },
            {
              path: "/page3",
              name:"home4",
              component: () => import("./components/PrivacyPolicy"),

            },
            {
              path: "/page4",
              name:"home5",
              component: () => import("./components/ReportPage"),

            },
            {
              path: "/page5",
              name:"home6",
              component: () => import("./components/ViewPage"),

            },
          ]
        
        },
        {
          path: "/parll",
          name:"parall",
          props: true,
          component: () => import("./components/ParallaxPage"),
          },
        {
          path: "/parl",
          name:"parl",
          props: true,
          component: () => import("./components/ParalLax"),
          },
        {
          path: "/ls",
          name:"ls",
          props: true,
          component: () => import("./components/login/loginSample"),
          },
        {
          path: "/servererror",
          name:"servererror",
          props: true,
          component: () => import("./components/500PagE"),
          },
        {
          path: "/sas",
          name:"sass",
          props: true,
          component: () => import("./components/SasssPage"),
          },
        {
          path: "/particle",
          name:"part",
          props: true,
          component: () => import("./components/ParticlesCursor"),
          },
        {
          path: "/scroll",
          name:"scroll",
          props: true,
          component: () => import("./components/ScrollPage"),
          },
        {
          path: "/IM",
          name:"IM",
          props: true,
          component: () => import("./components/ImageOverlay"),
          },





      // // {
      //   path: "/",
      //   name:"login",
      //   props: true,
      //   component: () => import("./components/PageNew1"),
      //   },
    
    // {
    //   path: "/admin",
    //   name:"admin",
    //   props: true,
    //   component: () => import("./components/adminDash2/dashBoard"),
    //   meta: {
    //     requiresAuth: true,
    //   },

    //   children: [
    //     {
    //       path: "/userlist",
    //       name: "userlist",
    //       meta: {
    //         requiresAuth: true,
    //       },
    //       component: () => import("./components/userList/list"),
    //     },
    //     {
    //       path: "/",
    //       name: "board",
    //       meta: {
    //         requiresAuth: true,
    //       },
    //       component: () => import("./components/board/board"),
    //     },
    //     {
    //       path: "/userview",
    //       name: "userview",
    //       meta: {
    //         requiresAuth: true,
    //       },
    //       component: () => import("./components/userList/userView"),
    //     },
    //     {
    //       path: "/uploaddetail",
    //       name: "uploaddetail",
    //       meta: {
    //         requiresAuth: true,
    //       },
    //       component: () => import("./components/userList/userUploadDetails"),
    //     },
    //     {
    //       path: "/privacy",
    //       name: "privayPolicy",
    //       meta: {
    //         requiresAuth: true,
    //       },
    //       component: () => import("./components/privacyPolicy/policy"),
    //     },
    //     {
    //       path: "/reports",
    //       name: "reports",
    //       meta: {
    //         requiresAuth: true,
    //       },
    //       component: () => import("./components/Reports/reports"),
    //     },
        
    //   ],

    // },
    // {
    //   path: "/privacyPolicy",
    //   props: true,
    //   component: () => import("./components/privacyPolicy/p"),
    //   meta: {
    //     requiresAuth: false,
    //   },
    // },
    // {
    //   path: "*",
    //   props: true,
    //   component: () => import("./common/404"),
    //   meta: {
    //     requiresAuth: false,
    //   },
    // },
    // {
    //   path: "/servererror",
    //   name: "servererror",
    //   props: true,
    //   component: () => import("./common/500"),
    //   meta: {
    //     requiresAuth: false,
    //   },
    // },
   
  
  ],
  scrollBehavior() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  },
});



export default router;
