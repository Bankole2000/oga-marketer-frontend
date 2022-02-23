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

          <!-- $router.push({ name: 'app.contacts.my-contacts' }).catch(() => {}) -->
      <v-btn
        @click="$router.go(-1)"
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
              <span class="font-weight-bold">{{activeListCategory.name}}</span>
              <v-spacer></v-spacer>
              <v-menu bottom left content-class="elevated-light rounded-lg" max-width="400">
                <template v-slot:activator="{on, attrs}">

                
              <v-btn v-on="on" v-bind="attrs" icon text><v-icon>mdi-chevron-down</v-icon></v-btn>
                </template>
                <v-list two-line dense>
                  <v-list-item-group v-model="selectedListCategory">

                  
                  <v-list-item >
                    <v-list-item-content>

                    <v-list-item-title class="subtitle-1 font-weight-bold">All Lists</v-list-item-title>
                    <v-list-item-subtitle>All contact list categories</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-icon>
                      <v-chip color="black" class="white--text" label>{{totalListCount}}</v-chip>
                    </v-list-item-icon>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item v-for="(item, i) in listCategories" :key="i">
                    <v-list-item-content>
                    <v-list-item-title class="subtitle-1 font-weight-bold">{{item.name}}</v-list-item-title>
                    <v-list-item-subtitle>{{item.description}}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-icon>
                      <v-chip :color="item.color" label>{{item.lists.length}}</v-chip>
                    </v-list-item-icon>
                  </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="pt-0">
              <v-list>
                <v-list-item-group v-model="selectedContactList">
                  <template v-for="(item, i) in lists">
                    <v-list-item :key="i">
                      <v-list-item-content>
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-chip small :color="item.color" class="white--text">{{
                          item.category.name
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
          <v-card elevation="0" height="100%" class="elevated-light rounded-lg px-4">
            <div v-if="lists[selectedContactList]">

            <v-card-title class="d-flex align-center pb-2" v-if="lists[selectedContactList]">
              <p class="mb-0 font-weight-bold">{{lists[selectedContactList].name}} <span class="font-weight-light subtitle-1 grey--text">({{selectedListContacts.length}} Contacts)</span></p>
              <v-spacer></v-spacer>
              <v-menu
              min-width="220"
              rounded="lg"
              content-class="elevated-light"
              bottom
              left
            >
              <template v-slot:activator="{ on, attrs }">
                
              <v-btn v-on="on" v-bind="attrs" class="gradient curved px-6 white--text text-capitalize">Manage List
                <v-icon right>mdi-menu-down</v-icon>
              </v-btn>
              </template>
              <div class="pa-2" style="background-color: white;">
                <v-btn block text large class="rounded-lg text-capitalize mb-2" color="primary"><v-icon left>mdi-plus-thick</v-icon> Add To List</v-btn>        
                <v-btn block text large class="rounded-lg text-capitalize mb-2" color="secondary"><v-icon left>mdi-pencil</v-icon> Rename List</v-btn>
                <v-btn block text large class="rounded-lg text-capitalize mb-2" color="accent"><v-icon left>mdi-download</v-icon> Download List</v-btn>
                <v-btn block text large class="rounded-lg text-capitalize mb-2" color="error"><v-icon left>mdi-delete</v-icon> Delete List</v-btn>
              </div>
              </v-menu>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text style="max-height: 60vh; overflow-y: scroll;">
                <!-- height: 100%; -->
               <div
              style="
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              "
            >
              <!-- <p>Select a list to view contacts</p> -->
              <!-- <p>{{ lists[selectedContactList] }}</p> -->
              <!-- <p>{{ selectedListContacts }}</p> -->
              <v-container>
                <v-row>
                  <v-col cols="6" v-for="(contact, i) in selectedListContacts" :key="i">
                    <v-card @click="$router.push({ name: 'app.contacts.contact-details', params: { id: contact.id }})" class="elevated-light rounded-xs" style="position: relative" height="100">
                      <div class="d-flex align-center" style="width: 100%;">
                         <v-avatar class="ma-0 ml-4" color="secondary" size="50">
                            <v-img :src="contact.profile_image" contain></v-img>
                          </v-avatar>
                        <div>
                          <v-card-title class="title text-truncate pt-2">
                            {{contact.first_name}} {{contact.last_name}}
                          </v-card-title>
                          <v-card-subtitle class="pb-2">
                            {{contact.email}}, <br />{{contact.phone}}
                          </v-card-subtitle>
                        </div>
                        
                         
                        
                      </div>
                      <!-- {{contact}} -->
                      <div class="d-flex align-center" style="position: absolute; bottom: -10px; right: 10px;">
                        <EditContactModal :contact="contact" />
                        <DeleteContactModal :contact="contact" />
                        <!-- <v-btn icon class="accent mx-2" small><v-icon small color="white">mdi-pencil</v-icon></v-btn> -->
                        <!-- <v-btn icon class="error" small><v-icon small color="white">mdi-trash-can</v-icon></v-btn> -->
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </div>
            </v-card-text>
           <v-divider class="mb-8"></v-divider>
            </div>
            <div v-else class="d-flex flex-column align-center justify-center" style="height: 80%;">
              <v-icon size="100">mdi-account-group</v-icon>
              <p class="font-weight-bold grey--text headline">Select Contact List</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <NewContactListModal ref="newListModal" />
  </div>
</template>

<script>
import API from "@/api/"
import NewContactListModal from "./modals/NewContactListModal.vue";
import EditContactModal from './modals/EditContactModal.vue';
import DeleteContactModal from './modals/DeleteContactModal.vue';
export default {
  components: { NewContactListModal, EditContactModal, DeleteContactModal },
  data() {
    return {
      selectedContactList: null,
      selectedListCategory: 0,
      colors: [
        'primary',
        'secondary',
        'accent',
        'info',
        'warning',
        'success'
      ],
      lists: [],
      listCategories: [],
      selectedListContacts : [],
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
  computed: {
    totalListCount(){
      if(!this.listCategories.length){
        return 0
      }
      const allLists = this.listCategories.flatMap((category) => category.lists)
      return allLists.length
    }, 
    activeListCategory(){
      if(this.selectedListCategory > 0){
        return this.listCategories[this.selectedListCategory - 1]
      }
      return {
        id: 0, 
        name: "All Lists"
      }
    }
  },
  watch: {
    async selectedContactList(newValue, oldValue){
      console.log({selectedContactList: this.lists[newValue], newValue, oldValue})
      const contactList = this.lists[newValue]
      if(contactList){
        await this.getListContacts(contactList.id)
      } else {
        this.selectedListContacts = []
      }
    },
    async selectedListCategory(newValue, oldValue){
        this.selectedContactList = null;
      if(newValue - 1 < 0){
        await this.getAllLists()
      } else {
        const selectedCategory = this.listCategories[newValue - 1];
        console.log({selectedCategory});
        await this.getCategoryLists(selectedCategory.id)
      }
      console.log({newValue, oldValue, activeListCategory: this.listCategories[newValue - 1]})
    }
  },
  methods: {
    showNewListModal() {
      this.$refs.newListModal.show(true);
    },
    async getListCategories(){
      const resData = await API.Account.ListCategories.getListCategories(`?_embed=lists`);
      const { data } = resData; 
      this.listCategories = data.map((category, i) => {
        category.color = this.colors[i % this.colors.length]
        return category
        })
        console.log({listCategories: this.listCategories})
    },
    async getAllLists(){
      const resData = await API.Account.Lists.getLists(`?_expand=category`);
      const { data } = resData
      this.lists = data.map(item => {
        item.color = this.colors[item.categoryId - 1];
        return item
      });
        console.log({lists: this.lists})
    },
    async getCategoryLists(categoryId){
      const resData = await API.Account.ListCategories.getCategoryLists(categoryId)
      console.log({resData});
      const {data: {lists}} = resData;
      this.lists = lists.map(item => {
        item.color = this.colors[item.categoryId - 1];
        item.category = this.activeListCategory;
        return item
      })
    },
    async getListContacts(listId){
      const resData = await API.Account.Lists.getListContacts(listId, `?_embed=contacts`);
      console.log({resData})
      const { data } = resData;
      console.log({data});
      this.selectedListContacts = data.contacts;
    }

  },
  
  async mounted(){
    await this.getListCategories();
    await this.getAllLists()
    console.log({listCount: this.totalListCount})
  }
};
</script>

<style>
</style>