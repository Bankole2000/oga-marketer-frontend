<template>
  <div class="email-senders">
    <div class="page-header px-8">
      <p class="display-1 mb-0 grey--text text--darken-2">Email & SMS Senders</p>
      <v-divider vertical class="ma-4" />
      <v-spacer></v-spacer>
      <v-text-field label="Search" prepend-inner-icon="mdi-magnify" />
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="gradient curved white--text text-capitalize"
          >
            <v-icon left> mdi-information-outline </v-icon>Info
          </v-btn>
        </template>
        <span>Learn more about Email & SMS Senders</span>
      </v-tooltip>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card elevation="0" class="pa-4 elevated-light rounded-lg mb-8">
            <v-card-title class="d-flex pt-0">
              <div style="flex-grow: 1" class="pr-16">
                <v-icon class="mr-4"> mdi-send </v-icon>
                Email Senders
                <v-divider class="bg-primary-lt mt-1" />
              </div>

              <v-chip
                class="primary--text"
                @click="$router.push({ name: 'app.targeting.targeting.new'})"
                style="background-color: var(--primary-light)"
              >
                <v-avatar left>
                  <v-icon color="primary" size="24">
                    mdi-plus
                  </v-icon>
                </v-avatar>
                New Email Sender
              </v-chip>
            </v-card-title>
            <EmailSendersTable />
          </v-card>
          <v-card elevation="0" class="pa-4 elevated-light rounded-lg mb-8">
            <v-card-title class="d-flex pt-0">
              <div style="flex-grow: 1" class="pr-16">
                <v-icon class="mr-4"> mdi-message-processing </v-icon>
                SMS Senders
                <v-divider class="bg-primary-lt mt-1" />
              </div>

              <v-chip
                class="primary--text"
                @click="$router.push({ name: 'app.targeting.targeting.new'})"
                style="background-color: var(--primary-light)"
              >
                <v-avatar left>
                  <v-icon color="primary" size="24">
                    mdi-plus
                  </v-icon>
                </v-avatar>
                New SMS Sender
              </v-chip>
            </v-card-title>
            <SMSSendersTable />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import EmailSendersList from './blocks/EmailSendersList.vue'
import EmailSendersTable from './blocks/EmailSendersTable.vue'
// import SMSSendersList from './blocks/SMSSendersList.vue'
import SMSSendersTable from './blocks/SMSSendersTable.vue'
export default {
  components: { EmailSendersTable, SMSSendersTable },

}
</script>

<style>

</style>