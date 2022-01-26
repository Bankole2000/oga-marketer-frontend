<template>
  <div class="new-target-form">
    <v-text-field
      v-model="target.name"
      style="font-size: 1.3rem"
      label="Target Name"
    />
    <v-select
      v-model="target.category"
      style="font-size: 1.3rem"
      class="py-2"
      label="Category"
      :items="targetCategories"
    />
    <p class="subtitle">Select Associated Goal*</p>
    <div class="mb-4">
      <TargetGoalItem
        v-for="(goal, i) in targetAssociatedGoals"
        :key="i"
        :text="goal.text"
        :value="goal.value"
        :is-selected="target.associatedGoals.includes(goal.value)"
        class="mb-2"
        @remove="changeGoals($event, 'remove')"
        @add="changeGoals($event, 'add')"
      />
    </div>
    <div class="d-flex align-center">
      <v-spacer />
      <v-hover v-slot:default="{ hover }">
        <p
          style="cursor: pointer"
          class="mb-0 primary--text"
          @click="onCreateNewTrackingGoal"
        >
          <v-icon color="primary"> mdi-plus </v-icon>
          <span
            style="font-size: 1rem"
            :class="{ 'text-decoration-underline': hover }"
          >
            Create New Tracking Goal
          </span>
        </p>
      </v-hover>
    </div>

    <NewTrackingGoalModal ref="newTrackingGoalModal" />
  </div>
</template>

<script>
import NewTrackingGoalModal from "../modals/NewTrackingGoalModal.vue";
import TargetGoalItem from "./TargetGoalItem.vue";
export default {
  components: { TargetGoalItem, NewTrackingGoalModal },
  data() {
    return {
      target: {
        name: "ABC Retail Anniversary Sales",
        category: "Sales",
        associatedGoals: [],
      },
      targetCategories: ["Sales", "Promo", "Discount"],
      targetAssociatedGoals: [
        {
          text: "Birthday",
          value: "birthday",
        },
        {
          text: "Sample Goal",
          value: "sample",
        },
        {
          text: "Anniversary Sales",
          value: "annSales",
        },
      ],
    };
  },
  methods: {
    onCreateNewTrackingGoal() {
      console.log("Create New Tracking Goal");
      const modal = this.$refs.newTrackingGoalModal;
      modal.show(true);
    },
    changeGoals(e, action) {
      switch (action) {
        case "remove":
          this.target.associatedGoals.splice(
            this.target.associatedGoals.indexOf(e),
            1
          );
          break;
        case "add":
          this.target.associatedGoals.push(e);
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