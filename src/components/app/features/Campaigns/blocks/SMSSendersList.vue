<template>
  <div class="sms-senders-list">
    <SMSSendersListItem v-for="(sender, i) in smsSenders" :sender="sender" :key="i" />
    
  </div>
</template>

<script>
import SMSSendersListItem from './SMSSendersListItem.vue'
export default {
  components: { SMSSendersListItem },
  props: ['smsSenders'],
  data(){
    return {
      page: 1,
    }
  }
}
</script>

<style>

</style>