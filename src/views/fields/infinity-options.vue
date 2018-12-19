<template>
  <ul class="infinity-options">
    <vf-option
      v-for="(option, key) in options"
      :key="key"
      v-model="options[key]"
      :can-destroy="canDestroy"
      @input="handleOption"
      @destroy="handleDestroy(key)"
    />
  </ul>
</template>

<script>
import VfOption from '@/views/fields/option.vue';

export default {
  name: 'infinity-options',

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
      this.$emit('input', this.filterdOptions);
    },

    handleDestroy(key) {
      this.$emit('input', this.filterdOptions.filter((o, i) => i !== key));
    },

    reset() {
      this.options = [
        ...this.value,
        { label: '', value: '' },
      ];
    },
  },

  computed: {
    filterdOptions() {
      return this.options.filter(o => o.label && o.value);
    },

    canDestroy() {
      return this.options.length > 1;
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
.infinity-options
  list-style: none
</style>
