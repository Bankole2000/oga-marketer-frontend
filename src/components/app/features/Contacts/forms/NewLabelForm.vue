<template>
  <div class="new-label-form">
    <p class="headline font-weight-bold mt-4">Add a new Label</p>
    <v-row>
      <v-col cols="12">
        <v-select :items="segments" item-text="name" item-value="id" label="Segment Name" v-model="selectedSegment"></v-select>
      
        <v-text-field label="Label Name" v-model="newLabelName"></v-text-field>
      
        <div class="d-flex pb-4">
          <v-btn @click="addLabelToSegment" class="gradient white--text curved text-capitalize px-6">Add</v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    segments: {
      type: Array, 
      default: () => ([])
    }, 
    segmentId: {
      type: [String, Number],
      default: 999
    }
  },
  data(){
    return {
      newLabelName: "", 
      selectedSegment: -1,
    }
  },
  watch: {
    segmentId(newValue, oldValue){
      console.log({newValue, oldValue});
      this.selectedSegment = newValue
      this.newLabelName = ""
    }
  }, 
  methods: {
    addLabelToSegment(){
      this.segments.forEach(segment => {
        if(segment.id == this.segmentId){
          segment.labels.push(this.newLabelName)
        }
      })
    }
  }, 
  mounted(){
    this.selectedSegment = this.segmentId,
    this.newLabelName = ""
  }
};
</script>

<style>
</style>