<template>
  <div class="target-goal-item">
    <div
      :class="{ 'bg-primary-lt': isSelected }"
      class="d-flex pt-2 pb-1 mb-1 rounded-lg px-4"
      style="transition: all 0.3s ease"
    >
      <p class="mb-0 primary--text title">
        {{ text }}
      </p>
      <v-spacer />
      <div>
        <v-scroll-x-transition leave-absolute>
          <v-btn
            v-if="!isSelected"
            icon
            color="primary"
            @click="$emit('add', value)"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-scroll-x-transition>
        <v-scroll-x-transition leave-absolute>
          <v-btn
            v-if="isSelected"
            icon
            color="error"
            @click="$emit('remove', value)"
          >
            <v-icon>mdi-minus</v-icon>
          </v-btn>
        </v-scroll-x-transition>
      </div>
      <v-icon />
    </div>
    <v-divider />
  </div>
</template>

<script>
export default {
  props: {
    isSelected: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "Sample Goal",
    },
    value: {
      type: String,
      default: null,
    },
  },
};
</script>

<style>
</style>