<template>
  <v-menu
    offset-y
    open-on-hover
    tile
    color="transparent"
    content-class="elevation-0"
  >
    <template #activator="{ on, attrs }">
      <v-btn color="transparent" elevation="0" v-bind="attrs" v-on="on">
        <v-img
          aspect-ratio="2/1"
          :src="require(`@/static/${$i18n.locale.toLowerCase()}.svg`)"
          max-height="20px"
          min-height="20px"
          max-width="40px"
          min-width="40px"
        />
      </v-btn>
    </template>
    <template v-for="locale in $i18n.locales">
      <nuxt-link
        v-if="locale.code !== $i18n.locale"
        :key="`locale_${locale.code}`"
        :to="switchLocalePath(locale.code)"
        class="d-flex flex-column align-center mt-2"
        ><v-img
          aspect-ratio="2/1"
          :src="require(`@/static/${locale.code}.svg`)"
          max-height="20px"
          min-height="20px"
          max-width="40px"
          min-width="40px"
      /></nuxt-link>
    </template>
  </v-menu>
</template>
