<template>
  <div>
    <h2>Data list</h2>
    <button
      class="add-contact-btn"
      name="add"
      v-on:click="changeActivePage('add')"
    >
      Add
    </button>
    <ul>
      <Contact
        v-for="contact of allContacts"
        v-bind:contact="contact"
        v-bind:key="contact.id"
        v-on:remove-contact="removeContact"
      />
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Contact from '@/components/Contact';
export default {
  computed: mapGetters(['allContacts', 'currentActivePage']),
  components: {
    Contact,
  },
  methods: {
    ...mapMutations(['removeContact', 'setActivePAge']),
    deleteContact(id) {
      this.removeContact(id);
    },
    changeActivePage(newActivePage) {
      this.setActivePAge(newActivePage);
      this.$router.push('Action');
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.add-contact-btn {
  margin-bottom: 10px;
}
</style>
