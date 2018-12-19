<template>
  <v-text-field
    :label="field.label"
    :value="value"
    :rules="rules"
    @input="handleInput"
  />
</template>

<script>
import FormRules from '@/consts/form-rules';

export default {
  name: 'vf-input-text',

  props: {
    value: {
      type: String,
      default: '',
    },
    field: {
      type: Object,
      required: true,
    },
  },

  methods: {
    handleInput(value) {
      this.$emit('input', value);
    },
  },

  computed: {
    rules() {
      const rules = [];
      if (this.field.required) {
        rules.push(FormRules.required);
      }
      return rules;
    },
  },
};
</script>
