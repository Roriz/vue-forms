<template>
  <v-dialog
    content-class="dialog-show"
    :value="opened"
    @input="$emit('close')"
    :width="isMobile ? 390 : 900"
  >
    <v-toolbar>
      <v-toolbar-title>Show Form</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn depressed>
        <v-switch
          :label="isMobile ? 'Mobile' : 'Desktop'"
          v-model="isMobile"
        />
      </v-btn>
    </v-toolbar>

    <div class="show-container" v-if="opened">
      <img v-if="isMobile" src="../../assets/iphone-portrait.png" />

      <div v-if="submitted" class="show-container-insider">
        <div v-for="(data, key) in beautifulData" :key="key">
          <label>{{data.label}}</label>
          <br/>
          <span>{{data.value}}</span>
        </div>
      </div>
      <v-form
        v-else
        class="show-container-insider"
        ref="form"
        v-model="valid"
        @submit.prevent="handleSubmit"
      >
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>{{form.form}}</v-card-title>

          <v-card-text>
            <field-to-component
              v-for="(field, key) in form.fields"
              :key="key"
              :field="field"
              :value="formData[key]"
              @input="v => handleFieldInput(key, v)"
            />
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn type="submit">Submit</v-btn>
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
    opened: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      submitted: false,
      isMobile: true,
      valid: true,
      formData: {},
    };
  },

  mounted() {
    this.reset();
  },

  methods: {
    handleSubmit() {
      this.$refs.form.validate();
      if (this.valid) {
        this.submitted = true;
      }
    },

    handleFieldInput(fieldKey, value) {
      this.formData[fieldKey] = value;
    },

    reset() {
      this.submitted = false;
      this.isMobile = true;
      this.valid = true;
      this.formData = {};
    },
  },

  computed: {
    beautifulData() {
      return this.form.fields.map((field, key) => ({
        ...field,
        value: this.formData[key],
      }));
    },
  },

  watch: {
    opened() {
      this.reset();
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

    img
      background-color: white

    img + .show-container-insider
      position: absolute
      top: 115px
      left: 35px
      width: 320px
      height: 568px
      background-color: white

    &-insider
      background-color: white
</style>
