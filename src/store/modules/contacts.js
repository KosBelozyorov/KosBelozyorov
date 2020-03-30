export default {
  state: {
    contacts: [
      {
        id: 1,
        name: 'John',
        surname: 'Doe',
        phone: '0987949507',
        email: 'jd@gmail.com',
        isEditing: false,
      },
      {
        id: 2,
        name: 'Johanna',
        surname: 'Doe',
        phone: '0987949577',
        email: 'jad@gmail.com',
        isEditing: false,
      },
    ],
    activePage: null,
    contactToEdit: null,
  },
  mutations: {
    updateContacts(state, contacts) {
      state.contacts = contacts;
    },
    createContact(state, newContact) {
      state.contacts.push(newContact);
    },
    editContact(state, editedContact) {
      state.contacts.map(contact => {
        if (contact.id === editedContact.id) {
          contact.name = editedContact.name;
          contact.surname = editedContact.surname;
          contact.phone = editedContact.phone;
          contact.email = editedContact.email;
        }
      });
    },
    removeContact(state, id) {
      state.contacts = state.contacts.filter(contact => contact.id !== id);
    },
    importContacts(state, newContacts) {
      newContacts.forEach(contact => {
        state.contacts.push(contact);
      });
    },
    setActivePAge(state, newActivePage) {
      state.activePage = newActivePage;
    },
    setEditedContact(state, editedContact) {
      state.contactToEdit = editedContact;
    },
    unsetEditedContact(state) {
      state.contactToEdit = null;
    },
  },
  actions: {},
  getters: {
    allContacts(state) {
      return state.contacts;
    },
    currentActivePage(state) {
      return state.activePage;
    },
    currentEditedContact(state) {
      return state.contactToEdit;
    },
  },
};
