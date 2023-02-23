<template>
  <div>
    <v-layout wrap>
      <v-flex xs12 >
        <v-card height="90px" width="270px"
        rounded-xl 
        :color="hover ? 'black' : 'none'"
        :style="hover ? 'color:white' : 'color:'" >
          <v-layout wrap fill-height justify-center align-content-space-around text-center>
            <v-flex xs12 style="font-size:14px" >
              <span> Executive Administrative Assistant </span>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<style>
.pill
{
    border-radius: 20px;
}
</style>