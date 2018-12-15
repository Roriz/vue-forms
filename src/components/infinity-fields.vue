<template>
  <ul class="infinity-fields">
    <li v-for="(field, key) in value" :key="key">
      <div>Type: {{ field.type }}</div>
      <v-btn @click.prevent="handleDestroy(key)">Destroy</v-btn>
    </li>
    <li>
      <v-btn @click.prevent="creating = true">Add</v-btn>
      <field-dialog-create :opened="creating" @close="creating = false" @input="handleAdd"/>
    </li>
  </ul>
</template>

<script>
import FieldDialogCreate from '@/views/fields/dialog-create.vue';

export default {
  name: 'infinity-fields',

  components: {
    FieldDialogCreate,
  },

  props: {
    value: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      creating: false,
    };
  },

  methods: {
    handleDestroy(key) {
      this.$emit('input', this.value.filter((v, i) => i !== key));
    },

    handleAdd(field) {
      this.creating = false;
      this.$emit('input', [...this.value, field]);
    },
  },
};
</script>

<style lang="sass" scoped>
.infinity-fields
  list-style: none

  li
    display: flex
    flex-direction: row
    align-items: center

</style>
