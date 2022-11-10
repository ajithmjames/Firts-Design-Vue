<template>
  <div>
    <v-layout wrap>
      <v-flex xs12>
        <!-- <div>
          <v-flex class="font-weight-black headline"> User List </v-flex>
        </div> -->
        <v-card outlined class="ma-4">
          <v-card-title>
            <span> <h3 class="blue--text">User List</h3></span>
            <v-spacer></v-spacer>
            <v-text-field
              label="Search By Name"
              placeholder="Search.."
              @input="getData()"
              outlined
              v-model="search"
            >
            </v-text-field>
          </v-card-title>
        </v-card>
        <v-card class="ma-4">
          <v-layout wrap>
            <v-flex xs12>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left sbold" style="font-size: 15px">
                        Name
                      </th>
                      <th class="text-left sbold" style="font-size: 15px">
                        Phone Number
                      </th>
                      <th class="sbold" style="font-size: 15px">View</th>
                      <th class="sbold" style="font-size: 15px">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in user" :key="i">
                      <td>
                        {{ item.first_name }}&nbsp;&nbsp;
                        {{ item.last_name }}
                      </td>
                      <td>{{ item.phone }}</td>

                      <td>
                        <router-link
                          :to="'/page5?id=' + item._id"
                          style="text-decoration: none"
                        >
                          <v-btn icon
                            ><v-icon color="blue"
                              >mdi-account-eye</v-icon
                            ></v-btn
                          >
                        </router-link>
                      </td>

                      <td>
                        <v-btn icon
                          ><v-icon color="red">mdi-delete-empty</v-icon></v-btn
                        >
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-flex>
          </v-layout>
        </v-card>
        <v-layout wrap pt-3 pb-2>
          <v-flex xs12 text-center>
            <v-pagination v-model="page" :length="4" circle></v-pagination>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
// import ImageComp from  "@/components/Common/singleImage";
import axios from "axios";
export default {
  data() {
    return {
      user: [],
      search: null,
      page: 1,
    };
  },

  mounted() {
    this.getData();
  },
  watch: {
    search() {
      this.getData();
    },
  },
  methods: {
    getData() {
      // localStorage.setItem("fromDateE", this.fromDate);
      // localStorage.setItem("toDateE", this.toDate);
      // localStorage.setItem("Esearch", this.apSearch);

      this.appLoading = true;
      axios({
        url: "/admin/getall/users",
        method: "post",
        data: {
          page: 1,
          limit: 20,
          keyword: this.search,
        },
        headers: {
          token: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          this.appLoading = false;
          if (response.data.status) {
            this.user = response.data.data;
            // this.pagelength = Math.ceil(response.data.totalLength / this.limit);
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