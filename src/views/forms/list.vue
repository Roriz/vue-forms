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
      </template>
    </v-data-table>

    <v-btn fab bottom right color="pink" dark fixed to="/forms/create">
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'home',

  props: {
    headers: {
      type: Array,
      default: () => ([
        { text: 'Name', value: 'form' },
        { text: 'Qtd. Campos', value: 'fields' },
      ]),
    },
  },

  data() {
    return {
      loading: false,
      forms: [],
    };
  },

  mounted() {
    this.getForms();
  },

  methods: {
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
