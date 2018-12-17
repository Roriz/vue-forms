<template>
  <v-toolbar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    color="blue darken-3"
    dark
    app
    fixed
  >
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      <v-toolbar-side-icon @click.stop="toggleMenu"></v-toolbar-side-icon>
      <span class="hidden-sm-and-down">Vue Forms</span>
    </v-toolbar-title>

    <v-spacer/>

    <v-btn icon large>
      <v-avatar size="32px" tile>
        <img src="https://vuejs.org/images/logo.png" alt="Vue" />
      </v-avatar>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      this.$store.commit('SET_MENU', !this.$store.state.visibleMenu);
    },
  },
};
</script>
