<template>
  <div>
    <v-layout wrap style="background-color:#172C78">
      <v-flex class="mr1">
        <v-card color="#172C78" elevation="0" rounded="0" >
          <v-layout wrap >
            <v-flex xs12 style="color: white" py-10 pl-8>
              <span> My Pages </span>
            </v-flex>
          </v-layout>
          <v-layout wrap >
            <v-flex xs6 v-for="(item, i) in icons" :key="i">
              <v-layout wrap>
                <v-flex xs2 md2 sm2 pl-8>
                  <v-img :src="item.image" height="60px" width="60px"></v-img>
                </v-flex>
                <v-flex xs12 md9 style="color: white" pb-9>
                  <v-layout wrap>
                    <v-flex xs12 pb-6> {{ item.head }} </v-flex>
                    <v-flex xs12>
                      {{ item.text }}
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<style scoped>
.mr1 {
  margin-bottom: 100px;
  margin-top: 100px;
  margin-right: 100px;
  margin-left: 100px;
}
.padd {
  padding-bottom: 20px;
}
</style>
<script>
export default {
  data() {
    return {
      icons: [
        {
          image: require("../../src/assets/Icon 1 (1).png"),
          head: "Education",
          text: "Higher Education & Fine Arts Institutes, Manufacturing & Service Industries, Executive Search Firms, Product Companies, and Non-Profit Organizations, accomplishing wide-ranging and specialized functions in Office Administration, ",
        },
        {
          image: require("../../src/assets/Icon 1 (2).png"),
          head: "Professional Background",
          text: "Higher Education & Fine Arts Institutes, Manufacturing & Service Industries, Executive Search Firms, Product Companies, and Non-Profit Organizations, accomplishing wide-ranging and specialized functions in Office Administration, ",
        },
        {
          image: require("../../src/assets/Icon 1 (3).png"),
          head: "Trainings",
          text: "Higher Education & Fine Arts Institutes, Manufacturing & Service Industries, Executive Search Firms, Product Companies, and Non-Profit Organizations, accomplishing wide-ranging and specialized functions in Office Administration, ",
        },
        {
          image: require("../../src/assets/Icon 1 (4).png"),
          head: "Certifications",
          text: "Higher Education & Fine Arts Institutes, Manufacturing & Service Industries, Executive Search Firms, Product Companies, and Non-Profit Organizations, accomplishing wide-ranging and specialized functions in Office Administration, ",
        },
        {
          image: require("../../src/assets/Icon 1 (5).png"),
          head: "Proficiencies/Skill-sets",
          text: "Higher Education & Fine Arts Institutes, Manufacturing & Service Industries, Executive Search Firms, Product Companies, and Non-Profit Organizations, accomplishing wide-ranging and specialized functions in Office Administration, ",
        },
      ],
    };
  },
};
</script>