<template>
  <footer class="primary">
    <div class="d-flex justify-center mb-1">
      <a
        href="https://twitter.com/VividPool"
        target="_blank"
        class="icon twitter"
      >
        <v-icon :size="20" color="#00acee">mdi-twitter</v-icon>
      </a>
      <a
        href="https://discord.gg/p7gWpQwKQR"
        target="_blank"
        class="icon discord"
      >
        <v-icon :size="20" color="#7289da">mdi-discord</v-icon>
      </a>
      <a href="https://t.me/vivid_pool" target="_blank" class="icon telegram">
        <v-icon :size="20" color="#0088cc">mdi-telegram</v-icon>
      </a>
    </div>
    <p class="ma-0 secondary--text text-body-2">2020 - 2021 Vivid Stake Pool</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>
<style lang="scss">
footer {
  width: 100%;
  position: fixed;
  bottom: 0px;
  height: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    gap: 25px;
  }
}
</style>
