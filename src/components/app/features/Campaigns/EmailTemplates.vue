<template>
  <div class="email-templates">
    <div class="page-header px-8">
      <p class="display-1 mb-0 grey--text text--darken-2">Email Templates</p>
      <v-divider vertical class="ma-4" />
      <v-chip
        @click="$router.push({ name: 'app.campaigns.email-templates.new' })"
        class="primary--text"
        style="background-color: var(--primary-light)"
      >
        <v-avatar left>
          <v-icon color="primary" size="24"> mdi-plus </v-icon>
        </v-avatar>
        New Email Template
      </v-chip>
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
        <span>Learn more about Email Templates</span>
      </v-tooltip>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card class="rounded-lg elevated-light mb-4 px-4 pb-4" elevation="0">
            <v-card-title class="d-flex pb-0">
              <div style="flex-grow: 1" class="pr-16">
                <div class="d-flex">
                  <v-icon class="mr-2"> mdi-tag-outline </v-icon>
                  <p class="mb-0">Your Templates</p>
                </div>
                <v-divider class="bg-primary-lt mt-1" />
              </div>
              <v-spacer></v-spacer>
              <!-- <v-chip
                class="primary--text"
                @click="showNewSegmentForm"
                style="background-color: var(--primary-light)"
              >
                <v-avatar left>
                  <v-icon color="primary" size="24"> mdi-plus </v-icon>
                </v-avatar>
                New Segment
              </v-chip> -->
            </v-card-title>
            <v-progress-linear
              indeterminate
              :active="loadingTemplates"
            ></v-progress-linear>
            <v-container>
              <v-row>
                <!-- <v-col cols="2" class="pb-0">
                  <v-card class="elevation-0 grey lighten-3" @click="() => {}">
                    <v-responsive :aspect-ratio="5 / 6"></v-responsive>
                  </v-card>
                  <p class="caption text-center">Add a Template</p>
                </v-col> -->
                <EmailTemplatesList v-for="(template, i) in templates" :template="template" :isSample="template.is_sample" :key="i" />
              </v-row>
            </v-container>
          </v-card>
          <v-card class="rounded-lg elevated-light px-4 pb-4" elevation="0">
            <v-card-title class="d-flex pb-0">
              <div style="flex-grow: 1" class="pr-16">
                <div class="d-flex">
                  <v-icon class="mr-2"> mdi-tag-outline </v-icon>
                  <p class="mb-0">Stock Templates</p>
                </div>
                <v-divider class="bg-primary-lt mt-1" />
              </div>
              <v-spacer></v-spacer>
              <!-- <v-chip
                class="primary--text"
                @click="showNewSegmentForm"
                style="background-color: var(--primary-light)"
              >
                <v-avatar left>
                  <v-icon color="primary" size="24"> mdi-plus </v-icon>
                </v-avatar>
                New Segment
              </v-chip> -->
            </v-card-title>
            <v-progress-linear
              indeterminate
              :active="loadingSamples"
            ></v-progress-linear>
            <v-container>
              <v-row>
                <EmailTemplatesList v-for="(template, i) in samples" :template="template" :isSample="template.is_sample" :key="i" />
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import API from "@/api/";
import EmailTemplatesList from "./blocks/EmailTemplatesList.vue";
export default {
  components: { EmailTemplatesList },
  data() {
    return {
      templates: [],
      samples: [],
      loadingTemplates: false,
      loadingSamples: false,
    };
  },
  methods: {
    async getEmailTemplates() {
      this.loadingTemplates = true;
      try {
        const { data } = await API.Campaigns.EmailTemplates.getEmailTemplates();
        console.log({ data });
        this.templates = data;
        this.loadingTemplates = false;
      } catch (error) {
        console.log(
          "🚀 ~ file: EmailTemplates.vue ~ line 111 ~ getEmailTemplates ~ error",
          error
        );
        this.loadingTemplates = false;
      }
    },
    async getEmailTemplateSamples() {
      this.loadingSamples = true;
      try {
        const { data } =
          await API.Campaigns.EmailTemplates.getEmailTemplateSamples();
        console.log({ data });
        this.samples = data;
        this.loadingSamples = false;
      } catch (error) {
        console.log(
          "🚀 ~ file: EmailTemplates.vue ~ line 120 ~ getEmailTemplateSamples ~ error",
          error
        );
        this.loadingSamples = false;
      }
    },
  },
  async mounted() {
    await this.getEmailTemplates();
    await this.getEmailTemplateSamples();
  },
};
</script>

<style>
</style>