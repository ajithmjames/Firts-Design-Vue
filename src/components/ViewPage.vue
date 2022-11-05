<template>
  <div>
    <v-layout wrap>
      <v-flex lg12>
        <v-layout wrap>
          <v-flex lg12 pt-2 class="ml-">
            <H2 class="blue--text">User List</H2>
          </v-flex>
          <v-card>
            <template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Calories
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
          </v-card>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>