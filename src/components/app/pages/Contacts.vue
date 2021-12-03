<template>
  <div class="contacts-page">
    <transition name="router-anim">
      <router-view />
    </transition>
    <!-- <div class="page-header px-8">
      <p class="display-1 mb-0 grey--text text--darken-2">Contacts</p>
      <v-divider vertical class="ma-4"></v-divider>
      <v-chip
        class="primary--text"
        style="background-color: var(--primary-light)"
      >
        <v-avatar left>
          <v-icon color="primary" size="24">mdi-plus</v-icon>
        </v-avatar>
        New Contact
      </v-chip>
      <v-chip
        class="primary--text mx-2"
        style="background-color: var(--primary-light)"
      >
        <v-avatar left>
          <v-icon color="primary" size="24">mdi-download</v-icon>
        </v-avatar>
        import
      </v-chip>
      <v-text-field
        label="Search"
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
      <span class="mx-2">View: </span>
      <v-btn-toggle
        @change="changeViewMode"
        v-model="toggleViewMode"
        mandatory
        rounded
        class="mx-2"
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
          >Grid</v-btn
        >
        <v-btn
          value="list"
          :class="
            toggleViewMode == 'list'
              ? 'gradient white--text'
              : 'light primary--text'
          "
          class="text-capitalize"
          small
          >List</v-btn
        >
      </v-btn-toggle>
      <v-btn class="gradient curved white--text text-capitalize"
        ><v-icon left>mdi-help-circle-outline</v-icon>Help</v-btn
      >
    </div>
    <v-container class="my-4">
      <v-row>
        <v-col cols="4" v-for="i in 12" :key="i">
          <ContactCard />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="text-center">
            <v-pagination v-model="page" :length="4" circle></v-pagination>
          </div>
        </v-col>
      </v-row>
    </v-container> -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import ContactCard from "../blocks/ContactCard.vue";

export default {
  components: {
    // ContactCard,
  },
  data() {
    return {
      subroutes: [
        { title: "My Contacts", route: "app.contacts.my-contacts" },
        { title: "Lists", route: "app.contacts.lists" },
      ],
    };
  },
  methods: {
    ...mapActions({
      setRoutes: "ui/setSubroutes",
    }),
  },
  beforeRouteEnter(to, from, next) {
    // console.log({ to, from, next });
    // this.setRoutes({ subroutes: [{ title: "test", route: "test" }] });
    next((vm) => {
      vm.$store.dispatch("ui/setSubroutes", {
        subroutes: vm._data.subroutes || [],
      });
      console.log({ data: vm._data });
    });
  },
};
</script>

<style>
</style>