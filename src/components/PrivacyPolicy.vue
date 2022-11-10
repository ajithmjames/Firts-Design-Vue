<template>
  <div>
    <v-layout wrap lg12 ma-4>
      <v-flex>
        <v-layout wrap>
          <v-flex>
            <span class="font-weight-black" style="font-size: 25px">
              Add Privacy Policy</span
            >
          </v-flex>
        </v-layout>
        <v-layout wrap lg12>
          <v-flex>
            <v-text-field
              v-model="last"
              label="privacy policy"
              solo-inverted
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  last: "John",
};
</script>