<template>
  <v-text-field
    :label="field.label"
    :value="value"
    :rules="rules"
    @input="v => $emit('input', v)"
  />
</template>

<script>
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

  computed: {
    rules() {
      const rules = [];
      if (this.field.required) {
        rules.push(value => !!value || 'Required.');
      }
      return rules;
    },
  },
};
</script>
