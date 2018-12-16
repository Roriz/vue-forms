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
            v-model="field.type"
            :items="fieldTypes"
            label="Type"
          />

          <v-text-field
            v-model="field.label"
            label="Label"
            required
          />

          <v-switch
            label="Required"
            v-model="field.required"
          />

          <field-multiple-options v-if="needOptions" v-model="field.options"/>
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
import FieldMultipleOptions from '@/views/fields/multiple-options.vue';

export default {
  name: 'infinity-fields',

  components: {
    FieldMultipleOptions,
  },

  props: {
    value: {
      type: Object,
      default: () => ({}),
    },

    opened: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      field: {
        type: '',
        label: '',
        options: [],
        required: false,
      },
    };
  },

  mounted() {
    this.reset();
  },

  methods: {
    handleSubmit() {
      this.$emit('input', this.field);
    },

    handleOpened() {
      this.$emit('close');
    },

    reset() {
      this.field = {
        type: '',
        label: '',
        options: [],
        required: false,
        ...(this.value || {}),
      };
    },
  },

  computed: {
    fieldTypes() {
      return ['text', 'select', 'checkbox', 'radio'];
    },

    needOptions() {
      return ['select', 'checkbox', 'radio'].includes(this.field.type);
    },
  },

  watch: {
    opened() {
      this.reset();
    },
  },
};
</script>
