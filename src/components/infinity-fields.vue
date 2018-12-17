<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>Fields</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn color="green" @click.prevent="creating = true">Add</v-btn>
      <field-dialog-create
        :value="value[selectedKey] || {}"
        :opened="creating"
        @close="closeFieldCreate"
        @input="handleField"
      />
    </v-toolbar>

    <v-data-table
      :headers="headers"
      :items="value"
      class="elevation-1"
      hide-actions
      :must-sort="false"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.label }}</td>
        <td>{{ props.item.type }}</td>
        <td>{{ props.item.required }}</td>
        <td>{{ props.item.options.length }}</td>
        <td class="justify-center layout px-0">
          <v-btn color="info" @click="handleEdit(props.index)">Edit</v-btn>
          <v-btn color="error" @click="handleDestroy(props.index)">Destroy</v-btn>
        </td>
      </template>
    </v-data-table>
  </div>
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
    headers: {
      type: Array,
      default: () => ([
        { text: 'Label', value: 'label', sortable: false },
        { text: 'Type', value: 'type', sortable: false },
        { text: 'Is required', value: 'required', sortable: false },
        { text: 'Options size', value: 'options', sortable: false },
        { text: 'Actions', value: 'type', sortable: false },
      ]),
    },
  },

  data() {
    return {
      creating: false,
      selectedKey: null,
    };
  },

  methods: {
    handleDestroy(key) {
      this.$emit('input', this.value.filter((v, i) => i !== key));
    },

    handleEdit(key) {
      this.selectedKey = key;
      this.creating = true;
    },

    handleField(field) {
      if (this.hasSelected) {
        this.edit(field, this.selectedKey);
      } else {
        this.add(field);
      }
      this.closeFieldCreate();
    },

    add(field) {
      this.$emit('input', [...this.value, field]);
    },

    edit(field, key) {
      this.$emit('input', this.value.map((v, i) => (i === key ? field : v)));
    },

    closeFieldCreate() {
      this.selectedKey = null;
      this.creating = false;
    },
  },

  computed: {
    hasSelected() {
      return this.selectedKey !== null;
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
