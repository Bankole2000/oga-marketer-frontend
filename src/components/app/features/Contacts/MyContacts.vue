<template>
  <div class="my-contacts">
    <div class="page-header px-8">
      <p class="display-1 mb-0 grey--text text--darken-2">Contacts</p>
      <v-divider vertical class="ma-4" />
      <v-chip
        class="primary--text"
        style="background-color: var(--primary-light)"
        @click="showAddNewContactForm"
      >
        <v-avatar left>
          <v-icon color="primary" size="24"> mdi-plus </v-icon>
        </v-avatar>
        New Contact
      </v-chip>
      <v-chip
        @click="showImportFromContactsModal"
        class="primary--text mx-2"
        style="background-color: var(--primary-light)"
      >
        <v-avatar left>
          <v-icon color="primary" size="24"> mdi-download </v-icon>
        </v-avatar>
        import
      </v-chip>
      <v-text-field label="Search" prepend-inner-icon="mdi-magnify" />
      <span class="mx-2">View: </span>
      <v-btn-toggle
        v-model="toggleViewMode"
        mandatory
        rounded
        class="mx-2"
        @change="changeViewMode"
      >
        <v-btn
          value="grid"
          :class="
            toggleViewMode == 'grid'
              ? 'rgradient white--text'
              : 'light primary--text'
          "
          class="text-capitalize"
          small
        >
          Grid
        </v-btn>
        <v-btn
          value="list"
          :class="
            toggleViewMode == 'list'
              ? 'gradient white--text'
              : 'light primary--text'
          "
          class="text-capitalize"
          small
        >
          List
        </v-btn>
      </v-btn-toggle>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="gradient curved white--text text-capitalize"
          >
            <v-icon left> mdi-information-outline </v-icon>Info
          </v-btn>
        </template>
        <span>Learn more about managing your contacts</span>
      </v-tooltip>
    </div>
    <v-container class="my-4" v-if="toggleViewMode == 'grid'">
      <v-row>
        <v-col v-for="(contact, i) in contacts" :key="i" cols="4">
          <ContactCard @click="contactClicked(contact.id)" :contact="contact" />
        </v-col>
      </v-row>
    </v-container>
    <ContactListTable v-else :contacts="contacts" />
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="text-center">
              <!-- @next="nextPage"
              @progress="progress"
              @previous="previous"
              @input="input" -->
            <v-pagination
              v-model="page"
              :length="Math.ceil(totalCount / limit)"
              :total-visible="7"
              circle
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
    <AddNewContactModal ref="addNewContactModal" />
    <ImportContactsFromFileModal ref="importContactsFromFileModal" />
  </div>
</template>

<script>
import API from "@/api/";
import ContactCard from "./blocks/ContactCard.vue";
import AddNewContactModal from "./modals/AddNewContactModal.vue";
import ImportContactsFromFileModal from "./modals/ImportContactsFromFileModal.vue";
import ContactListTable from "./blocks/ContactListTable.vue";

// Import Dummy Data
// import contacts from "@/data/mock_contacts.json";

export default {
  components: {
    ContactCard,
    AddNewContactModal,
    ImportContactsFromFileModal,
    ContactListTable,
  },
  data() {
    return {
      page: 1,
      toggleViewMode: "grid",
      contacts: [],
      totalCount : 0,
      limit: 12,
    };
  },
  watch: {
    page(newValue){
      // console.log({newValue})
      this.getContacts(newValue)
    }
  },
  methods: {
    async getContacts(page = 1, limit = 12){
      try {
        const {data, headers} = await API.Account.Contacts.getContacts(page, limit)
        console.log({data})
        this.contacts = data
        this.totalCount = headers['x-total-count'];
      } catch (error) {
        console.log({error})
      }
    },
    changeViewMode(e) {
      console.log({ e, value: this.toggleViewMode });
    },
    contactClicked(contactId) {
      console.log("contact clicked", contactId);
      this.$router
        .push({
          name: "app.contacts.contact-details",
          params: { id: contactId },
        })
        .catch(() => {});
    },
    showAddNewContactForm() {
      console.log("show add new contact form");
      this.$refs.addNewContactModal.show(true);
    },
    showImportFromContactsModal() {
      console.log("show import from contacts modal");
      this.$refs.importContactsFromFileModal.show(true);
    },
    // nextPage(e){
    //   console.log({e}, 'Next Page')
    // },
    // progress(e){
    //   console.log({e}, 'Progress')
    // },
    // previous(e){
    //   console.log({e}, 'Previous Page');
    // },
    // input(e){
    //   console.log({e}, 'Pagination Input')
    // }
  },
  computed: {
    pageContacts() {
      if (this.contacts.length) {
        const start = (this.page - 1) * this.noPerPage;
        const end = start + this.noPerPage;
        const contactsToShow = this.contacts.filter(
          (contact, i) => i >= start && i < end
        );
        console.log({ contactsToShow });
        return contactsToShow;
      }
      return [];
    },
  },
  async mounted(){
    await this.getContacts(this.page, this.limit)
  }
};
</script>

<style>
</style>