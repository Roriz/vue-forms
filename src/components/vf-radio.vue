<template>
  <v-radio-group :label="field.label" :value="value" @input="v => $emit('input', v)">
    <v-radio
      v-for="(option, key) in field.options"
      :key="key"
      :value="option.value"
      :label="option.label"
      :required="value.required"
    />
  </v-radio-group>
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

