<template>
  <v-app>
    <vf-menu />
    <vf-header />

    <v-content>
      <v-container fluid fill-height>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import VfMenu from '@/views/layouts/menu.vue';
import VfHeader from '@/views/layouts/header.vue';

export default {
  components: {
    VfMenu,
    VfHeader,
  },
};
</script>
