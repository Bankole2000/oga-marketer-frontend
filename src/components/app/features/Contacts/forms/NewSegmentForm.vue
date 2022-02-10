<template>
  <div class="new-segment-form">
    <p class="headline font-weight-bold mt-4">Add a new Segment</p>
    <v-row>
      <v-col cols="12">
        <v-text-field label="Segment Name" v-model="segmentName"></v-text-field>
      
        <v-text-field label="Segment Alias" v-model="segmentAlias"></v-text-field>
      
        <div class="d-flex pb-4">
          <v-btn :disabled="!isValid" @click="addSegment" class="curved text-capitalize px-6" :class="{'gradient white--text': isValid}">Add</v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      segmentName: "",
      segmentAlias: ""
    }
  }, 
  computed: {
    isValid(){
      return this.segmentName && this.segmentAlias
    }
  },
  methods: {
    addSegment (){
      const newSegment = {
        name: this.segmentName,
        alias: this.segmentAlias
      }
      this.$emit('addSegment',{newSegment})
      this.segmentName = '';
      this.segmentAlias = ''
    }
  }
};
</script>

<style>
</style>