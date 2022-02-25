<template>
  <div class="step-one">
    <v-row>
      <v-col cols="12" lg="8" offset-lg="2">
        <v-card class="elevated-light rounded-xl px-4 pb-4">
          <v-card-title class="d-flex flex-column align-start">
            <p class="text-title mb-0">New Target</p>
            <p class="caption mb-0">
              Target Shoppers and visitors as they interact with your site with
              our smart tracker widget
            </p>
          </v-card-title>
          <v-divider />
          <v-window v-model="window">
            <v-window-item :value="1">
              <v-card-text>
                <v-item-group @change="onSelectTargetType" v-model="selectedTargetType">
                <div v-for="(targetType, i) in targetTypes" :key="i">
                  <v-divider
                    v-if="i == targetTypes.length - 1"
                    :key="`${i}-divider`"
                    style="border-color: var(--primary-light)"
                    class="my-4"
                  />
                  <v-item :value="targetType" v-slot:default="{ active, toggle }">
                  <div
                    class="px-4 py-3 rounded-lg mb-4"
                    :class="active ? 'rgradient': 'bg-primary-lt'"
                    style="cursor: pointer; transition: all 0.3s ease;"
                    @click.capture="toggle"
                  >
                    <p
                      class="
                        title text-center
                        font-weight-bold
                        
                        mb-0
                      "
                      :class="active ? 'white--text': 'primary--text'"
                    >
                      {{ targetType.title }}
                    </p>
                    <p :class="active ? 'yellow--text': 'grey--text'" class="text-center text-subtitle mb-0">
                      {{ targetType.text }}
                    </p>
                  </div>
                  </v-item>
                </div>
                </v-item-group>
              </v-card-text>
            </v-window-item>
            <v-window-item :value="2">
              <v-card-text>
                <NewTargetForm />
              </v-card-text>
            </v-window-item>
          </v-window>
          <v-card-actions class="justify-center py-2">
            <v-btn
              large
              class="px-16 mx-4 curved light text-capitalize primary--text"
              @click="onBackSelect"
            >
              {{ window == 1 ? "Cancel" : "Back" }}
            </v-btn>
            <v-btn
              large
              :disabled="!selectedTargetType"
              :class="selectedTargetType ? 'gradient': ''"
              class="px-16 mx-4 curved text-capitalize white--text"
              @click="onNextSelect"
            >
              Next
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NewTargetForm from "../../forms/NewTargetForm.vue";
export default {
  components: { NewTargetForm },
  data() {
    return {
      window: 1,
      targetTypes: [
        {
          title: "Welcome First time visitors with a Message",
          text: "Customize a message to be displayed in a widget to visitors who visit your site for the first time.",
          code: "welcome",
        },
        {
          title:
            "Target visitors who search for a specific product/keyword on your site",
          text: "Customize a message to be displayed in a widget to visitors who visit your site for the first time.",
          code: "search",
        },
        {
          title:
            "Target visitors with discounts after viewing your pricing page",
          text: "Customize a message to be displayed in a widget to visitors who visit your site for the first time.",
          code: "discount",
        },
        {
          title: "Target visitors with freebies after opting in for a service",
          text: "Customize a message to be displayed in a widget to visitors who visit your site for the first time.",
          code: "freebie",
        },
        {
          title: "Create a Custom Target",
          text: "Customize a message to be displayed in a widget to visitors who visit your site for the first time.",
          code: "custom",
        },
      ],
      selectedTargetType: ''
    };
  },
  methods: {
    onSelectTargetType(targetType) {
      console.log({selectedTargetType: this.selectedTargetType})
      if(!targetType){
        return;
      }
      switch (targetType.code) {
        case "welcome":
          console.log({ targetType });
          break;
        case "search":
          console.log({ targetType });
          break;
        case "discount":
          console.log({ targetType });
          break;
        case "freebie":
          console.log({ targetType });
          break;
        case "custom":
          console.log({ targetType });
          break;
        default:
          break;
      }
    },
    onNextSelect() {
      switch (this.window) {
        case 1:
          this.window++;
          break;
        case 2:
          this.$emit("next");
          break;
        default:
          break;
      }
    },
    onBackSelect() {
      switch (this.window) {
        case 1:
          this.$router
            .push({ name: "app.targeting.targeting" })
            .catch(() => {});
          break;
        case 2:
          this.window--;
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style>
</style>