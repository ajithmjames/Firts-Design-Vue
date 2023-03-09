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
          <v-simple-table>
            <template>
              <thead>
                <tr>
                  <th class="fn4" style="font-size: 15px">Sr No.</th>
                  <th class="fn4" style="font-size: 15px">Netted or Free</th>
                  <th class="fn4" style="font-size: 15px">Date</th>
                  <th class="fn4" style="font-size: 15px">Name of user</th>

                  <th class="fn4" style="font-size: 15px">Ph.Number</th>
                  <th class="fn4" style="font-size: 15px">Latitude</th>
                  <th class="fn4" style="font-size: 15px">Longitude</th>
                  <th class="fn4" style="font-size: 15px">Gender</th>
                  <th class="fn4" style="font-size: 15px">Length (M)</th>
                  <th class="fn4" style="font-size: 15px">Boat name</th>
                  <th class="fn4" style="font-size: 15px">Boat number</th>
                  <th class="fn4" style="font-size: 15px">Owner name</th>
                  <th class="fn4" style="font-size: 15px">Condition</th>
                  <th class="fn4" style="font-size: 15px">Other info</th>
                  <th class="fn4" style="font-size: 15px">
                    Photos/Videos and more..
                  </th>
                </tr>
              </thead>
              <tbody class="font-weight-medium">
                <tr v-for="(item, i) in ulist" :key="i">
                  <td>
                    {{ item.__v }}
                  </td>
                  <td>
                    {{ item.field }}
                  </td>
                  <td>
                    {{ item.create_date.slice(0, 10) }}
                  </td>
                  <td>
                    <span v-if="item.userid">
                      {{ item.userid.first_name }} &nbsp;
                      {{ item.userid.last_name }}
                    </span>
                  </td>
                  <td>
                    <span v-if="item.userid">
                      {{ item.userid.phone }}
                    </span>
                  </td>
                  <td v-if="item.location">
                    {{ item.location[0] }}
                  </td>
                  <td>
                    {{ item.location[1] }}
                  </td>
                  <td v-if="item.gender">{{ item.gender }}</td>
                  <td v-else>-</td>
                  <td v-if="item.length">{{ item.length }}</td>
                  <td v-else>-</td>
                  <td v-if="item.boatname">{{ item.boatname }}</td>
                  <td v-else>-</td>
                  <td v-if="item.boatno">{{ item.boatno }}</td>
                  <td v-else>-</td>

                  <td v-if="item.ownerName">{{ item.ownerName }}</td>
                  <td v-else>-</td>
                  <td v-if="item.health"> {{item.health}}
                  </td>
                  <td v-else>-</td>
                  <td v-if="item.description">{{item.description}} </td>
                  <td v-else>--</td>
                  <td class="text-center">
                    <router-link
                      style="text-decoration: none; color: black"
                      :to="'/page2              ?id=' + ulist._id"
                    >
                      <v-btn icon> <v-icon color="blue">mdi-eye</v-icon> </v-btn>
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-flex>
      </v-layout>
    </v-layout>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      ulist: [],
    };
  },

  mounted() {
    this.getData();
  },
  watch: {},
  methods: {
    getData() {
      this.appLoading = true;
      axios({
        url: "/admin/view/all/reports",
        method: "get",
        data: {
          page: 1,
          limit: 20,
        },
        headers: {
          token: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          this.appLoading = false;
          if (response.data.status) {
            this.ulist = response.data.data;
          } else {
            this.showsnackbar = true;
            this.msg = response.data.msg;
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