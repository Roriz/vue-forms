<template>
  <v-dialog
    content-class="dialog-show"
    :value="true"
    @input="$emit('close')"
    :width="simulateMobile ? 390 : 900"
  >
    <v-toolbar>
      <v-toolbar-title>Show Form</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn depressed v-show="$vuetify.breakpoint.mdAndUp">
        <v-switch
          :label="simulateMobile ? 'Mobile' : 'Desktop'"
          v-model="simulateMobile"
        />
      </v-btn>
    </v-toolbar>

    <div class="show-container">
      <img
        v-if="simulateMobile && $vuetify.breakpoint.mdAndUp"
        src="../../assets/iphone-portrait.png"
      />

      <div v-if="submitted" class="show-container-insider">
        <div v-for="(data, key) in formWithValue" :key="key">
          <label>{{data.label}}</label>
          <br/>
          <span>{{data.value}}</span>
        </div>
      </div>
      <v-form
        v-else
        class="show-container-insider"
        ref="form"
        v-model="isValid"
        @submit.prevent="handleSubmit"
      >
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>{{form.form}}</v-card-title>

          <v-card-text>
            <field-to-component
              v-for="(field, key) in form.fields"
              :key="key"
              :field="field"
              :value="formValues[key]"
              @input="v => handleFieldInput(key, v)"
            />
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" type="submit">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </div>
  </v-dialog>
</template>

<script>
import FieldToComponent from '@/components/field-to-component.vue';

export default {
  name: 'dialog-show',

  components: {
    FieldToComponent,
  },

  props: {
    form: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      submitted: false,
      simulateMobile: true,
      isValid: true,
      formValues: {},
    };
  },

  methods: {
    handleSubmit() {
      this.$refs.form.validate();
      if (this.isValid) {
        this.submitted = true;
      }
    },

    handleFieldInput(fieldKey, value) {
      this.formValues[fieldKey] = value;
    },
  },

  computed: {
    formWithValue() {
      return this.form.fields.map((field, key) => ({
        ...field,
        value: this.formValues[key],
      }));
    },
  },
};
</script>

<style lang="sass">
.dialog-show
  overflow: hidden

  .show-container
    max-height: 100%
    overflow: hidden
    position: relative

    &-insider
      background-color: white

@media (min-width: 960px)
  .dialog-show
    .show-container
      img
        background-color: white

      img + .show-container-insider
        position: absolute
        top: 115px
        left: 35px
        width: 320px
        height: 568px
        background-color: white

</style>
