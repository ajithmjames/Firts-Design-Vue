<template>
  <div>
    <v-img src="../../src/assets/bgim.png" alt="" height="1000px">
      <v-layout wrap fill-height justify-center a>
        <v-flex xs12 lg3 md5 sm6 align-self-center text-center>
          <v-img
            src="../../src/assets/3.1.jpg"
            height="45vh"
            width="450px"
            class="rounded-image"
          ></v-img>
          <span style="font-size: 39px; color: white"
            >loretta Andare <br
          /></span>
          <span style="font-size: 25px; color: white">Profession</span>
        </v-flex>
      </v-layout>
    </v-img>
    <v-layout wrap>
      <v-flex class="mr">
        <v-layout wrap justify-center p-10>
          <v-flex xs10 py-10>
            <span style="font-size: 25px">About Us</span>
          </v-flex>
        </v-layout>
        <v-card elevation="0">
          <v-layout wrap>
            <v-flex xs12 md4 sm8>
              <v-img class="rimg"
                src="../../src/assets/3.1.jpg"
                height="45vh"
                width="55vh"
              ></v-img>
            </v-flex>
            <v-flex xs8 md8 sm5>
              <span>
                Hello Everyone! To start, I would like to share that I am a
                complete Animal Lover and passionate about Wlidlife
                Conservation! Beyond, a thorough and competent Administrative
                and Executive Business Support Specialist, having worked across
                multiple domains and industries from the Private Sector Central
                & State Govt. of India, Higher Education & Fine Arts Institutes,
                Manufacturing & Service Industries, Executive Search Firms,
                Product Companies, and Non-Profit Organizations, accomplishing
                wide-ranging and specialized functions in Office Administration,
                C-Suite/Executive Business Support, Consulting, Human Resources,
                Recruitment Practices, Employee Engagement & Experience, Central
                & State Govt. of India, Higher Education & Fine Arts Institutes,
                Manufacturing & Service Industries, Executive Search Firms,
                Product Companies, and Non-Profit Organizations, accomplishing
                wide-ranging and specialized functions in Office Administration,
                C-Suite/Executive Business Support, Consulting, Human Resources,
                Recruitment Practices, Employee Engagement & Experience,
              </span>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- <v-layout wrap>
      <v-flex class="mr"> -->
        <page2/>
        <page3/>
      <!-- </v-flex>
    </v-layout> -->
    
    
  </div>
</template>
<style lang="scss" scoped>
.rimg {
  border-radius: 20px;
}
.pd {
  padding-top: 10px;
}
.mr {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 100px;
  margin-left: 100px;
}
</style>
<script>
import page2 from "../components/ScrollPage2.vue"
import page3 from "../components/ScrollPage3.vue"
export default {
  components :{
    page2,
    page3,

  }
}
</script>

