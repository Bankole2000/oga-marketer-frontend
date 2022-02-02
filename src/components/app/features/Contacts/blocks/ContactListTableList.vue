<template>
  <div class="contact-list-table-list">
    <ContactListTableItem
      v-for="(contact, i) in contacts"
      :key="i"
      :contact="contact"
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
    };
  },
};
</script>

<style>
</style>