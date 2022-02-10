<template>
  <div class="billing-card">
    <v-hover v-slot:default="{ hover }">
      <v-card class="rounded-lg px-2 card" :class="hover ? 'elevated':'elevated-light'" style="transition: all 0.3s ease;">
        <div class="d-flex align-center justify-space-between">
          <img height="80px" class="ml-4 mt-4" width="80px" :src="require(`@/assets/imgs/logos/cards/${card.card_type}-logo.svg`)" />
          <v-spacer></v-spacer>
          <!-- {{hover}} -->
          <v-menu
            bottom
            left
            content-class="elevation-0"
            transition="slide-x-transition"
          >
            <!-- style="border-radius: 15px; box-shadow: none !important" -->
            <template v-slot:activator="{ on, attrs }">
              <!-- style="border-radius: 15px; box-shadow: none !important" -->
              <v-btn icon v-bind="attrs" v-on="on" class="mr-4">
                <v-icon size="32">mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <div
              class="pa-2 ma-4 mb-16 elevated-light"
              style="border-radius: 15px; background-color: white"
            >
            <v-btn
                style="border-radius: 15px"
                block
                x-large
                text
                color="accent"
                class="text-capitalize mb-2"
                ><v-icon left>mdi-set-center</v-icon>Select Card</v-btn
              >
              <v-btn
                style="border-radius: 15px"
                block
                text
                x-large
                
                color="primary"
                class="text-capitalize mb-2"
                ><v-icon left>mdi-pencil</v-icon>Edit Card</v-btn
              >
              
              <v-btn
                style="border-radius: 15px"
                block
                text
                large
                color="error"
                class="text-capitalize"
                ><v-icon>mdi-trash-can</v-icon>Delete Card</v-btn
              >
            </div>
          </v-menu>
        </div>
        <div class="px-4 pb-0 pt-4">
          <p class="text-capitalize headline font-weight-bold mb-0">{{card.card_type}}</p>
        </div>
        <div class="d-flex align-center px-4 title">
          <p>{{card.card_number | hideCardNumber}}</p>
          <v-spacer></v-spacer>
          <p>{{card.expiry_date | formatCardExpiryDate }}</p>
        </div>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  props: ['card']
}
</script>

<style>
.card {
  background: linear-gradient(to top right, #FFF3F1, #E0F4F4);
  transition: all 0.3s ease;
}

.card:hover {
  background: linear-gradient(to top right, lightblue, rgba(0, 0, 255, 0.438));
}

</style>