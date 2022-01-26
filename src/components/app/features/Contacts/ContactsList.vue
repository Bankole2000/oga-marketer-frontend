<template>
  <div class="contact-list">
    <div class="page-header px-8">
      <p class="display-1 mb-0 grey--text text--darken-2">Lists</p>
      <v-divider vertical class="ma-4" />
      <v-chip
        class="primary--text"
        style="background-color: var(--primary-light)"
        @click="showNewListModal"
      >
        <v-avatar left>
          <v-icon color="primary" size="24"> mdi-plus </v-icon>
        </v-avatar>
        New List
      </v-chip>
      <v-spacer></v-spacer>
      <v-text-field label="Search" prepend-inner-icon="mdi-magnify" />
      <v-btn text color="primary" class="text-capitalize">Duplicate</v-btn>
      <v-btn text color="primary" class="text-capitalize">Export</v-btn>
      <v-btn text color="error" class="text-capitalize">Delete</v-btn>

      <v-btn
        @click="
          $router.push({ name: 'app.contacts.my-contacts' }).catch(() => {})
        "
        outlined
        color="error"
        class="text-capitalize"
      >
        <v-icon left>mdi-chevron-left</v-icon>
        Back</v-btn
      >
    </div>
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-card class="elevated-light rounded-lg">
            <v-card-title class="py-3 px-6">
              <span class="font-weight-bold">All lists</span>
              <v-spacer></v-spacer>
              <v-btn icon text><v-icon>mdi-chevron-down</v-icon></v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="pt-0">
              <v-list>
                <v-list-item-group v-model="selectedContactList">
                  <template v-for="(item, i) in contactListListItems">
                    <v-list-item :key="i">
                      <v-list-item-content>
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-chip small :color="item.color" class="white--text">{{
                          item.listType
                        }}</v-chip>
                      </v-list-item-action>
                    </v-list-item>
                    <v-divider :key="`divider-${i}`"></v-divider>
                  </template>
                </v-list-item-group>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="8">
          <v-card elevation="0" height="100%">
            <div
              style="
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              "
            >
              <p>Select a list to view contacts</p>
              <p>{{ contactListListItems[selectedContactList] }}</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <NewContactListModal ref="newListModal" />
  </div>
</template>

<script>
import NewContactListModal from "./modals/NewContactListModal.vue";
export default {
  data() {
    return {
      selectedContactList: null,
      contactListListItems: [
        { name: "Pharmacy CRM", listType: "System list", color: "accent" },
        { name: "Staff of Samsung", listType: "Custom list", color: "primary" },
        { name: "Budget 2018", listType: "System list", color: "accent" },
        {
          name: "Marketing Automation",
          listType: "System list",
          color: "accent",
        },
        { name: "Post UME", listType: "System list", color: "accent" },
        { name: "Consultants", listType: "Custom list", color: "accent" },
        { name: "Students", listType: "Custom list", color: "primary" },
        { name: "Customer CRM", listType: "System list", color: "accent" },
        { name: "Travel Clicks", listType: "System list", color: "accent" },
        { name: "Most Active", listType: "Custom list", color: "primary" },
        { name: "Seller Point", listType: "Custom list", color: "primary" },
      ],
    };
  },
  methods: {
    showNewListModal() {
      this.$refs.newListModal.show(true);
    },
  },
  components: { NewContactListModal },
};
</script>

<style>
</style>