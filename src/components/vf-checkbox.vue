<template>
  <div>
    <label>{{ field.label }}</label>
    <v-checkbox
      hide-details
      v-for="(option, key) in field.options"
      :key="key"
      :value="option.value"
      :label="option.label"
      @input="v => $emit('input', v)"
      :required="field.required"
    />
  </div>
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

