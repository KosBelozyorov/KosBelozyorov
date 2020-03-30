<template>
  <div>
    <h2>Import from JSON</h2>
    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="JSON" v-model="importData" />
      <button type="submit">Import contacts</button>
    </form>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      importData: '',
    };
  },
  methods: {
    ...mapMutations(['importContacts']),
    isJson(str) {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }

      return true;
    },
    onSubmit() {
      if (this.isJson(this.importData)) {
        const newContacts = Object.values(JSON.parse(this.importData));

        this.importContacts(newContacts);
        this.importData = '';
      }
    },
  },
};
</script>
