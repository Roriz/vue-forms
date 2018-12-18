<template>
  <v-toolbar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    color="blue darken-3"
    dark
    app
    fixed
  >
    <v-toolbar-title>
      <v-toolbar-side-icon @click.stop="toggleMenu"/>
      <span>Vue Forms</span>
    </v-toolbar-title>

    <v-spacer/>

    <v-btn icon large class="hidden-sm-and-down">
      <v-avatar size="32px" tile>
        <img src="https://vuejs.org/images/logo.png" alt="Vue" />
      </v-avatar>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'vf-header',

  methods: {
    toggleMenu() {
      this.$store.commit('SET_MENU', !this.$store.state.visibleMenu);
    },
  },
};
</script>
