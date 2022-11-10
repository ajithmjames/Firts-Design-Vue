<template>
  <div>
    <v-layout wrap>
      <v-flex lg12 mx-6>
        <v-layout wrap>
          <v-flex lg12 pt-2>
            <v-spacer>&nbsp;</v-spacer>
            <H2 class="blue--text">User Page</H2>
            <v-spacer>&nbsp;</v-spacer>
          </v-flex>
          <v-layouy wrap>
            <v-flex (size)(1-12)cols="12" sm="6" md="3" lg="9">
              <v-text-field label="Spot Type" outlined></v-text-field>
            </v-flex>
          </v-layouy>
          <v-card>
            <v-simple-table>
              <template>
                <thead>
                  <tr>
                    <th class="text-left sbold" style="font-size: 15px">
                      Sr No.
                    </th>
                    <th class="text-left sbold" style="font-size: 15px">
                      Netted or Free
                    </th>
                    <th class="text-left sbold" style="font-size: 15px">
                      Date
                    </th>
                    <th class="text-left sbold" style="font-size: 15px">
                      Name of user
                    </th>

                    <th class="text-left sbold" style="font-size: 15px">
                      Ph.Number
                    </th>
                    <th class="text-left sbold" style="font-size: 15px">
                      Latitude
                    </th>
                    <th class="text-left sbold" style="font-size: 15px">
                      Longitude
                    </th>
                    <th class="text-left sbold" style="font-size: 15px">
                      Gender
                    </th>
                    <th class="text-left sbold" style="font-size: 15px">
                      Length (M)
                    </th>
                    <th class="text-left sbold" style="font-size: 15px">
                      Boat name
                    </th>
                    <th class="text-left sbold" style="font-size: 15px">
                      Boat number
                    </th>
                    <th class="text-left sbold" style="font-size: 15px">
                      Owner names
                    </th>
                    <th class="text-left sbold" style="font-size: 15px">
                      Condition
                    </th>
                    <th class="text-left sbold" style="font-size: 15px">
                      Other info
                    </th>
                    <th class="text-left sbold" style="font-size: 15px">
                      Photos/Videos and more..
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in list" :key="i">
                    <td>{{ item.boatname }}</td>
                    <td>
                      {{ item.field }}
                    </td>
                    <td>
                      {{ item.create_date }}
                    </td>
                    <td>
                      {{ item.userid.first_name }} &nbsp;&nbsp;
                      {{ item.userid.last_name }}
                    </td>
                    <td>
                      {{ item.userid.phone }}
                    </td>
                    <td v-if="item.location[1]">{{ item.location[1] }}</td>
                    <td v-else>-</td>
                    <td v-if="item.location[0]">{{ item.location[0] }}</td>
                    <td v-else>-</td>
                    <td>{{ item.gender }}</td>
                    <td>{{ item.length }}</td>
                    <td>{{ item.boatname }}</td>
                    <td v-if="item.boatno">{{ item.boatno }}</td>
                    <td v-else>-</td>
                    <td v-if="item.ownerName">{{ item.ownerName }}</td>
                    <td v-else>-</td>
                    <td v-if="item.ownerName">{{ item.ownerName }}</td>
                    <td v-else>-</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
          <v-layout wrap>
            <v-flex>
              <div class="text-center">
                <v-pagination v-model="page" :length="6"></v-pagination>
              </div>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      page: 1,
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      this.appLoading = true;
      axios({
        url: "/admin/record/view",
        method: "post",
        headers: {
          token: localStorage.getItem("token"),
        },
        data: {
          id: this.$route.query.id,
          page: this.page,
          limit: 10,
          type: this.animalType,
          field: this.spotType,
        },
      })
        .then((response) => {
          this.appLoading = false;
          if (response.data.status) {
            this.list = response.data.data;
            this.user = response.data.user;
            this.records = response.data.data;
            this.totalLength = response.data.totalLength;
            this.pagelength = Math.ceil(response.data.totalLength / 10);
            for (let i = 0; i < response.data.data.length; i++) {
              this.latt = response.data.data[i].location[1];
              this.lonn = response.data.data[i].location[0];
            }
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