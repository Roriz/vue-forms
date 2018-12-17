<template>
  <v-select
    :label="field.label"
    :rules="rules"
    :items="field.options"
    @input="v => $emit('input', v)"
    item-text="label"
    item-value="text"
  />
</template>

<script>
export default {
  name: 'vf-select',

  props: {
    value: {
      type: Object,
      default: () => ({}),
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
