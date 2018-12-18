<template>
  <component
    :is="componentTag"
    :field="field"
    :value="value"
    @input="v => $emit('input', v)"
  />
</template>

<script>
import VfCheckbox from '@/components/vf-checkbox.vue';
import VfInputText from '@/components/vf-input-text.vue';
import VfRadio from '@/components/vf-radio.vue';
import VfSelect from '@/components/vf-select.vue';
import FIELD_TYPES from '@/consts/field-types';

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
    value: {
      type: null,
    },
  },

  computed: {
    componentTag() {
      const fieldType = FIELD_TYPES.find(type => type.value === this.field.type);
      if (fieldType) {
        return fieldType.component;
      }
      return '';
    },
  },
};
</script>
