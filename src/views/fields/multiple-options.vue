<template>
  <ul class="multiple-options">
    <vf-option
      v-for="(option, key) in options"
      :key="key"
      v-model="options[key]"
      :can-destroy="options.length > 1"
      @input="handleOption"
      @destroy="handleDestroy(key)"
    />
  </ul>
</template>

<script>
import VfOption from '@/views/fields/option.vue';

export default {
  name: 'multiple-options',

  components: {
    VfOption,
  },

  props: {
    value: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      options: [],
    };
  },

  mounted() {
    this.reset();
  },

  methods: {
    handleOption() {
      this.$emit('input', this.filledOptions);
    },

    handleDestroy(key) {
      this.$emit('input', this.filledOptions.filter((o, i) => i !== key));
    },

    reset() {
      this.options = [
        ...this.value,
        { label: '', value: '' },
      ];
    },
  },

  computed: {
    filledOptions() {
      return this.options.filter(o => o.label && o.value);
    },
  },

  watch: {
    value() {
      this.reset();
    },
  },
};
</script>

<style lang="sass" scoped>
.multiple-options
  list-style: none
</style>
