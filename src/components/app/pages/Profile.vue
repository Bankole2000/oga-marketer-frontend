<template>
  <div class="profiler">
    <div class="d-flex page-header px-8">
      <p class="display-1 mb-0 grey--text text--darken-2">My Profile</p>

      <v-spacer></v-spacer>
      <v-btn class="gradient curved white--text text-capitalize">
        <v-icon left> mdi-help-circle-outline </v-icon>Help
      </v-btn>
    </div>
    <v-container class="mb-6">
      <v-row>
        <v-col cols="5">
          <v-card class="elevated-light rounded-lg mb-4 px-4">
            <v-card-title>
              <div style="flex-grow: 1" class="pr-16">
                <v-icon class="mr-4"> mdi-account-circle-outline </v-icon>
                General Information
                <v-divider class="bg-primary-lt mt-1" />
              </div>
              <v-spacer></v-spacer>
              <p
                class="mb-0 primary--text subtitle-2 text-decoration-underline"
              >
                Edit
              </p>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="3">
                  <div
                    class="d-flex flex-column align-center"
                    style="height: 100%"
                  >
                    <v-avatar
                      size="80"
                      color="primary lighten-4"
                      class="my-2"
                      style="border: 2px solid"
                    >
                      <v-img
                        :aspect-ratio="1"
                        :src="require('@/assets/imgs/avatarfemale2.png')"
                      />
                    </v-avatar>
                    <div class="d-flex align-center">
                      <v-icon size="20" class="mr-1" color="primary"
                        >mdi-pencil-circle</v-icon
                      >
                      <p class="mb-0 text-h6">Edit</p>
                    </div>
                    <v-spacer></v-spacer>
                    <v-avatar
                      size="80"
                      color="grey lighten-4"
                      class="my-2"
                      style="border: 2px solid"
                      tile
                    >
                      <v-icon color="grey" size="40">mdi-image-plus</v-icon>
                    </v-avatar>
                    <div class="d-flex align-center">
                      <v-icon size="20" class="mr-1" color="primary"
                        >mdi-pencil-circle</v-icon
                      >
                      <p class="mb-0 text-h6">Edit</p>
                    </div>
                  </div>
                </v-col>
                <v-col cols="9">
                  <div>
                    <p class="caption mb-0">First Name</p>
                    <p class="subtitle-1 mb-1">Timothy</p>
                  </div>
                  <v-divider class="mb-4"></v-divider>
                  <div>
                    <p class="caption mb-0">Last Name</p>
                    <p class="subtitle-1 mb-1">Adams</p>
                  </div>
                  <v-divider class="mb-4"></v-divider>
                  <div>
                    <p class="caption mb-0">Email</p>
                    <p class="subtitle-1 mb-1">timothy.adams@gmail.com</p>
                  </div>
                  <v-divider class="mb-4"></v-divider>
                  <div>
                    <p class="caption mb-0">Telephone</p>
                    <p class="subtitle-1 mb-1">+234(0) 8012345678</p>
                  </div>
                  <v-divider class="mb-4"></v-divider>
                  <div>
                    <p class="caption mb-0">Company Name</p>
                    <p class="subtitle-1 mb-1">ABC Retail Company</p>
                  </div>
                  <v-divider class="mb-4"></v-divider>
                  <div>
                    <p class="caption mb-0">Address</p>
                    <p class="subtitle-1 mb-1 text-truncate">
                      01 Johnson Kennedy Street, Pretoria, South Africa.
                    </p>
                  </div>
                  <v-divider class="mb-2"></v-divider>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card class="elevated-light rounded-lg px-4">
            <v-card-title>
              <div style="flex-grow: 1" class="pr-16">
                <v-icon class="mr-1"> mdi-lock</v-icon>
                Security & Data Processing
                <v-divider class="bg-primary-lt mt-1" />
              </div>
              <v-spacer></v-spacer>
              <p
                class="mb-0 primary--text subtitle-2 text-decoration-underline"
              >
                Manage
              </p>
            </v-card-title>
            <v-card-text>
              <div>
                <p class="caption mb-0">Password</p>
                <p class="subtitle-1 mb-1 text-truncate">********</p>
              </div>
              <v-divider class="mb-2"></v-divider>
              <div>
                <p class="mb-0">
                  In accordance with the EU
                  <a href="" target="_blank"
                    >General Data Protection Regulation (GDPR)</a
                  >, you are required to have a Data Processing Agreement (DPA)
                  with <strong>OgaMarketer</strong>. We've put together a DPA
                  for you to sign over <a href="" target="_blank">here</a>
                </p>
                <div class="d-flex align-center justify-end">
                  <v-checkbox
                    label="Signed"
                    class="py-0 mt-n2"
                    hide-details
                  ></v-checkbox>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="7">
          <v-card class="elevated-light rounded-lg mb-4 px-4">
            <v-card-title>
              <div style="flex-grow: 1" class="pr-16">
                <v-icon class="mr-2"> mdi-credit-card</v-icon>
                Pricing Plans
                <v-divider class="bg-primary-lt mt-1" />
              </div>
              <v-spacer></v-spacer>
              <p
                class="mb-0 primary--text subtitle-2 text-decoration-underline"
              >
                Manage Subscriptions
              </p>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="4">
                  <v-card class="bg-primary-lt text-center px-2" flat>
                    <p class="py-2 mb-0 subtitle-2">500 Contacts</p>
                    <p class="font-weight-bold primary--text subtitle-2 mb-0">
                      Free Plan
                    </p>
                    <p class="primary--text font-weight-bold headline mb-0">
                      &#8358; 0
                    </p>
                    <div class="d-flex align-center justify-center">
                      <v-divider
                        style="max-width: 100px"
                        class="my-2"
                      ></v-divider>
                    </div>
                    <p class="caption">
                      this gives you a taste of our solution, and will always
                      remain free. We promise!
                    </p>
                    <p class="font-weight-bold caption mb-0">Free plan:</p>
                    <p class="caption mb-2">
                      You will have access to limited features.
                    </p>
                    <p class="caption" style="margin-bottom: 2px">
                      Starting at - 500 Customers.
                    </p>
                    <p class="caption" style="margin-bottom: 2px">
                      Up to 1 Campaign.
                    </p>
                    <p class="caption" style="margin-bottom: 2px">
                      Up to 2 Tracker Goals.
                    </p>
                    <p class="caption" style="margin-bottom: 2px">
                      Up to 1 Tracker Sites.
                    </p>
                    <p class="caption mb-0">Up to 2 Email IDs.</p>
                    <div class="d-flex align-center justify-center">
                      <v-divider
                        style="max-width: 100px"
                        class="my-4"
                      ></v-divider>
                    </div>
                    <v-btn
                      class="
                        px-6
                        mb-4
                        gradient
                        white--text
                        text-capitalize
                        curved
                      "
                      >Get Plan</v-btn
                    >
                  </v-card>
                </v-col>
                <v-col cols="4">
                  <v-card class="bg-primary-lt text-center px-2" flat>
                    <p class="py-2 mb-0 subtitle-2">500 Contacts</p>
                    <p class="font-weight-bold primary--text subtitle-2 mb-0">
                      Start-up Plan
                    </p>
                    <p class="primary--text font-weight-bold headline mb-0">
                      &#8358; 1,200
                    </p>
                    <div class="d-flex align-center justify-center">
                      <v-divider
                        style="max-width: 100px"
                        class="my-2"
                      ></v-divider>
                    </div>
                    <p class="caption">
                      this gives you a taste of our solution, and will always
                      remain free. We promise!
                    </p>
                    <p class="font-weight-bold caption mb-0">Free plan:</p>
                    <p class="caption mb-2">
                      You will have access to limited features.
                    </p>
                    <p class="caption" style="margin-bottom: 2px">
                      Starting at - 500 Customers.
                    </p>
                    <p class="caption" style="margin-bottom: 2px">
                      Up to 1 Campaign.
                    </p>
                    <p class="caption" style="margin-bottom: 2px">
                      Up to 2 Tracker Goals.
                    </p>
                    <p class="caption" style="margin-bottom: 2px">
                      Up to 1 Tracker Sites.
                    </p>
                    <p class="caption mb-0">Up to 2 Email IDs.</p>
                    <div class="d-flex align-center justify-center">
                      <v-divider
                        style="max-width: 100px"
                        class="my-4"
                      ></v-divider>
                    </div>
                    <v-btn
                      class="
                        px-6
                        mb-4
                        gradient
                        white--text
                        text-capitalize
                        curved
                      "
                      >Get Plan</v-btn
                    >
                  </v-card>
                </v-col>
                <v-col cols="4">
                  <v-card class="bg-primary-lt text-center px-2" flat>
                    <p class="py-2 mb-0 subtitle-2">500 Contacts</p>
                    <p class="font-weight-bold primary--text subtitle-2 mb-0">
                      Professional Plan
                    </p>
                    <p class="primary--text font-weight-bold headline mb-0">
                      &#8358; 7,000
                    </p>
                    <div class="d-flex align-center justify-center">
                      <v-divider
                        style="max-width: 100px"
                        class="my-2"
                      ></v-divider>
                    </div>
                    <p class="caption">
                      this gives you a taste of our solution, and will always
                      remain free. We promise!
                    </p>
                    <p class="font-weight-bold caption mb-0">Free plan:</p>
                    <p class="caption mb-2">
                      You will have access to limited features.
                    </p>
                    <p class="caption" style="margin-bottom: 2px">
                      Starting at - 500 Customers.
                    </p>
                    <p class="caption" style="margin-bottom: 2px">
                      Up to 1 Campaign.
                    </p>
                    <p class="caption" style="margin-bottom: 2px">
                      Up to 2 Tracker Goals.
                    </p>
                    <p class="caption" style="margin-bottom: 2px">
                      Up to 1 Tracker Sites.
                    </p>
                    <p class="caption mb-0">Up to 2 Email IDs.</p>
                    <div class="d-flex align-center justify-center">
                      <v-divider
                        style="max-width: 100px"
                        class="my-4"
                      ></v-divider>
                    </div>
                    <v-btn
                      text
                      color="primary"
                      class="px-6 mb-4 text-capitalize font-weight-bold"
                      >Current Plan</v-btn
                    >
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card class="elevated-light rounded-lg px-4">
            <v-card-title>
              <div style="flex-grow: 1" class="pr-16">
                <v-icon class="mr-2"> mdi-credit-card-clock</v-icon>
                Billing History
                <v-divider class="bg-primary-lt mt-1" />
              </div>
              <v-spacer></v-spacer>
              <p
                class="mb-0 primary--text subtitle-2 text-decoration-underline"
              >
                See All
              </p>
            </v-card-title>
            <v-card-text>
              <div>
                <div class="d-flex align-end">
                  <div>
                    <p class="subtitle-1 mb-0 font-weight-medium">
                      Thursday, 19th September 2019
                    </p>
                    <p class="caption mb-1">Payment ID ADJWOQ2219</p>
                  </div>
                  <v-spacer></v-spacer>
                  <p class="mb-1 subtitle-1">&#8358; 7,000</p>
                </div>
              </div>
              <v-divider class="mb-4"></v-divider>
              <div>
                <div class="d-flex align-end">
                  <div>
                    <p class="subtitle-1 mb-0 font-weight-medium">
                      Friday, 30th August 2019
                    </p>
                    <p class="caption mb-1">Payment ID ADJWOQ2219</p>
                  </div>
                  <v-spacer></v-spacer>
                  <p class="mb-1 subtitle-1">&#8358; 7,000</p>
                </div>
              </div>
              <v-divider class="mb-1"></v-divider>
              <!-- <div>
                <div class="d-flex align-end">
                  <div>
                    <p class="subtitle-1 mb-0 font-weight-medium">
                      Tuesday, 25th September 2019
                    </p>
                    <p class="caption mb-1">Payment ID ADJWOQ2219</p>
                  </div>
                  <v-spacer></v-spacer>
                  <p class="mb-1 subtitle-1">&#8358; 7,000</p>
                </div>
              </div>
              <v-divider class="mb-4"></v-divider>
              <div>
                <div class="d-flex align-end">
                  <div>
                    <p class="subtitle-1 mb-0 font-weight-medium">
                      Tuesday, 25th July 2019
                    </p>
                    <p class="caption mb-1">Payment ID ADJWOQ2219</p>
                  </div>
                  <v-spacer></v-spacer>
                  <p class="mb-1 subtitle-1">&#8358; 7,000</p>
                </div>
              </div>
              <v-divider class="mb-4"></v-divider> -->
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  beforeRouteEnter(to, from, next) {
    // console.log({ to, from, next });
    // this.setRoutes({ subroutes: [{ title: "test", route: "test" }] });
    next((vm) => {
      vm.$store.dispatch("ui/setSubroutes", {
        subroutes: vm._data.subroutes || [],
      });
      console.log({ data: vm._data });
    });
  },
};
</script>

<style>
</style>