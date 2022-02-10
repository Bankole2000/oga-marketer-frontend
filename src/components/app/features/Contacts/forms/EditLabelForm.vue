<template>
  <div class="edit-label-form">
    <p class="headline font-weight-bold mt-4">Edit Label</p>
    <v-row>
      <v-col cols="12">
        <v-select :items="segments" item-value="id" item-text="name" label="Segment" v-model="updatedSegment"></v-select>
      
        <v-text-field label="Label Name" v-model="updatedLabelName"></v-text-field>
      
        <div class="d-flex pb-4">
          <v-btn @click="$emit('cancel')" class="light primary--text curved text-capitalize px-6">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="updateLabel" class="gradient white--text curved text-capitalize px-6">Save</v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    segmentId: {
      type: [String, Number],
      default: 999
    },
    segments: {
      type: Array, 
      default: () => ([])
    },
    labelName: {
      type: String,
      default: 'Label Name',
    }, 
    selectedLabelIndex: {
      type: [String, Number],
      default: 999
    }
  },
  watch: {
    labelName(newValue, oldValue){
      console.log({newValue, oldValue})
      this.updatedLabelName = newValue
      this.updatedSegment = this.segmentId
    }
  },
  data(){
    return {
      updatedLabelName: "",
      updatedSegment: ""
    }
  }, 
  methods: {
    updateLabel(){
      console.log({newLabelName: this.updatedLabelName, newSegment: this.updatedSegment})
    }
  },
  mounted(){
    this.updatedLabelName = this.labelName
    this.updatedSegment = this.segmentId
  }
};
</script>

<style>
</style>