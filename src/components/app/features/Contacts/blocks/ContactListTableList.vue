<template>
  <div class="contact-list-table-list">
    <ContactListTableItem
      v-for="(contact, i) in contacts"
      :key="i"
      :contact="contact"
      :selected="selectedContacts.includes(contact.id)"
      @add="addContactToSelection"
      @remove="removeContactFromSelection"
    />
  </div>
</template>

<script>
import ContactListTableItem from "./ContactListTableItem.vue";

// import contacts from "@/data/contacts.json";
export default {
  components: { ContactListTableItem },
  props: ["contacts"],
  data() {
    return {
      // contacts,
      selectedContacts: [],
    };
  },
  methods: {
    addContactToSelection(e){
      console.log({e});
      if(this.selectedContacts.includes(e)){
        return;
      }
      this.selectedContacts.push(e);
      console.log({selected: this.selectedContacts})
      this.checkIfIndeterminate()
    },
    removeContactFromSelection(e){
      console.log({e});
      if(!this.selectedContacts.includes(e)){
        return
      }
      this.selectedContacts.splice(this.selectedContacts.indexOf(e), 1)
      this.checkIfIndeterminate()
    }, 
    checkIfIndeterminate(){
      if(this.selectedContacts.length > 1 && this.selectAllContacts.length < this.contacts.length){
        this.$emit('indeterminate', true);
      } else {
        this.$emit('indeterminate', false);
      }
    },
    selectAllContacts(value){
      console.log({value})
      if(value){
        this.contacts.forEach(contact => {
          if(!this.selectedContacts.includes(contact.id)){
            this.selectedContacts.push(contact.id)
          }
        });
        
        return
      } 
        this.selectedContacts.splice(0, this.selectedContacts.length)
      this.checkIfIndeterminate()
      console.log({selectedContacts: this.selectedContacts})
    }
  },
};
</script>

<style>
</style>