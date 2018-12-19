<template>
  <v-dialog
    :value="true"
    @input="close"
    width="500"
  >
    <v-form @submit.prevent="handleSubmit">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Add new field
        </v-card-title>

        <v-card-text>
          <v-select
            v-model="field.type"
            :items="fieldTypes"
            :rules="typeRules"
            label="Type"
            required
          />

          <v-text-field
            v-model="field.label"
            :rules="labelRules"
            label="Label"
            required
          />

          <v-switch
            label="Required"
            v-model="field.required"
          />

          <infinity-options v-show="needOptions" v-model="field.options"/>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn type="submit">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
import InfinityOptions from '@/views/fields/infinity-options.vue';
import FORM_RULES from '@/consts/form-rules';
import FIELD_TYPES from '@/consts/field-types';

export default {
  name: 'dialog-create',

  components: {
    InfinityOptions,
  },

  props: {
    value: {
      type: Object,
      default: () => ({}),
    },

    typeRules: {
      type: Array,
      default: () => ([FORM_RULES.required]),
    },

    labelRules: {
      type: Array,
      default: () => ([FORM_RULES.required]),
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
    this.field = {
      ...this.field,
      ...this.value,
    };
  },

  methods: {
    handleSubmit() {
      this.$emit('input', this.field);
    },

    close() {
      this.$emit('close');
    },
  },

  computed: {
    fieldTypes() {
      return Object.values(FIELD_TYPES).map(t => t.value);
    },

    needOptions() {
      return FIELD_TYPES.some(t => t.needOptions && t.value === this.field.type);
    },
  },
};
</script>
