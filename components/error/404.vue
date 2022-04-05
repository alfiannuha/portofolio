<template>
  <v-layout column class="py-12">
    <div class="text-center">
      <section
        :class="$vuetify.breakpoint.name === 'xl' ? 'container' : ''">
        <v-container>
          <v-row justify="center" align="center">
            <v-col cols="12" md="6">
              <v-card
                class="border-radius box-shadow pa-12">
                <v-row justify="center" align="center">
                  <v-col cols="12" md="10">
                    <div class="py-9">
                      <v-img alt="sodapos"
                        :src="require('@/assets/logo/logo.png')"
                        max-height="250"
                        max-width="250"
                        class="ma-auto">
                      </v-img>
                    </div>
                    <div class="pb-12">
                      <p class="title text-first font-weight-bold mb-1 pt-12">
                        Halaman Tidak Ditemunkan
                      </p>
                      <p class="body-2 text-second pb-12">
                        Sepertinya halaman yang Anda tuju tidak terdaftar dalam website kami.
                      </p>
                      <v-btn
                        small
                        light
                        color="#d31145"
                        elevation="3"
                        class="white--text text-capitalize caption"
                        to="/">
                        <v-icon small class="mr-1">mdi-chevron-left-circle-outline</v-icon>
                        Kembali Ke Beranda
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </div>
  </v-layout>
</template>

<script> 
  import { createSEOMeta } from '@/utils/seo'
  export default {
    name: 'error-404',
    data () {
      return {
        // SEO
        content: {
          url: '',
          title: '404',
          description: 'Halaman tidak ditemukan',
          image: require('@/assets/logo/logo.png'),
        }
      }
    },
    props: {
      error: {
        type: Object,
        default: () => {},
      }
    },
    head () {
      return {
        title: this.content.title,
        meta: createSEOMeta(this.content)
      }
    }
  }
</script>