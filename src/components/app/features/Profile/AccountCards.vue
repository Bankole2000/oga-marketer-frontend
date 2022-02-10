<template>
  <div class="account-cards">
      <div class="page-header px-8">
      <p class="display-1 mb-0 grey--text text--darken-2">Payment Methods</p>
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
        <span>Learn more about Payment Methods</span>
      </v-tooltip>
    </div>
    <v-container class="px-6">
      <v-row>
        <v-col cols="12">
          <v-card class="elevated-light rounded-lg pa-4">
            <v-card-title class="headline">
              <div style="flex-grow: 1" class="pr-16">
                <v-icon class="mr-4"> mdi-credit-card-check</v-icon>
                Active Card Information
                <v-divider class="bg-primary-lt mt-1" />
              </div>
              <v-spacer></v-spacer>
              <p
                class="mb-0 primary--text subtitle-2 text-decoration-underline"
              >
                Edit
              </p>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card class="rounded-lg pa-4 elevated-light">
            <v-card-title>
              <div style="flex-grow: 1" class="pr-16 headline">
                <v-icon class="mr-4"> mdi-credit-card-clock</v-icon>
                Registered Cards
                <v-divider class="bg-primary-lt mt-1" />
              </div>
              <v-spacer></v-spacer>
              <p
                class="mb-0 primary--text subtitle-2 text-decoration-underline"
              >
                Edit
              </p>
            </v-card-title>
            <v-card-text>
              <v-row>
        <v-col cols="4" v-for="(card, i) in cards" :key="i">
          <BillingCard :card="card"/>
          <!-- <v-card class="elevated-light rounded-lg pa-4">
            <v-card-title>{{card.card_type}}</v-card-title>
            <v-card-text>
              {{card}}
            </v-card-text>
          </v-card> -->
        </v-col>
      </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      
    </v-container>
  </div>
</template>

<script>
import cards from '@/data/mock_cards.json'
import BillingCard from './blocks/BillingCard.vue'
export default {
  components: {
    BillingCard
  },
  data(){
    return {
      cards
    }
  }
}
</script>

<style>

</style>