<template>
  <v-dialog
    :value="opened"
    @input="handleOpened"
    width="500"
  >
    <form @submit.prevent="handleSubmit">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Add new field
        </v-card-title>

        <v-card-text>
          <v-select
            :items="fieldTypes"
            label="Type"
          />
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn type="submit">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </form>
  </v-dialog>
</template>

<script>
export default {
  name: 'infinity-fields',

  props: {
    value: {
      type: Object,
      default: () => ({ type: 'text' }),
    },

    opened: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      field: {
        type: 'text',
      },
    };
  },

  mounted() {
    if (this.value) {
      this.field = {
        ...this.value,
        ...this.field,
      };
    }
  },

  methods: {
    handleSubmit() {
      console.log('-- handleSubmit', this.field);
      this.$emit('input', this.field);
    },

    handleOpened() {
      this.$emit('close');
    },
  },

  computed: {
    fieldTypes() {
      return ['text'];
    },
  },
};
</script>
