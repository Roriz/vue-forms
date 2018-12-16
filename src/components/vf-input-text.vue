<template>
  <v-text-field
    :label="field.label"
    :value="value"
    @input="v => $emit('input', v)"
    :required="field.required"
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
};
</script>
