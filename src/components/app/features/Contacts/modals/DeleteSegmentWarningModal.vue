<template>
  <div class="delete-segment-warning-modal">
    <v-dialog v-model="dialog" width="500">
      <v-card class="rounded-lg">
        <v-card-title class="headline primary white--text">
          <span> Confirm Delete Segment?</span>
          <v-spacer></v-spacer>
          <v-btn icon color="white" @click="show(false)"><v-icon>mdi-window-close</v-icon></v-btn>
        </v-card-title>

        <v-card-text class="pa-4 title">
          Are you sure you want to delete this Segment? <br />
          <strong>{{segment.name}}</strong>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="justify-center py-4">
          
          <v-btn color="light primary--text curved px-6 text-capitalize mx-2" @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn class="gradient white--text curved px-6 text-capitalize mx-2" @click="confirmDelete">
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    segment: {
      type: Object, 
      default: () => ({
        id: 999,
        name: "Segment Name",
        alias: "segment_name",
        labels: [
          'label 1',
          'label 2',
        ]
      })
    }
  },
  data(){
    return {
      dialog: false,
    }
  }, 
  methods: {
    show(value){
      this.dialog = value
    }, 
    confirmDelete(){
      this.$emit('confirmDelete', this.segment)
    }
  }
}
</script>

<style>

</style>