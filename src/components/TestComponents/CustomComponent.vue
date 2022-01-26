<template>
  <div class="custom-component">
    <v-card>
      <v-card-title>{{ title }}</v-card-title>

      <v-text-field
        outlined
        v-model="name"
        label="Test Input"
        placeholder="Some Value"
        @blur="showValue"
      ></v-text-field>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      title: "Test Title",
    };
  },
  methods: {
    showValue() {
      alert(this.name);
    },
  },
  mounted() {
    let q = this.$router.currentRoute.query;
    console.log(q);
    if (q.title) {
      this.title = q.title;
    }
  },
};
</script>

<style>
</style>