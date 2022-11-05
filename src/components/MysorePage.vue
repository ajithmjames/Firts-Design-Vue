<template>
  <v-app>
    <div>
      <v-layout wrap>
        <v-flex xs12>
          <v-app-bar>
            <v-layout wrap text-center class="fn1">
              <v-flex lg5 pt-3>
                <v-layout wrap>
                  <v-flex lg4>HOME</v-flex>
                  <v-flex lg4>HISTORY</v-flex>
                  <v-flex lg4>OUR VISION</v-flex>
                </v-layout>
              </v-flex>
              <v-flex lg2 font>
                <h1>MYSORE</h1>
              </v-flex>
              <v-flex lg5>
                <v-layout wrap pt-3>
                  <v-flex lg4>AREAS OF FOCUS</v-flex>
                  <v-flex lg4>PROJECT</v-flex>
                  <v-flex lg4>CONTACT</v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-app-bar>
        </v-flex>

        <v-flex xs12>
          <v-layout wrap style="width: 100%">
            <v-flex lg12 xs12>
              <v-img src="../assets/6.jpg" max-width="100%" height="840px">
                <v-layout wrap>
                  <v-flex pt-5 lg12 class="fn3">
                    <center>
                      <h1 class="fn2">Palace</h1>
                      <h2>
                        <v-icon>mdi-transfer-right</v-icon> oF
                        <v-icon>mdi-transfer-left</v-icon>
                      </h2>
                      <h1 class="fn2">Mysuru</h1>
                    </center>
                  </v-flex>
                  <v-flex lg12 style="color: white" class="fn4">
                    <center>
                      <br />The Mysore Palace is a historical palace and the
                      royal residence at Mysore in the<br />
                      Indian State of karnataka. It is the official residence of
                      the Wadiyar dynasty and<br />
                      the seat of the Kingdom of Mysore<br />
                    </center>
                  </v-flex>
                </v-layout>
              </v-img>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </div>
    <div class="px-15">
      <v-layout wrap>
        <v-flex pt-9 pb-5 pl-8 lg12 class="fn3" style="font-size: 35px" ;>
          The Most<strong> Latest News</strong> of the Week
        </v-flex>
        <v-flex xs12>
          <v-layout wrap>
            <!-- <v-flex lg4 v-for="item in 3" :key="item"> -->
            <!--For LooP-->
            <v-flex lg4>
              <v-card flat class="mx-9">
                <v-layout wrap>
                  <v-flex xs12>
                    <v-img src="../assets/2.1.jpg"></v-img>
                  </v-flex>
                  <v-flex xs12 py-2 class="fn5" style="font-size: 26px">
                    Contrary to popular belief, Lorem Ipsum is not<br />
                    simply random text.
                  </v-flex>
                  <v-flex xs12 class="font-weight-regular">
                    With the number of Coronavirus positive cases<br />
                    declining day-byday and businesses also <br />seeing
                    growth..
                  </v-flex>
                  <v-flex pt-1 class="font-weight-light">
                    Tue, 12th Jan 2021
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
            <v-flex lg4>
              <v-card flat class="mx-9">
                <v-layout wrap>
                  <v-flex xs12>
                    <v-img src="../assets/2.2.jpg"></v-img>
                  </v-flex>
                  <v-flex xs12 py-2 class="fn5" style="font-size: 26px">
                    Contrary to popular belief, Lorem Ipsum is not<br />
                    simply random text.
                  </v-flex>
                  <v-flex xs12 class="font-weight-regular">
                    With the number of Coronavirus positive cases<br />
                    declining day-byday and businesses also <br />seeing
                    growth..
                  </v-flex>
                  <v-flex pt-1 class="font-weight-light">
                    Tue, 12th Jan 2021
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
            <v-flex lg4>
              <v-card flat class="mx-9">
                <v-layout wrap>
                  <v-flex xs12>
                    <v-img src="../assets/2.3.jpg"></v-img>
                  </v-flex>
                  <v-flex xs12 py-2 class="fn5" style="font-size: 26px">
                    Contrary to popular belief, Lorem Ipsum is not<br />
                    simply random text.
                  </v-flex>
                  <v-flex xs12 class="font-weight-regular">
                    With the number of Coronavirus positive cases<br />
                    declining day-byday and businesses also <br />seeing
                    growth..
                  </v-flex>
                  <v-flex pt-1 class="font-weight-light">
                    Tue, 12th Jan 2021
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </div>
    <v-layout wrap>
      <v-flex lg6 pl-15 pt-12 v-for="item in 2" :key="item">
        <v-card flat class="pad3">
          <v-layout wrap>
            <v-flex lg2>
              <v-img src="../assets/2.2.jpg" width="100" height="100"></v-img>
            </v-flex>
            <v-flex lg10>
              <v-flex class="fn5" style="font-size: 26px">
                Recovering from COVID-19... Tourist footfall increases at
                Mysore<br />
                Palace, Zoo - Star of Mysore<br />
              </v-flex>
              <v-flex class="font-weight-regular">
                With the number of Coronavirus positive cases declining
                day-byday and<br />
                businesses also seeing growth...
              </v-flex>
              <v-flex class="font-weight-light"> Tue, 12th Jan 2021 </v-flex>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layot wrap>
      <v-flex lg12 pt-5 pb-5>
        <center>
          <v-btn color="primary" outlined rounded x-large
            >view all <v-icon> mdi-arrow-right </v-icon>
          </v-btn>
        </center>
      </v-flex>
    </v-layot>
    <v-layout wrap lg12 class="px-15">
      <v-flex pt-9 pb-5 pl-8 lg12 class="fn3" style="font-size: 35px" ;>
        <v-card flat>
          <v-layout>
            <v-flex lg2>
              <strong> Latest Events</strong>
            </v-flex>
            <v-flex lg2 class="font-weight-light" style="font-size: 15px" pt-4>
              TRENDING
            </v-flex>
            <v-flex lg2 class="font-weight-light" style="font-size: 15px" pt-4>
              NEW
            </v-flex>
            <v-flex lg2 class="font-weight-light" style="font-size: 15px" pt-4>
              UPCOMING
            </v-flex>
            <v-flex lg2 class="font-weight-light" style="font-size: 15px" pt-4>
              POPULAR
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <div class="px-15">
      <v-layout wrap>
        <v-card flat class="pad1">
          <v-flex lg12>
            <v-layout wrap>
              <v-flex lg4 class="pad2">
                <v-card dark style="background-color: green">
                  <v-layout wrap>
                    <v-flex xs12>
                      <v-img src="../assets/3.1.jpg" height="115%" width="115%">
                        <v-flex class="st1" pl-4 pb-4> Upcoming </v-flex>
                        <v-card-title class="st2">
                          Remembrance Day
                        </v-card-title>
                        <v-card-title class="st3">2nd March 2021</v-card-title>
                      </v-img>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex lg4>
                <v-card outlined xs12>
                  <v-img
                    class="white--text align-end"
                    height="240px"
                    src="../assets/3.4.jpg"
                  >
                  </v-img>
                  <v-card-title class="fn5" style="font-size: 26px">
                    Contrary to popular belief,<br />
                    Lorem Ipsum is not simply <br />random text.</v-card-title
                  >

                  <v-card-text>
                    <v-layout wrap>
                      <v-flex xs6 sm6 md10 text-left>Tue, 12th Jan 2021</v-flex>
                      <v-flex xs6 sm6 md2 text-right> read more </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex lg4>
                <v-card outlined max-width="large">
                  <v-img
                    class="white--text align-end"
                    height="240px"
                    src="../assets/3.2.jpg"
                  >
                  </v-img>
                  <v-card-title class="fn5" style="font-size: 26px">
                    Contrary to popular belief,<br />
                    Lorem Ipsum is not simply <br />random text.</v-card-title
                  >
                  <v-card-text>
                    <v-layout wrap>
                      <v-flex xs6 sm6 md10 text-left>Tue, 12th Jan 2021</v-flex>
                      <v-flex xs6 sm6 md2 text-right> read more </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-flex>

              <v-layout wrap>
                <v-flex xs11>
                  <v-layout wrap>
                    <v-flex lg4 class="pad2">
                      <v-card outlined max-width="large">
                        <v-img
                          class="white--text align-end"
                          height="240px"
                          src="../assets/3.3.jpg"
                        >
                        </v-img>
                        <v-card-title class="fn5" style="font-size: 26px">
                          Contrary to popular belief,<br />
                          Lorem Ipsum is not simply <br />random
                          text.</v-card-title
                        >

                        <v-card-text>
                          <v-layout wrap>
                            <v-flex xs6 sm6 md10 text-left
                              >Tue, 12th Jan 2021</v-flex
                            >
                            <v-flex xs6 sm6 md2 text-right> read more </v-flex>
                          </v-layout>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex lg4>
                      <v-card outlined max-width="large">
                        <v-img
                          class="white--text align-end"
                          height="240px"
                          src="../assets/3.5.jpg"
                        >
                        </v-img>
                        <v-card-title class="fn5" style="font-size: 26px">
                          Contrary to popular belief,<br />
                          Lorem Ipsum is not simply <br />random
                          text.</v-card-title
                        >
                        <v-card-text>
                          <v-layout wrap>
                            <v-flex xs6 sm6 md10 text-left
                              >Tue, 12th Jan 2021</v-flex
                            >
                            <v-flex xs6 sm6 md2 text-right> read more </v-flex>
                          </v-layout>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex lg4>
                      <v-card outlined max-width="large">
                        <v-img
                          class="white--text align-end"
                          height="240px"
                          src="../assets/3.6.jpg"
                        >
                        </v-img>
                        <v-card-title class="fn5" style="font-size: 26px">
                          Contrary to popular belief,<br />
                          Lorem Ipsum is not simply <br />random
                          text.</v-card-title
                        >
                        <v-card-text>
                          <v-layout wrap>
                            <!--Text Allignment-->
                            <v-flex xs6 sm6 md10 text-left
                              >Tue, 12th Jan 2021
                            </v-flex>
                            <v-flex xs6 sm6 md2 text-right> read more </v-flex>
                          </v-layout>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs1 lg1>
                  <v-card outline class="text-center" height="100%">
                    <v-layout wrap>
                      <v-flex xs12 style="color: blue" class="he1">
                        View All<v-icon style="color: blue" class="he1">
                          mdi-arrow-right</v-icon
                        >
                      </v-flex>
                    </v-layout>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-layout>
          </v-flex>
        </v-card>
      </v-layout>
    </div>
    <div>
      <v-card flat>
        <v-layout wrap>
          <v-flex class="he2">
            <center>
              <p class="fn5" style="font-size: 400%">About Us</p>
              <p style="font-size: 150%">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem <br />
                Ipsum has been the industry's standard dummy text ever since the
                1500s, when an<br />
                unknown printer took a galley of type and scrambled it to make a
                type specimen<br />
                book. It has survived not only five centuries, but also the leap
                into electronic<br />
                typesetting, remaining essentially unchanged.
              </p>
            </center>
          </v-flex>
        </v-layout>
        <v-layout lg12 pt-9 pb-9>
          <v-flex>
            <center>
              <v-btn elevation="2" rounded x-large color="orange" dark
                >Know More <v-icon>mdi-arrow-right</v-icon></v-btn
              >
            </center>
          </v-flex>
        </v-layout>
        <v-flex>
          <center>
            <v-flex class="fn5" style="font-size: 300%; color: black">
              We Invite you to Explore !
            </v-flex>
          </center>
          <v-flex style="padding-left: 39%">
            <v-flex class="fn4;" style="font-size: 35px"
              >History
              <v-icon
                color="black"
                style="padding-left: 20%; padding-bottom: 3%; padding-top: 4%"
                >mdi-arrow-right</v-icon
              ></v-flex
            >
            <v-flex class="rectangle"></v-flex>

            <v-flex class="fn4" style="font-size: 35px"
              >Team
              <v-icon
                color="black"
                style="padding-left: 21%; padding-bottom: 3%; padding-top: 3%"
                >mdi-arrow-right</v-icon
              ></v-flex
            >

            <v-flex class="fn4" style="font-size: 35px"
              >Advisory Group
              <v-icon
                color="black"
                style="padding-left: 6%; padding-bottom: 3%; padding-top: 3%"
                >mdi-arrow-right</v-icon
              ></v-flex
            >
          </v-flex>
        </v-flex>
        <v-layout wrap>
          <v-flex
            text-center
            class="fn4"
            style="font-size: 25px; padding-top: 4%"
          >
            Lorem Ipsum is simply dummy text of the printing and<br />
            typesetting industry. Lorem Ipsum has been the industry's<br />
            standard dummy text ever since the 1500s
          </v-flex>
        </v-layout>
        <v-layout wrap class="fn1" pt-15>
          <v-flex lg6 style="padding-left: 29%; font-size: 58px; color: orange">
            <strong>Our <br />Vision</strong>
          </v-flex>
          <v-flex
            lg6
            pt-3
            style="padding-left: 1%; font-size: 19px"
            class="fn4"
          >
            Lorem Ipsum is simply dummy text of the <br />
            printing and typesetting industry. Lorem Ipsum <br />has been the
            industry's standard dummy text<br />
            ever since the 1500s,
          </v-flex>
          <v-flex
            class="fn4"
            style="padding-left: 70%; font-size: 14px; color: orange"
          >
            Read More
          </v-flex>
        </v-layout>
        <v-flex style="padding-left: 29%; padding-top: 1%">
          <v-flex class="rect2"></v-flex>
        </v-flex>
        <v-layout wrap class="fn1" pt-15>
          <v-flex lg6 style="padding-left: 29%; font-size: 58px; color:rgb(33, 42, 65)">
            <strong>Areas of <br />Focus</strong>
          </v-flex>
          <v-flex
            lg6
            pt-3
            style="padding-left: 1%; font-size: 19px"
            class="fn4"
          >
            Lorem Ipsum is simply dummy text of the <br />
            printing and typesetting industry. Lorem Ipsum <br />has been the
            industry's standard dummy text<br />
            ever since the 1500s,
          </v-flex>
          <v-flex
            class="fn4"
            style="padding-left: 70%; font-size: 14px; color: orange"
          >
            Read More
          </v-flex>
        </v-layout>
        <v-flex style="padding-left: 29%; padding-top: 1%">
          <v-flex class="rect2"></v-flex>
        </v-flex>
        <v-layout wrap class="fn1" pt-15>
          <v-flex lg6 style="padding-left: 29%; font-size: 58px; color: rgb(33, 42, 65)">
            <strong>Our <br />Projects</strong>
          </v-flex>
          <v-flex
            lg6
            pt-3
            style="padding-left: 1%; font-size: 19px"
            class="fn4"
          >
            Lorem Ipsum is simply dummy text of the <br />
            printing and typesetting industry. Lorem Ipsum <br />has been the
            industry's standard dummy text<br />
            ever since the 1500s,
          </v-flex>
          <v-flex
            class="fn4"
            style="padding-left: 70%; font-size: 14px; color: orange"
          >
            Read More
          </v-flex>
        </v-layout>
        <v-flex style="padding-left: 29%; padding-top: 1%">
          <v-flex class="rect2">kk</v-flex>
        </v-flex>
      </v-card>
    </div>
  </v-app>
</template>