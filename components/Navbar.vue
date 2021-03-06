<template>
  <nav>
    <v-app-bar flat color="transparent">
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        color="purple"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>

      <div v-if="$vuetify.breakpoint.mdAndUp">
        <nuxt-link
          v-for="(desitnation, i) in destinations"
          :key="`nav_${i}`"
          :to="desitnation.href"
          style="text-decoration: none"
          ><v-btn text x-large outlined color="white" class="mr-4"
            ><span class="font-weight-bold">{{ desitnation.text }}</span></v-btn
          >
        </nuxt-link>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <nuxt-link
        v-for="(desitnation, i) in destinations"
        :key="`nav_${i}`"
        :to="desitnation.href"
        style="text-decoration: none"
        ><v-btn text x-large outlined color="white" class="mr-4"
          ><span class="font-weight-bold">{{ desitnation.text }}</span></v-btn
        >
      </nuxt-link>
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
