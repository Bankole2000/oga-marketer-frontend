<template>
<v-hover v-slot:default="{ hover }" >
  <div>
    
    <v-layout
      row
      :wrap="false"
      align-center
      class="my-0 py-1"
      :class="hover ? 'elevated-light grey lighten-3': ''"
    >
      <v-flex
        xs1
        class="d-flex justify-center"
      >
        <v-checkbox
          hide-details
          class="mb-2 mt-0"
        />
      </v-flex>
      <v-flex
        xs3
        class="d-flex"
      >
        <p class="mb-0">
          {{event.name}}
        </p>
      </v-flex>
      <v-flex md3>
        <p class="mb-0">
          {{event.alias}}
        </p>
      </v-flex>
      <v-flex
        md2
        class="d-flex"
      >
        <p class="mb-0">
          {{event.type.name}}
        </p>
      </v-flex>
      <!-- <v-flex md1>
        <p class="mb-0">
          0
        </p>
      </v-flex> -->
      <v-flex
        md3
        class="d-flex"
      >
        <EditTrackingEventModal />
        <DeleteTrackingEventModal />
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
  </div>
</v-hover>
</template>

<script>
import DeleteTrackingEventModal from '../../modals/DeleteTrackingEventModal.vue';
import EditTrackingEventModal from '../../modals/EditTrackingEventModal.vue';
export default {
  components: { EditTrackingEventModal, DeleteTrackingEventModal },
  props: ['event']
};
</script>

<style>
</style>