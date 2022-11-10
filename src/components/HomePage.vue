<template>
  <div>
    <v-layout wrap>
      <v-flex xs12 sm12 md12 lg2 pr-0 class="hidden-sm-and-down">
        <v-navigation-drawer
          class="fixedSidebar"
          v-model="sidebar"
          clipped
          width="100%"
          height="100%"
          permanent
          color="rgb(21, 95, 117)"
        >
          <v-list >
            <v-list-item
              v-for="link in dashpanel"
              :key="link.text"
              router
              :to="link.route"
            >
              <v-list-item-action
                ><v-icon class="white--text">{{
                  link.icon
                }}</v-icon></v-list-item-action
              >
              <v-list-item-content>
                <v-list-item-title class="white--text">{{
                  link.text
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-flex>
      <v-flex xs12 sm12 md12 lg10>
        <v-card outlined>
          <router-view> </router-view>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebar: false,
      dashpanel: [
        {
          icon: "mdi-view-dashboard-outline",
          text: "Dashboard ",
          route: "/page1",
        },
        { icon: "mdi-account-multiple", text: "User List ", route: "/page2" },
        { icon: "mdi-seal", text: "Privacy Policy", route: "/page3" },
        { icon: "mdi-chart-bar", text: "Reports ", route: "/page4" },
      ],
    };
  },
};
</script>z