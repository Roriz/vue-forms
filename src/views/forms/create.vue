<template>
  <form @submit.prevent="handleSubmit">
    <v-text-field
      v-model="form.name"
      label="Name"
      required
    />

    <vf-infinity-fields v-model="form.fields"/>

    <v-btn type="submit" :disabled="loading">submit</v-btn>
  </form>
</template>

<script>
import VfInfinityFields from '@/components/infinity-fields.vue';
import EventBus from '@/utils/event-bus';

export default {
  name: 'form-create',

  components: {
    VfInfinityFields,
  },

  props: {
  },

  data() {
    return {
      loading: false,
      form: {
        name: '',
        fields: [],
      },
    };
  },

  methods: {
    async handleSubmit() {
      this.loading = true;
      try {
        await this.$store.dispatch('forms/create', this.form);
        this.$nextTick(() => {
          EventBus.$emit('vf-notify', { color: 'success', text: 'Form created!' });
          EventBus.$emit('reloadPage');
        });
      } catch (e) {
        console.error(e);
        EventBus.$emit('vf-notify', { color: 'error', text: e.message });
      }
      this.loading = false;
    },
  },
};
</script>
