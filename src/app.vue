<template>
  <v-app>
    <vf-menu />
    <vf-header />

    <v-content>
      <v-container fluid>
        <router-view :key="viewCid"/>
      </v-container>
    </v-content>

    <vf-notify />
  </v-app>
</template>

<script>
import VfMenu from '@/views/layouts/menu.vue';
import VfHeader from '@/views/layouts/header.vue';
import VfNotify from '@/views/layouts/notify.vue';
import EventBus from '@/utils/event-bus';

export default {
  components: {
    VfMenu,
    VfHeader,
    VfNotify,
  },

  data() {
    return {
      viewCid: new Date().getTime(),
    };
  },

  mounted() {
    EventBus.$on('reloadPage', this.updateViewCid);
  },

  methods: {
    updateViewCid() {
      this.viewCid = new Date().getTime();
    },
  },
};
</script>
