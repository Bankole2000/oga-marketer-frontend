<template>
  <div class="email-setup-step">
    <v-window v-model="step">
      <v-window-item :value="1">
        <v-container>
          <v-row>
            <v-col cols="6" offset="3">
              <v-card class="rounded-lg elevated-light px-4">
                <v-card-title>
                  <div>
                    <p class="mb-0 font-weight-bold">Email Setup</p>
                    <p class="caption mb-0">
                      Select Email Sender ID and Configure Email Template
                    </p>
                  </div>
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        label="Email senderID"
                        v-model="emailSenderID"
                      ></v-text-field>
                      <v-text-field
                        label="Email Subject"
                        v-model="emailSubject"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions class="justify-center pb-8 pt-2">
                  <v-btn class="light primary--text curved px-6 mx-2">
                    Back
                  </v-btn>
                  <v-btn
                    @click="step = 2"
                    class="gradient white--text curved px-6 mx-2"
                  >
                    Next
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
      <v-window-item :value="2">
        <v-container>
          <v-row>
            <v-col cols="10" offset="1">
              <v-card class="elevated-light roundedlg">
                <v-card-title>
                  <div>
                    <p class="mb-0 font-weight-bold">Email Setup</p>
                    <p class="caption mb-0">
                      Select Email Sender ID and Configure Email Template
                    </p>
                  </div>
                </v-card-title>
                <v-card-text>
                  <div class="text-center d-flex justify-center">
                    <v-chip-group
                      v-model="selectedEmailTemplateType"
                      @change="changeSelectedEmailTemplateType"
                      mandatory
                      active-class="primary--text"
                    >
                      <v-chip
                        :value="tag"
                        v-for="tag in emailTemplateTypes"
                        :key="tag"
                      >
                        {{ tag }}
                      </v-chip>
                    </v-chip-group>
                  </div>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-scroll-x-transition leave-absolute>
                          <div
                            v-show="selectedEmailTemplateType == 'Templates'"
                          >
                            <v-item-group>
                              <v-container>
                                <v-row>
                                  <v-col
                                    v-for="(
                                      emailTemplate, n
                                    ) in availableEmailTemplates"
                                    :key="n"
                                    cols="12"
                                    md="4"
                                  >
                                    <v-item v-slot:default="{ active, toggle }">
                                      <div>
                                        <v-card
                                          class="elevated-light mb-2"
                                          height="200"
                                          :class="{
                                            primary: active,
                                            'bg-primary-lt': !active,
                                          }"
                                          @click="toggle"
                                        ></v-card>
                                        <p class="subtitle-2 text-center">
                                          {{ emailTemplate.title }}
                                        </p>
                                      </div>
                                    </v-item>
                                  </v-col>
                                </v-row>
                              </v-container>
                            </v-item-group>
                          </div>
                        </v-scroll-x-transition>
                        <v-scroll-x-reverse-transition leave-absolute>
                          <div v-show="selectedEmailTemplateType == 'Blank'">
                            <VueEditor
                              v-model="editorContent"
                              @textChange="editorChanged($event)"
                            />
                          </div>
                        </v-scroll-x-reverse-transition>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions class="justify-center pb-8 pt-2">
                  <v-btn
                    @click="step = 1"
                    class="light primary--text curved px-6 mx-2"
                  >
                    Back
                  </v-btn>
                  <v-btn
                    @click="step = 3"
                    class="gradient white--text curved px-6 mx-2"
                  >
                    Next
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailSenderID: "timothy.adams@gmail.com",
      emailSubject: "30 - 70% Discount Sales!!",
      step: 1,
      emailTemplateTypes: ["Templates", "Blank"],
      selectedEmailTemplateType: "Templates",
      availableEmailTemplates: [
        {
          title: "Modern Email Advertisement",
        },
        {
          title: "Socials Campaign Ad",
        },
        {
          title: "Class Campaign Ad",
        },
      ],
      editorContent: "",
    };
  },
  methods: {
    changeSelectedEmailTemplateType(e) {
      console.log({ e });
    },
    editorChanged(e) {
      console.log({ e });
    },
  },
};
</script>

<style>
</style>