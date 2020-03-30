<template>
  <div class="home">
    <ContactsList />
  </div>
</template>

<script>
import ContactsList from '@/components/ContactsList.vue';

export default {
  name: 'Home',
  components: {
    ContactsList,
  },
};
</script>
