<template>
  <li class="data-item">
    <div>{{ contact.name }}</div>
    <div>{{ contact.surname }}</div>
    <div>{{ contact.phone }}</div>
    <div>{{ contact.email }}</div>
    <button name="edit" v-on:click="changeActivePage('edit')">
      Edit
    </button>
    <button v-on:click="$emit('remove-contact', contact.id)">
      Delete
    </button>
  </li>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  computed: mapGetters(['currentActivePage']),
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations(['removeContact', 'setActivePAge', 'setEditedContact']),

    changeActivePage(newActivePage) {
      this.setActivePAge(newActivePage);
      this.$router.push('Action');
      this.setEditedContact(this.contact);
    },
  },
};
</script>

<style scoped>
.data-item {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  border: 1px solid #ccc;
  padding: 0.5rem 2rem;
  margin-bottom: 1px;
  align-items: center;
  box-sizing: border-box;
}
</style>
