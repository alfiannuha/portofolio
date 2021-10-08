<template>
  <div class="mb-12">

    <v-dialog v-model="dialog.request" width="500" persistent>
      <v-card class="rounded-lg box-shadow">
        <v-card-title class="body-1">
          Please request with social media below
          <v-spacer></v-spacer>
          <v-icon color="red" @click="dialog.request = false">mdi-close-circle</v-icon>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-row no-gutters class="mt-7">
            <v-col cols="6" md="3"
              v-for="(l, index) in social_media"
              :key="index">
              <div class="text-center" @click="goTo(l.link)">
                <img :alt="l.title" class="cursor-pointer" width="50" height="50" :src="l.icon" />
              </div>
            </v-col>
          </v-row>
          <div 
            class="mt-5 pa-2 white--text rounded-lg" 
            style="font-size: 16px;background: rgb(246,128,140);background: linear-gradient(90deg, rgba(246,128,140,1) 0%, rgba(233,113,212,1) 100%);">
            Write clearly your request, in addition to whatsapp and telegram, include your number where we can be contacted
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog.website" width="80%" scrollable persistent>
      <v-card class="rounded-lg box-shadow">
        <v-card-title class="body-1">
          {{ detail.title }}
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs } ">
              <v-btn
                v-on="on"
                v-bind="attrs"
                small
                class="ml-3"
                color="primary"
                icon
                target="_blank"
                :href="detail.website">
                <v-icon>mdi-link</v-icon>
              </v-btn>
            </template>
            <span>Preview in new Window</span>
          </v-tooltip>
          <v-spacer></v-spacer>
          <v-icon color="red" @click="dialog.website = false">mdi-close-circle</v-icon>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 800px" class="pa-3">
         <iframe :src="detail.website" frameborder="0" width="100%" height="600"></iframe>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog.detail" width="76%" persistent>
      <v-card class="rounded-lg box-shadow">
        <v-card-title class="body-1">
          {{ detail.title }}
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs } ">
              <v-btn
                v-on="on"
                v-bind="attrs"
                small
                class="ml-3"
                color="primary"
                icon
                target="_blank"
                :href="detail.website">
                <v-icon>mdi-link</v-icon>
              </v-btn>
            </template>
            <span>Preview in new Window</span>
          </v-tooltip>
          <v-spacer></v-spacer>
          <v-icon color="red" @click="dialog.detail = false">mdi-close-circle</v-icon>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>

        </v-card-text>
      </v-card>
    </v-dialog>

    <v-img
      alt="sodapos"
      width="100%"
      height="100vh"
      :src="require('@/assets/image/pink.jpg')"
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

    <section id="project" :class="$vuetify.breakpoint.name === 'xl' ? 'container' : ''">
      <v-container style="" :class="$vuetify.breakpoint.mdAndDown ? 'py-6': 'py-16 my-16'">
        <v-row class="pa-3 py-12" align="center" no-gutters>
          <v-col cols="12" md="6">
            <p
              class="
                text-h3
                line-text-first
                text-capitalize 
                text-left
                mt-5
              ">
              Projects
            </p>
            <p class="text-h3" style="color: #d31145">
              Beberapa project yang telah saya buat 
            </p>
          </v-col>
          <v-col cols="12" md="6" class="pr-0 pl-0 custom__margin">
            <v-img
              alt="sodapos"
              height="auto"
              width="500"
              style="margin:auto;z-index: 1"
              :src="require('@/assets/image/contactus.png')"
            >
            </v-img>
          </v-col>
        </v-row>

        <!-- PROJECT -->
        <v-row no-gutters class="mt-5">
          <v-col cols="12" md="6" class="pa-3" v-for="(l,index) in  projects" :key="index">
              <v-card class="rounded-lg box-shadow" width="1000">
                <v-hover v-slot="{ hover }">
                  <v-img
                    :src="l.image">
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out grey darken-4 v-card--reveal text-h2 white--text"
                        style="height: 100%;">
                        <v-btn @click="preview(l)">
                          Preview
                          <v-icon right>mdi-open-in-new</v-icon>
                        </v-btn>
                      </div>
                    </v-expand-transition>
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center">
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5">
                        </v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-hover>
                <v-divider></v-divider>
                <v-card-text class="d-flex subtitle-1 font-weight-bold">
                  {{ l.title }}
                  <v-spacer></v-spacer>
                  <v-btn
                    @click="show = !show; "
                    dense
                    small
                    color="pink"
                    elevation="0"
                    text>
                    Detail Project
                  </v-btn>
                </v-card-text>
                <v-expand-transition>
                  <div v-show="show">
                    <v-divider></v-divider>
                    <v-card-text>
                      Aliquet viverra justo fermentum massa quisque rhoncus nunc sit auctor nostra litora erat fames tristique eleifend tellus ullamcorper semper vel interdum per letius vitae non leo vivamus convallis nullam porta conubia ligula iaculis elit cubilia diam placerat dignissim himenaeos maecenas
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>


    <section id="skill" :class="$vuetify.breakpoint.name === 'xl' ? 'container' : ''">
      <v-container style="" :class="$vuetify.breakpoint.mdAndDown ? 'py-6': 'py-16 my-16'">
        <v-row class="pa-3 py-12" align="center" no-gutters>
          <v-col cols="12" md="6">
            <p
              class="
                text-h3
                line-text-first
                text-capitalize 
                text-left
                mt-5
              ">
              Skill
            </p>
            <p class="text-h3" style="color: #d31145">
              Beberapa skill yang saya kuasai saat ini
            </p>
          </v-col>
          <v-col cols="12" md="6" class="pr-0 pl-0 custom__margin">
            <v-img
              alt="sodapos"
              height="auto"
              width="500"
              style="margin:auto;z-index: 1"
              :src="require('@/assets/image/contactus.png')">
            </v-img>
          </v-col>
        </v-row>

        <!-- SKILL -->
        <v-row no-gutters class="mt-5">
          <v-col cols="12" md="2" class="pa-10">
            <v-img
              :src="require('@/assets/logo/php.png')">
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div class="text-center mt-3">
              PHP
            </div>
          </v-col>
          <v-col cols="12" md="2" class="pa-10">
            <v-img
              :src="require('@/assets/logo/html.png')">
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div class="text-center mt-3">
              HTML
            </div>
          </v-col>
          <v-col cols="12" md="2" class="pa-10">
            <v-img
              :src="require('@/assets/logo/css.png')">
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div class="text-center mt-3">
              CSS
            </div>
          </v-col>
          <v-col cols="12" md="2" class="pa-10">
            <v-img
              :src="require('@/assets/logo/js.png')">
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div class="text-center mt-3">
              Javascript
            </div>
          </v-col>
          <v-col cols="12" md="2" class="pa-10">
            <v-img
              :src="require('@/assets/logo/vue.png')">
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div class="text-center mt-3">
              Vue js
            </div>
          </v-col>
          <v-col cols="12" md="2" class="pa-10">
            <v-img
              :src="require('@/assets/logo/nuxt.png')">
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div class="text-center mt-3">
              Nuxt js
            </div>
          </v-col>
          <v-col cols="12" md="2" class="pa-10">
            <v-img
              :src="require('@/assets/logo/mysql.png')">
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div class="text-center mt-16 pt-8">
              MySQL
            </div>
          </v-col>
          <v-col cols="12" md="2" class="pa-10">
            <v-img
              :src="require('@/assets/logo/codeigniter.png')">
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div class="text-center mt-5">
              CodeIgniter
            </div>
          </v-col>
          <v-col cols="12" md="2" class="pa-10">
              <v-img
                :src="require('@/assets/logo/laravel.png')">
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center">
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5">
                    </v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            <div class="text-center mt-10">
            <v-badge content="Ongoing" color="green">
              Laravel
            </v-badge>
            </div>
          </v-col>
          <v-col cols="12" md="2" class="pa-10">
            <v-img
              width="400"
              :src="require('@/assets/logo/bootstrap.png')">
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div class="text-center mt-16">
              Bootstrap
            </div>
          </v-col>
          <v-col cols="12" md="2" class="pa-10">
            <v-img
              :src="require('@/assets/logo/vuetify.png')">
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div class="text-center mt-5">
              Vuetify
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: {
        request: false,
        website: false,
      },
      show: false,
      detail: {},
      social_media: [
        {
          title: "Email",
          link: `https://mail.google.com/mail/?view=cm&fs=1&to=alfian.nuha@gmail.com&su=[PROJECT] Request Project&body=Isi keterangan permintaan Anda dengan jelas dan sertakan nomor telpon atau nomor Whatsapp yang dapat kami hubungi&bcc=alfian.nuha@gmail.com`,
          icon: require('@/assets/sosmed/gmail.png')
        },
        {
          title: "Linkedin",
          link: `https://www.linkedin.com/in/alfian-an-naufal-nuha-9046a91b6`,
          icon: require('@/assets/sosmed/login_linkedin.png')
        },
        {
          title: "Whatsapp",
          link: `https://wa.me/62895392685163`,
          icon: require('@/assets/sosmed/ic_share_wa.svg')
        },
        {
          title: "Telegram",
          link: `https://t.me/aa_nuha`,
          icon: require('@/assets/sosmed/ic_share_tel.svg')
        },
      ],
      projects: [
        {
          title: "Website Pernikahan",
          image: require('@/assets/image/weddingku.png'),
          website: "https://weddingku.vercel.app/"
        },
        {
          title: "Landing Page SODA POS",
          image: require('@/assets/image/sodapos.png'),
          website: "https://sodapos.com"
        },
        {
          title: "Landing Page Affiliate SODA POS",
          image: require('@/assets/image/affiliate.png'),
          website: "https://affiliate.sodapos.com"
        },
        {
          title: "Halaman Admin User SODA POS",
          image: require('@/assets/image/admin.png'),
          website: "https://admin.sodapos.com"
        },
        {
          title: "Halaman Admin Internal SODA POS",
          image: require('@/assets/image/internal.png'),
          website: "https://internal.sodapos.com"
        },
        {
          title: "Halaman Admin Vitoads",
          image: require('@/assets/image/vitoads.png'),
          website: "https://vito-cms.vercel.app"
        },
        {
          title: "Halaman Admin CMS KIMI",
          image: require('@/assets/image/kimi.png'),
          website: "http://cms.kimi.id"
        },
        {
          title: "Halaman Admin Garonk Signal",
          image: require('@/assets/image/garonk_signal.png'),
          website: "https://garonk.com"
        },
      ],
      skills: [
        {
          title: "PHP",
          image: require('@/assets/logo/php.png')
        },
        {
          title: "Vue js",
          image: require('@/assets/logo/vue.png')
        },
        {
          title: "Nuxt js",
          image: require('@/assets/logo/nuxt.png')
        },
        {
          title: "JS",
          image: require('@/assets/logo/js.png')
        },
        {
          title: "CodeIgniter",
          image: require('@/assets/logo/codeigniter.png')
        },
        {
          title: "HTML",
          image: require('@/assets/logo/html.png')
        },
        {
          title: "CSS",
          image: require('@/assets/logo/css.png')
        },
      ]
    }
  },
  watch: {
    $route(to, from) {
      if (to.query.project) {
        setTimeout(() => {
          let elmnt = document.getElementById("project");
          elmnt.scrollIntoView();
        });
      }
      if (to.query.syarat) {
        setTimeout(() => {
          let elmnt = document.getElementById("syarat");
          elmnt.scrollIntoView();
        });
      }
    }
  },
  computed: {},
  mounted() {
    if (this.$route.query.project) {
      setTimeout(() => {
        let project = document.getElementById("project");
        project.scrollIntoView();
      });
    }
    if (this.$route.query.syarat) {
      setTimeout(() => {
        let elmnt = document.getElementById("syarat");
        elmnt.scrollIntoView();
      });
    }
  },
  methods: {
    goTo(link){
      window.open(
        link,
        '_blank' // <- This is what makes it open in a new window.
      );
    },
    preview(data){
      this.dialog.website = true
      this.detail = data
    },
  },
}
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
.header-title {
  font-family: 'Kaushan Script', cursive !important;
  font-size: 40px;
  color: #ff4757
}
.subheader-title {
  font-family: 'Inter;sans-serif', cursive !important;
  font-size: 30px;
  color: #ff4757
}
</style>