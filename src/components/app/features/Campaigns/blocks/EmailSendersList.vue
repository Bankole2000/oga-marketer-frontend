<template>
  <div class="email-senders-list">
    <EmailSendersListItem v-for="(sender, i) in emailSenders" :sender='sender' :key="i" />
  </div>
</template>

<script>
import EmailSendersListItem from './EmailSendersListItem.vue'
export default {
  components: { EmailSendersListItem },
  props: ['emailSenders'],
  data(){
    return {
      
      page: 1,
    }
  }
}
</script>

<style>

</style>