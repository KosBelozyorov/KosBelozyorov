<template>
  <div>
    <router-link to="/">Back to Home</router-link>
    <div v-if="this.currentActivePage === 'edit'">
      <EditContact v-bind:contact="this.currentEditedContact" />
    </div>
    <div v-else>
      <AddContact />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import EditContact from '@/components/EditContact';
import AddContact from '@/components/AddContact';
export default {
  computed: mapGetters(['currentActivePage', 'currentEditedContact']),
  components: {
    AddContact,
    EditContact,
  },
};
</script>
