<template>
  <div>
    <v-app-bar>
      <v-flex>dsd</v-flex>
    </v-app-bar>
    <v-layout wrap>
      <v-flex>
        <v-img src="../assets/2.jpeg" height="600px" width="1500px">
          <v-flex class="myclass" py-3 style="font-family: poppinsBlack2"
            ><center>
              <h1>PALACE</h1>
              <h6>OF</h6>
              <h1>MYSORE</h1>
            </center></v-flex
          >

          <v-flex class="myclass" py-3 style="font-family: poppinsBold"
            ><center>
              Mysore is situated at the foothills of Chamundi Hills about 145.2
              km (90 mi<br />
              it towards the southwest of Bangalore and spread across an area of
              286.05 k<br />
              Mysore City Corporation is responsible for the civic
              administration of the <br />
              which i also the headquarters of Mysore district and Mysore
              division. of it<br />
            </center>
          </v-flex>

          <v-layout fill-height> </v-layout>
        </v-img>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>
