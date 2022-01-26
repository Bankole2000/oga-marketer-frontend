<template>
  <div class="contact-details">
    <div class="page-header px-8" style="max-height: 88px">
      <p class="display-1 mb-0 grey--text text--darken-2">
        {{ contact.firstname }} {{ contact.lastname }}
      </p>
      <v-divider vertical class="ma-4" />
      <v-card elevation="0" :class="`bg-primary-lt pa-0 my-2`">
        <v-responsive :aspect-ratio="1">
          <div
            class="d-flex align-center flex-column justify-center px-2"
            style="width: 100%; height: 100%; line-height: 1rem"
          >
            <p class="mb-1 text-h5 primary--text" style="line-height: 1rem">
              23
            </p>
            <p class="mb-0 caption text-center" style="line-height: 0.8rem">
              Cusomer <br />
              Value
            </p>
          </div>
        </v-responsive>
      </v-card>
      <v-card elevation="0" :class="`bg-primary-lt pa-0 ma-2`">
        <v-responsive :aspect-ratio="1">
          <div
            class="d-flex align-center flex-column justify-center px-2"
            style="width: 100%; height: 100%; line-height: 1rem"
          >
            <p class="mb-1 text-h5 primary--text" style="line-height: 1rem">
              45
            </p>
            <p class="mb-0 caption text-center" style="line-height: 0.8rem">
              Response <br />
              Value
            </p>
          </div>
        </v-responsive>
      </v-card>
      <v-spacer></v-spacer>
      <v-btn text color="primary" class="text-capitalize">Duplicate</v-btn>
      <v-btn text color="primary" class="text-capitalize">Export</v-btn>
      <v-btn text color="error" class="text-capitalize">Delete</v-btn>
      <div class="d-flex align-center mx-4">
        <v-icon color="primary lighten-2" style="cursor: pointer"
          >mdi-chevron-left</v-icon
        >
        <span class="primary--text"> 1 / 14</span>
        <v-icon color="primary darken-2" style="cursor: pointer"
          >mdi-chevron-right</v-icon
        >
      </div>
      <v-btn
        @click="
          $router.push({ name: 'app.contacts.my-contacts' }).catch(() => {})
        "
        outlined
        color="error"
        class="text-capitalize"
      >
        <v-icon left>mdi-chevron-left</v-icon>
        Back</v-btn
      >
    </div>
    <v-container fluid class="px-6">
      <v-row>
        <v-col cols="6">
          <v-card class="mb-4 elevated-light rounded-lg" flat>
            <v-card-title class="d-flex align-center">
              <v-icon class="mr-4">mdi-account-circle-outline</v-icon>
              <span class="">General Information</span>
              <v-spacer></v-spacer>
              <a href="" class="caption mr-4">Add Custom Fields</a>
              <a href="" class="caption">Edit</a>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="2" class="text-center">
                  <v-avatar
                    size="96"
                    color="primary lighten-4"
                    class="mt-2"
                    style="border: 2px solid"
                  >
                    <v-img :aspect-ratio="1" :src="contact.profileImage" />
                  </v-avatar>
                </v-col>
                <v-col cols="1" class="text-center">
                  <v-divider vertical></v-divider>
                </v-col>
                <v-col cols="9">
                  <div class="d-flex align-center">
                    <div style="width: 50%">
                      <p class="caption mb-0">First Name</p>
                      <p class="text-h5 mb-1">{{ contact.firstname }}</p>
                    </div>
                    <div style="width: 50%">
                      <p class="caption mb-0">Last Name</p>
                      <p class="text-h5 mb-1">{{ contact.lastname }}</p>
                    </div>
                  </div>
                  <v-divider class="mb-4"></v-divider>
                  <div>
                    <p class="caption mb-0">Email</p>
                    <p class="text-h5 mb-1">{{ contact.email }}</p>
                  </div>
                  <v-divider class="mb-4"></v-divider>
                  <div>
                    <p class="caption mb-0">Telephone</p>
                    <p class="text-h5 mb-1">{{ contact.phone }}</p>
                  </div>
                  <v-divider class="mb-4"></v-divider>
                  <div>
                    <p class="caption mb-0">Address</p>
                    <p class="text-h5 mb-1">
                      {{ contact.address.street }}, {{ contact.address.city }}
                    </p>
                  </div>
                  <v-divider class="mb-4"></v-divider>
                  <div>
                    <p class="caption mb-0">Tags</p>
                    <div v-if="contact.tags">
                      <v-chip-group v-if="contact.tags.length">
                        <v-chip v-for="(tag, i) in contact.tags" :key="i">
                          {{ tag }}
                        </v-chip>
                      </v-chip-group>
                      <div class="d-flex align-center" v-else>
                        <p class="mb-0">This contact has no tags</p>
                        <v-spacer></v-spacer>
                        <v-btn text class="text-capitalize" color="primary"
                          ><v-icon left>mdi-plus</v-icon> Add Tags</v-btn
                        >
                      </div>
                    </div>
                  </div>
                  <v-divider class="mb-4"></v-divider>
                  <div class="d-flex align-end">
                    <div>
                      <p class="caption mb-0">Lists</p>
                      <p class="text-h5 mb-1">Marketers, Onboarding</p>
                    </div>
                    <v-spacer></v-spacer>
                    <v-btn text class="text-capitalize" color="primary"
                      ><v-icon left>mdi-plus</v-icon> Add to List</v-btn
                    >
                    <div></div>
                  </div>

                  <v-divider class="mb-4"></v-divider>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card class="px-4 pb-4 pt-0 elevated-light rounded-lg">
            <v-tabs>
              <v-tab class="text-capitalize">Contact Notes</v-tab>
              <v-tab class="text-capitalize">Email Contact</v-tab>

              <v-tab-item v-for="n in 2" :key="n">
                <v-container fluid>
                  <v-row>
                    <v-col cols="12">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis, deserunt? Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Iste, eveniet.
                    </v-col>
                    <!-- <v-col v-for="i in 6" :key="i" cols="12" md="4">
                      <v-img
                        :src="`https://picsum.photos/500/300?image=${
                          i * n * 5 + 10
                        }`"
                        :lazy-src="`https://picsum.photos/10/6?image=${
                          i * n * 5 + 10
                        }`"
                        aspect-ratio="1"
                      ></v-img>
                    </v-col> -->
                  </v-row>
                </v-container>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card height="100%" class="pr-6 elevated-light rounded-lg">
            <v-card-title class="d-flex align-center">
              <v-icon class="mr-4">mdi-account-circle-outline</v-icon>
              <span class="">Activity Log</span>
              <v-spacer></v-spacer>
              <v-select
                max-width="100"
                label="All Activities"
                hide-details
                rounded
                outlined
                dense
              ></v-select>
            </v-card-title>
            <v-card-text>
              <v-timeline align-top dense>
                <v-timeline-item
                  color="primary"
                  small
                  fill-dot
                  icon="mdi-email-outline"
                >
                  <v-row class="pt-0">
                    <v-col cols="2" class="px-0">
                      <strong class="subtitle-1">04:25pm</strong>
                    </v-col>
                    <v-col cols="10" class="pb-0">
                      <div>
                        <p class="subtitle-1 mb-1">
                          Email opened -
                          <strong>"New Promotion Offer"</strong> email in
                          <a href="">Promotion Campaign</a>
                        </p>
                      </div>

                      <div class="caption">
                        <p class="text-justify mb-0">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita.
                        </p>
                      </div>
                    </v-col>
                  </v-row>
                </v-timeline-item>
                <v-timeline-item
                  color="accent"
                  small
                  fill-dot
                  icon="mdi-bullseye"
                >
                  <v-row class="pt-0">
                    <v-col cols="2" class="px-0">
                      <strong class="subtitle-1">03:10pm</strong>
                    </v-col>
                    <v-col cols="10" class="pb-0">
                      <div>
                        <p class="subtitle-1 mb-1">
                          Tracker Triggered -
                          <a href="">Onboard Campaign</a>
                        </p>
                      </div>
                      <div class="caption">
                        <p class="text-justify mb-0">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita.
                        </p>
                      </div>
                    </v-col>
                  </v-row>
                </v-timeline-item>
                <v-timeline-item color="pink" small fill-dot icon="mdi-bell">
                  <v-row class="pt-0">
                    <v-col cols="2" class="px-0">
                      <strong class="subtitle-1">03:02pm</strong>
                    </v-col>
                    <v-col cols="10" class="pb-0">
                      <div>
                        <p class="subtitle-1 mb-1">
                          Subscription - Dennis
                          <strong>unsubscribed</strong> from
                          <a href="">Active Purchase</a> List.
                        </p>
                      </div>
                      <div class="caption">
                        <p class="text-justify mb-0">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita.
                        </p>
                      </div>
                    </v-col>
                  </v-row>
                </v-timeline-item>
                <v-timeline-item
                  color="accent"
                  small
                  fill-dot
                  icon="mdi-bullseye"
                >
                  <v-row class="pt-0">
                    <v-col cols="2" class="px-0">
                      <strong class="subtitle-1">03:02pm</strong>
                    </v-col>
                    <v-col cols="10" class="pb-0">
                      <div>
                        <p class="subtitle-1 mb-1">
                          Tracker Triggered -
                          <a href="">Discount League Campaign</a>
                        </p>
                      </div>
                      <div class="caption">
                        <p class="text-justify mb-0">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita.
                        </p>
                      </div>
                    </v-col>
                  </v-row>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import MetricCard from "../../../blocks/MetricCard.vue";
import contacts from "@/data/contacts.json";
export default {
  components: {
    // MetricCard,
  },
  data() {
    return {
      contact: null,
    };
  },
  mounted() {
    console.log(this.$route.params);
    if (this.$route.params.id) {
      const contactId = this.$route.params.id;
      const foundContact = contacts.filter(
        (contact) => contact.id == contactId
      );
      this.contact = foundContact[0];
      const names = this.contact.name.split(" ");
      this.contact.firstname = names[0];
      this.contact.lastname = names[1];
      console.log({ contact: this.contact });
    }
  },
};
</script>

<style>
</style>