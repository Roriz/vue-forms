<template>
  <component
    :is="componentTag"
    :field="field"
  />
</template>

<script>
import VfCheckbox from '@/components/vf-checkbox.vue';
import VfInputText from '@/components/vf-input-text.vue';
import VfRadio from '@/components/vf-radio.vue';
import VfSelect from '@/components/vf-select.vue';

const TYPES_TO_COMPONENTS = {
  text: 'vf-input-text',
  select: 'vf-select',
  checkbox: 'vf-checkbox',
  radio: 'vf-radio',
};

export default {
  name: 'field-to-component',

  components: {
    VfCheckbox,
    VfInputText,
    VfRadio,
    VfSelect,
  },

  props: {
    field: {
      type: Object,
      required: true,
    },
    value: {},
  },

  computed: {
    componentTag() {
      return TYPES_TO_COMPONENTS[this.field.type];
    },
  },
};
</script>
