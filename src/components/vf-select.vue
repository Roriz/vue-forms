<template>
  <v-select
    :label="field.label"
    :rules="rules"
    :items="field.options"
    @input="handleInput"
    item-text="label"
    item-value="text"
  />
</template>

<script>
import FormRules from '@/consts/form-rules';

export default {
  name: 'vf-select',

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
