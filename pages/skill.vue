<template>
  <div class="mb-12">

    <v-img
      alt="sodapos"
      width="100%"
      height="100vh"
      :src="require('@/assets/image/yellow.jpg')"
    >
      <section :class="$vuetify.breakpoint.name === 'xl' ? 'container' : ''">
        <v-container class="py-5 my-5">
          <v-row class="pa-3 py-5 my-5" no-gutters>
            <v-col cols="12" md="12" align="center" justify="center">
              <v-card 
                width="300"
                height="300"
                class="rounded-circle box-shadow">
                <v-img
                  width="100%"
                  height="100%"
                  :src="require('@/assets/image/profile_.png')">
                </v-img>
              </v-card>

              <div class="header-title mt-7">Alfian An - Naufal Nuha</div>
              <div class="subheader-title mt-7">WEB Development</div>
              <div class="mt-7">
                <v-btn
                  color="primary"
                  dense
                  @click="dialog.request = true"
                  text>
                  <span class="text-h6">
                    Start a Project Request
                  </span>
                  <v-icon right>mdi-chevron-triple-right</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-img>
  </div>
</template>