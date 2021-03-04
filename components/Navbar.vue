<template>
  <nav>
    <v-app-bar flat color="transparent">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>

      <nuxt-link
        v-for="(desitnation, i) in destinations"
        :key="`nav_${i}`"
        :to="desitnation.href"
        style="text-decoration: none"
        ><v-btn text x-large outlined color="white" class="mr-4"
          ><span class="font-weight-bold">{{ desitnation.text }}</span></v-btn
        >
      </nuxt-link>
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
    destinations: [
      {
        text: 'Home',
        href: '/',
      },
      {
        text: 'Our mission',
        href: '/mission',
      },
      {
        text: 'About us',
        href: '/about',
      },
      {
        text: 'Contact',
        href: '/contact',
      },
    ],
  }),
}
</script>
