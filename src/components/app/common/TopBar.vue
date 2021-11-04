<template>
  <div class="top-bar">
    <v-card
      height="72"
      flat
      style="border-bottom: 1px solid var(--primary-light)"
    >
      <div style="min-height: 70px; display: flex; align-items: center">
        <div
          class="
            page-subitems
            d-flex
            gradient
            align-center
            justify-start
            px-8
            white--text
          "
          style="min-height: 70px; flex-grow: 1"
        >
          <div style="border-bottom: 0px solid white" class="mx-4">
            <p class="mb-0">My Contacts</p>
          </div>
          <div style="border-bottom: 2px solid white" class="mx-4">
            <p class="mb-0">Lists</p>
          </div>
        </div>
        <div class="notifications d-flex">
          <v-btn icon class="mx-2"
            ><v-icon size="24">mdi-magnify</v-icon></v-btn
          >
          <v-btn icon class="mx-1"
            ><v-icon size="24">mdi-information</v-icon></v-btn
          >
          <v-btn icon class="mx-2"><v-icon size="24">mdi-bell</v-icon></v-btn>
        </div>

        <v-divider vertical class="ma-3"></v-divider>

        <div class="profile d-flex align-center">
          <v-btn text tile class="text-capitalize mx-4"
            >Timothy Adams<v-icon right>mdi-chevron-down</v-icon></v-btn
          >
          <AvatarImage class="mr-8" />
        </div>
      </div>
      <v-progress-linear
        :active="true"
        :indeterminate="true"
        absolute
        bottom
        color="primary accent-4"
      ></v-progress-linear>
    </v-card>
  </div>
</template>

<script>
import AvatarImage from "../blocks/AvatarImage.vue";
export default {
  components: {
    AvatarImage,
  },
};
</script>

<style scoped>
.v-application .v-toolbar__content,
.v-application .v-toolbar {
  padding: 0px !important;
}
</style>