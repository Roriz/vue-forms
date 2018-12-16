<template>
  <v-select
    :label="field.label"
    :required="field.required"
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
};
</script>
