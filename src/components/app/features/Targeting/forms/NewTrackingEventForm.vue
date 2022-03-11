<template>
  <div class="new-tracking-event-form">
    <v-text-field cols="12" @input="setAlias" placeholder="Event name" hint="Your event name" label="Name" v-model="eventData.name"></v-text-field>
    <v-text-field cols="12" label="Alias" placeholder="Alias" hint="Unique name used for triggering the event - Generated automatically" readonly v-model="eventData.alias"></v-text-field>
    <v-row>
      <v-col cols="6">
        <v-select hide-details label="Type" return-object clearable :items="types" v-model="eventData.type"></v-select>
      </v-col>
      <v-col cols="6">
        <v-text-field hide-details label="Score" v-model="eventData.score"></v-text-field>
      </v-col>
     
      <v-col cols="12">
        <v-expand-transition>
        <div v-show="selectorTypes.length || (eventData.type && eventData.type.value == 'input')">
          <v-row>
            <v-col cols="6">
              <v-select label="Selector" :items="selectorTypes"></v-select>
            </v-col>
            <v-col cols="6">
              <v-text-field></v-text-field>
            </v-col>
          </v-row>
        </div>
      </v-expand-transition>
      <v-expand-transition>
        <div v-show="inspectTypes.length || (eventData.type && eventData.type.value == 'input')">
          <v-row>
            <v-col cols="6">
              <v-select label="Inspect" :items="inspectTypes"></v-select>
            </v-col>
            <v-col cols="6">
              <v-text-field></v-text-field>
            </v-col>
          </v-row>
        </div>
      </v-expand-transition>
      </v-col>
      <v-col cols="12">
        <v-text-field hide-details label="Page" placeholder="Blank if any page" v-model="eventData.page"></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import API from "@/api/";

export default {
  // props: ['loading'],
  data(){
    return {
      loading: false,
      metadata: {},
      apiSelectorTypes: [],
      apiInspectTypes: [],
      eventData: {
        name: '',
        alias: '',
        type: '',
        page: '',
        score: 0
      }
    }
  },
  computed: {
    types(){
      let types = [];
      if(Object.keys(this.metadata).length){
        for (const key in this.metadata.types) {
          types.push({...this.metadata.types[key], value: this.metadata.types[key]['id'], text: this.metadata.types[key]['name']})
        }
      }
      return types
    },
    selectorTypes(){
      let selectorTypes = [];
      console.log({type: this.eventData.type})
      let value = this.eventData.type? this.eventData.type.value : '';
      if(this.metadata.selector_types){
        if(['timespent', 'pageview'].includes(value) || !value){
          return selectorTypes;
        }
        this.metadata.selector_types.forEach(type => {
          if(type.id == 'css'){
            selectorTypes.push({value: type.id, text: type.name, ...type});
          }
          if(type.support_types){   
            if(type.support_types.includes(this.eventData.type.value) ){
              selectorTypes.push({value: type.id, text: type.name, ...type});
            }
          }
        });
      }
      return selectorTypes;
    },
    inspectTypes(){
      let inspectTypes = []
      let value = this.eventData.type? this.eventData.type.value : '';
      if(this.metadata.inspect_types){
        this.metadata.inspect_types.forEach(type => {
          if(type.support_types){
             if(type.support_types.includes(value)){
              inspectTypes.push({value: type.id, text: type.name, ...type});
            }
          }
        })
      }
      return inspectTypes
    }
  },
  methods: {
    async getEventsMetadata(){
      try {
        const { metadata } = await API.Trackers.EventsMetadata.getEventsMetadata();
        console.log({metadata});
        this.metadata = metadata;

      } catch (error) {
        console.log("🚀 ~ file: NewTrackingEventForm.vue ~ line 34 ~ getEventTypes ~ error", error)
      }
    },
    setAlias(e){
      console.log({e})
      this.eventData.alias = e.split(' ').filter(x => x!= '').join('-');
    }
  },
  async mounted(){
    await this.getEventsMetadata()
  }
};
</script>

<style>
</style>