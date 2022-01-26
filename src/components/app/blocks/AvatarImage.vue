<template>
  <div class="avatar-image">
    <v-avatar
      :size="size"
      :class="addClasses"
      class="elevated-light"
      :color="!imgSrc ? 'secondary' : ''"
      :style="addStyles"
    >
      <img v-if="imgSrc" :src="imgSrc" alt="John" />
      <span
        v-else-if="firstname || lastname"
        :style="{ fontSize: `${Math.floor(size / 2)}px` }"
        class="white--text"
        >{{ firstname ? firstname[0].toUpperCase() : ""
        }}{{ lastname ? lastname[0].toUpperCase() : "" }}</span
      >
      <img
        v-else
        :src="
          require(`@/assets/imgs/${
            randomAvatar[Math.floor(Math.random() * (randomAvatar.length - 1))]
          }`)
        "
        alt="John"
      />
    </v-avatar>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 50,
    },
    imgSrc: {
      type: String,
      default: null,
    },
    firstname: {
      type: String,
      default: null,
    },
    lastname: {
      type: String,
      default: null,
    },
    addClasses: {
      type: String,
      default: "",
    },
    addStyles: {
      type: Object,
      default: () => ({}),
    },
    localSrc: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      randomAvatar: [
        "avatarfemale.png",
        "avatarfemale2.png",
        "avatarmale1.png",
        "avatarmale2.png",
        "avatarmale3.png",
      ],
    };
  },
};
</script>

<style>
</style>