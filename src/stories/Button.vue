<template>
  <div>
    <button
      type="button"
      :class="classes"
      :style="style"
      @click="onClick"
    >
      {{ label }}
    </button>
    <v-btn
      class="info py-16"
      elevation="0"
      block
    >
      Test
    </v-btn>
  </div>
</template>

<script>
import "./button.css";

export default {
  name: "MyButton",

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  computed: {
    classes() {
      return {
        "storybook-button": true,
        "storybook-button--primary": this.primary,
        "storybook-button--secondary": !this.primary,
        [`storybook-button--${this.size}`]: true,
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>
