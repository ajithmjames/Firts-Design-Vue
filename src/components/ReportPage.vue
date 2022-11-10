<template>
  <div>
    <v-layout wrap class="ma-4">
      <v-flex xs12>
        <v-layout wrap>
          <v-flex lg4 pt-3>
            <v-layout wrap>
              <v-flex class="blue--text display-1 font-weight-medium">
                <span> Reports</span>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex lg4>
            <v-layout wrap pt-3>
              <v-flex>
                <v-text-field placeholder="Sort" solo></v-text-field>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex lg4>
            <v-layout wrap pt-3 pl-5>
              <v-flex>
                 <v-btn class="blue white--text">Download-Excel</v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-layout wrap>
        <v-flex>
          <v-card height="100%" width="100%"> sdbr <br> ss </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
  </div>
</template>