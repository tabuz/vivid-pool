<template>
  <nav>
    <v-app-bar flat>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title
        ><span class="font-weight-bold"
          >Vivid Stake Pools</span
        ></v-toolbar-title
      >
      <v-spacer></v-spacer>

      <v-btn text class="mr-4"
        ><span class="font-weight-bold">OUR MISSION</span></v-btn
      >
      <v-btn text class="mr-4"
        ><span class="font-weight-bold">ABOUT US</span></v-btn
      >
      <v-btn text class="mr-4"
        ><span class="font-weight-bold">CONTACT</span></v-btn
      >
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    drawer: false,
    group: null,
  }),
}
</script>
