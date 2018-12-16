<template>
  <ul class="infinity-fields">
    <li v-for="(field, key) in value" :key="key">
      <field-to-component :field="field" />
      <v-btn @click.prevent="handleDestroy(key)">Destroy</v-btn>
    </li>
    <li v-show="value.length === 0">Please insert a first field config</li>

    <li>
      <v-btn @click.prevent="creating = true">Add</v-btn>
      <field-dialog-create :opened="creating" @close="creating = false" @input="handleAdd"/>
    </li>
  </ul>
</template>

<script>
import FieldToComponent from '@/components/field-to-component.vue';
import FieldDialogCreate from '@/views/fields/dialog-create.vue';

export default {
  name: 'infinity-fields',

  components: {
    FieldDialogCreate,
    FieldToComponent,
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
    justify-content: space-between

</style>
