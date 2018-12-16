<template>
  <div class="home">
    <v-data-table
      :headers="headers"
      :items="forms"
      :loading="loading"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.form }}</td>
        <td>{{ props.item.fields.length }}</td>
        <td><v-btn @click="handlePreview(props.item)">Preview</v-btn></td>
      </template>
    </v-data-table>

    <v-btn fab bottom right color="pink" dark fixed to="/forms/create">
      <v-icon>add</v-icon>
    </v-btn>

    <dialog-show :opened="previewing" :form="selected" @close="previewing = false"/>
  </div>
</template>

<script>
import DialogShow from '@/views/forms/dialog-show.vue';

export default {
  name: 'form-list',

  components: {
    DialogShow,
  },

  props: {
    headers: {
      type: Array,
      default: () => ([
        { text: 'Name', value: 'form' },
        { text: 'Fields Size', value: 'fields' },
        { text: 'Actions', value: 'form' },
      ]),
    },
  },

  data() {
    return {
      previewing: false,
      loading: false,
      selected: {},
      forms: [],
    };
  },

  mounted() {
    this.getForms();
  },

  methods: {
    handlePreview(form) {
      this.selected = form;
      this.previewing = true;
    },

    async getForms() {
      this.loading = true;

      try {
        this.forms = await this.$store.dispatch('forms/fetchBy');
      } catch (e) {
        console.error(e);
      }

      this.loading = false;
    },
  },
};
</script>
