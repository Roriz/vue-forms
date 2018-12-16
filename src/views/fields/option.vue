<template>
  <li>
    <v-text-field
      v-model="option.label"
      label="Label"
      @input="handleOption"
    />

    <v-text-field
      v-model="option.value"
      label="Value"
      @input="handleOption"
    />

    <v-btn v-if="canDestroy" @click="$emit('destroy')">Destroy</v-btn>
  </li>
</template>

<script>
export default {
  name: 'vf-option',

  props: {
    value: {
      type: Object,
      required: true,
    },
    canDestroy: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      option: {
        value: '',
        label: '',
      },
    };
  },

  mounted() {
    this.option = this.value;
  },

  methods: {
    handleOption() {
      if (!this.valid) { return; }

      this.$emit('input', this.option);
    },
  },

  computed: {
    valid() {
      return this.option.value && this.option.label;
    },
  },
  watch: {
    value() {
      this.option = this.value;
    },
  },
};
</script>

<style lang="sass" scoped>
li
  display: flex
  flex-direction: row
  align-items: center

  * + *
    margin-left: 20px
</style>
