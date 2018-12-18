<template>
  <v-form v-model="isValid" ref="form" @submit.prevent="handleSubmit">
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>
        {{ isEdit ? 'Edit' : 'Create' }} form
      </v-card-title>

      <v-card-text>
        <v-text-field
          v-model="form.form"
          label="Name"
          :rules="formRules"
          required
        />

        <infinity-fields v-model="form.fields"/>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="deep-purple lighten-2"
          :disabled="loading"
          @click="previewing = true"
        >
          Preview
        </v-btn>
        <v-btn
          color="success"
          type="submit"
          :disabled="loading"
        >
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>

    <dialog-show v-if="previewing" :form="form" @close="previewing = false"/>
  </v-form>
</template>

<script>
import InfinityFields from '@/views/fields/infinity-fields.vue';
import DialogShow from '@/views/forms/dialog-show.vue';
import EventBus from '@/utils/event-bus';
import FORM_RULES from '@/consts/form-rules';

export default {
  name: 'form-create',

  components: {
    InfinityFields,
    DialogShow,
  },

  props: {
    formRules: {
      type: Array,
      default: () => ([FORM_RULES.required]),
    },
  },

  data() {
    return {
      previewing: false,
      loading: false,
      isValid: true,
      form: {
        name: '',
        fields: [],
      },
    };
  },

  mounted() {
    this.getForm(this.$route.params.id);
  },

  methods: {
    handleSubmit() {
      this.$refs.form.validate();
      if (this.isValid) {
        this.save();
      }
    },

    async save() {
      this.loading = true;
      try {
        if (this.isEdit) {
          await this.$store.dispatch('forms/edit', this.form);
        } else {
          await this.$store.dispatch('forms/create', this.form);
        }
        this.$nextTick(() => {
          EventBus.$emit('vf-notify', { color: 'success', text: 'Form created!' });
          EventBus.$emit('reloadPage');
        });
      } catch (e) {
        // TODO: Add bug/request tracker like bugsnag
        console.error(e);
        EventBus.$emit('vf-notify', { color: 'error', text: e.message || 'something went wrong try again later' });
      }
      this.loading = false;
    },

    async getForm(id) {
      if (!id) { return; }

      this.loading = true;
      try {
        this.form = await this.$store.dispatch('forms/fetchOne', id);
      } catch (e) {
        // TODO: Add bug/request tracker like bugsnag
        console.error(e);
      }
      this.loading = false;
    },
  },

  computed: {
    isEdit() {
      return this.$route.params.id;
    },
  },
};
</script>
