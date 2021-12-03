<template>
  <div class="my-contacts">
    <div class="page-header px-8">
      <p class="display-1 mb-0 grey--text text--darken-2">
        Contacts
      </p>
      <v-divider
        vertical
        class="ma-4"
      />
      <v-chip
        class="primary--text"
        style="background-color: var(--primary-light)"
      >
        <v-avatar left>
          <v-icon
            color="primary"
            size="24"
          >
            mdi-plus
          </v-icon>
        </v-avatar>
        New Contact
      </v-chip>
      <v-chip
        class="primary--text mx-2"
        style="background-color: var(--primary-light)"
      >
        <v-avatar left>
          <v-icon
            color="primary"
            size="24"
          >
            mdi-download
          </v-icon>
        </v-avatar>
        import
      </v-chip>
      <v-text-field
        label="Search"
        prepend-inner-icon="mdi-magnify"
      />
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
      <v-btn
        class="gradient curved white--text text-capitalize"
      >
        <v-icon left>
          mdi-help-circle-outline
        </v-icon>Help
      </v-btn>
    </div>
    <v-container class="my-4">
      <v-row>
        <v-col
          v-for="i in 12"
          :key="i"
          cols="4"
        >
          <ContactCard />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="text-center">
            <v-pagination
              v-model="page"
              :length="4"
              circle
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ContactCard from "./blocks/ContactCard.vue";

export default {
  components: {
    ContactCard,
  },
  data() {
    return {
      page: 1,
      toggleViewMode: "list",
    };
  },
  methods: {
    changeViewMode(e) {
      console.log({ e, value: this.toggleViewMode });
    },
  },
};
</script>

<style>
</style>