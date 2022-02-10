<template>
  <div class="edit-segment-form">
    <p class="headline font-weight-bold mt-4">Edit Segment</p>
    <v-row>
      <v-col cols="12">
        <v-text-field label="Segment Name" v-model="updatedSegmentName"></v-text-field>
      
        <v-text-field label="Segment Alias" v-model="updatedSegmentAlias"></v-text-field>
      
        <div class="d-flex pb-4">
          <v-btn @click="cancel" class="light primary--text curved text-capitalize px-6">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="updateSegment" class="gradient white--text curved text-capitalize px-6">Save</v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
      default: 999
    },
    segmentName: {
      type: String, 
      default: "Demo Segment"
    }, 
    segmentAlias: {
      type: String, 
      default: "demo_segment"
    }
  },
  watch:{
    id(newValue, oldValue){
      console.log({oldValue, newValue})
      this.updatedSegmentName = this.segmentName,
      this.updatedSegmentAlias = this.segmentAlias
    }
  },
  data(){
    return {
      updatedSegmentName: "",
      updatedSegmentAlias: ""
    }
  }, 
  methods: {
    updateSegment(){
      this.$emit('updateSegment', {id: this.id, name: this.updatedSegmentName, alias: this.updatedSegmentAlias})
    }, 
    cancel(){
      this.$emit('cancel')
    }
  },
  mounted(){
    this.updatedSegmentName = this.segmentName
    this.updatedSegmentAlias = this.segmentAlias
  }
};
</script>

<style>
</style>