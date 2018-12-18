<template>
  <v-app>
    <vf-menu class="vf-menu"/>
    <vf-header class="vf-header"/>

    <v-content>
      <v-container fluid>
        <router-view :key="pageCid"/>
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
      pageCid: new Date().getTime(),
    };
  },

  mounted() {
    EventBus.$on('reloadPage', this.updatePageCid);
  },

  methods: {
    updatePageCid() {
      this.pageCid = new Date().getTime();
    },
  },
};
</script>
