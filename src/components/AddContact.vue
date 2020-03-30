<template>
  <div>
    <h2>Add new contact</h2>
    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="Name" v-model="name" />
      <input type="text" placeholder="Surname" v-model="surname" />
      <input type="text" placeholder="Phone" v-model="phone" />
      <input type="email" placeholder="Email" v-model="email" />
      <button type="submit">Create contact</button>
    </form>
    <div>
      <ImportContacts />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ImportContacts from '@/components/ImportContacts';
export default {
  data() {
    return {
      name: '',
      surname: '',
      phone: '',
      email: '',
      id: '',
    };
  },
  methods: {
    ...mapMutations(['createContact']),
    onSubmit() {
      if (
        this.name.trim() &&
        this.surname.trim() &&
        this.phone.trim() &&
        this.email.trim()
      ) {
        this.createContact({
          id: Date.now(),
          name: this.name,
          surname: this.surname,
          phone: this.phone,
          email: this.email,
          isEditing: false,
        });

        this.name = '';
        this.surname = '';
        this.phone = '';
        this.email = '';
      }
    },
  },
  components: {
    ImportContacts,
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
