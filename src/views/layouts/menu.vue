<template>
  <v-navigation-drawer
    :clipped="$vuetify.breakpoint.lgAndUp"
    :value="menuVisible"
    @input="handleMenu"
    fixed
    app
  >
    <v-list dense>
      <v-list-tile to="/">
        <v-list-tile-action><v-icon>home</v-icon></v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list dense>
      <v-list-tile to="/forms">
        <v-list-tile-action><v-icon>dns</v-icon></v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Froms</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'vf-menu',

  methods: {
    handleMenu(visible) {
      this.$store.commit('SET_MENU', visible);
    },
  },

  computed: {
    menuVisible() {
      return this.$store.state.visibleMenu;
    },
  },
};
</script>
