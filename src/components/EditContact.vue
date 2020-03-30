<template>
  <div>
    <h2>Edit contact</h2>
    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="Name" v-model="name" />
      <input type="text" placeholder="Surname" v-model="surname" />
      <input type="text" placeholder="Phone" v-model="phone" />
      <input type="email" placeholder="Email" v-model="email" />
      <button type="submit">Save contact</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      name: this.contact.name || '',
      surname: this.contact.surname || '',
      phone: this.contact.phone || '',
      email: this.contact.email || '',
      id: this.contact.id || '',
    };
  },
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations(['editContact', 'unsetEditedContact']),
    onSubmit() {
      if (
        this.name.trim() &&
        this.surname.trim() &&
        this.phone.trim() &&
        this.email.trim() &&
        this.contact !== ''
      ) {
        this.editContact({
          id: this.contact.id,
          name: this.name,
          surname: this.surname,
          phone: this.phone,
          email: this.email,
        });
        this.name = '';
        this.surname = '';
        this.phone = '';
        this.email = '';
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  border: 1px solid #ccc;
  padding: 0.5rem 2rem;
  margin-bottom: 1px;
  align-items: center;
  box-sizing: border-box;
}

form input {
  min-width: 238px;
  max-width: 50%;
}

form input {
  margin-bottom: 1rem;
}

form button {
  width: 160px;
  margin: 0 auto;
}
</style>
