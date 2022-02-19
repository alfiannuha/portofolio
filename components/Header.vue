<template>
  <div>
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
            class="mt-5 pa-2 white--text rounded-lg primary-color" 
            style="font-size: 16px;">
            Write clearly your request, in addition to whatsapp and telegram, include your number where we can be contacted
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    
    <v-app-bar
      v-if="$route.name !== 'faqlite' && $route.name !== 'privacylite' && $route.name !== 'aboutlite'"
      app
      elevation="0"
      fixed
      :class="$route.name !== 'about' ? 'header' : 'header-about'">
      <v-container>
        <v-row class="hidden-md-and-down">
          <v-col cols="12" md="4">
            <v-toolbar-title class="d-flex">
              <nuxt-link to="/" style="text-decoration: none">
                <div class="header-title text-left  hover-link">
                  Alfian Nuha
                </div>
                </nuxt-link>
            </v-toolbar-title>
          </v-col>
          <v-col cols="12" md="4" class="d-flex align-center justify-center">
            <nuxt-link
              style="text-decoration: none"
              v-for="(item, index) in menu"
              :key="index"
              :to="item.link"
              :class="index === 0 ? 'ml-7' : ''"
            >
              <v-card-title
                class="body-1 menu cursor-pointer black--text hover-link">
                {{ item.label }}
              </v-card-title>
            </nuxt-link>
          </v-col>
          <v-col cols="12" md="4">
            <v-toolbar-title class="d-flex">
              <v-spacer></v-spacer>
              <div class="header-title-right text-left py-3 hover-link cursor-pointer" @click="dialog.request = true">
                Project Request 
                <v-icon color="#000000">mdi-chevron-double-right</v-icon>
              </div>
            </v-toolbar-title>
          </v-col>
        </v-row>
        <v-row justify="left" align="left" class="hidden-lg-and-up">
          <v-col cols="10" style="padding: 0 0 1rem">
            <nuxt-link to="/">
              <div class="header-title text-left">
                Alfian Nuha
              </div>
            </nuxt-link>
          </v-col>
          <v-col cols="2" class="d-flex align-center justify-center">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  small
                  elevation="0"
                  class="caption text-capitalize mb-3"
                  v-bind="attrs"
                  v-on="on">
                  <v-icon>mdi-menu</v-icon>
                </v-btn>
              </template>
              <v-list dense>
                <v-list-item
                  v-for="(item, index) in menu"
                  :key="index"
                  :to="item.link">
                  <v-list-item-title class="color-second">
                    {{ item.label }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-divider style="width:10px !important" v-if=" $route.name === 'article'"></v-divider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: {
        request: false
      },
      menu: [
        {
          label: "About",
          icon: "mdi-clock",
          link: "/about"
        },
        {
          label: "Project",
          icon: "mdi-clock",
          link: "/#project"
        },
        {
          label: "Skills",
          icon: "mdi-clock",
          link: "/#skill"
        },
        {
          label: "Contact",
          link: "/#contact"
        }
      ],
      social_media: [
        {
          title: "Email",
          link: `https://mail.google.com/mail/?view=cm&fs=1&to=alfian.nuha@gmail.com&su=[PROJECT] Request Project&body=Isi keterangan permintaan Anda dengan jelas dan sertakan nomor telpon atau nomor Whatsapp yang dapat kami hubungi&bcc=alfian.nuha@gmail.com`,
          icon: require("@/assets/sosmed/gmail.png"),
        },
        {
          title: "Linkedin",
          link: `https://www.linkedin.com/in/alfian-an-naufal-nuha-9046a91b6`,
          icon: require("@/assets/sosmed/login_linkedin.png"),
        },
        {
          title: "Whatsapp",
          link: `https://wa.me/62895392685163`,
          icon: require("@/assets/sosmed/ic_share_wa.svg"),
        },
        {
          title: "Telegram",
          link: `https://t.me/aa_nuha`,
          icon: require("@/assets/sosmed/ic_share_tel.svg"),
        },
      ],
    };
  },
  computed: {
  },
  mounted() {
    const debounce = fn => {
      let frame;
      return (...params) => {
        if (frame) {
          cancelAnimationFrame(frame);
        }
        frame = requestAnimationFrame(() => {
          fn(...params);
        });
      };
    };
    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY;
    };
    document.addEventListener("scroll", debounce(storeScroll), {
      passive: true
    });
    storeScroll();
  },
  methods: {
    goTo(link) {
      window.open(
        link,
        "_blank" // <- This is what makes it open in a new window.
      );
    },
  }
};
</script>

<style scoped>
.header-title {
  font-family: 'Kaushan Script', cursive !important;
  font-size: 30px;
  color: #000000
}
.header-title-right {
  font-size: 20px;
  color: #000000
}
.header {
  background-color: transparent !important;
}
.header-about {
  background: #654ea3;
  background: -webkit-linear-gradient(to right, #eaafc8, #654ea3);
  background: linear-gradient(to right, #eaafc8, #654ea3);
}
html:not([data-scroll="0"]) .header {
  background: #654ea3;
  background: -webkit-linear-gradient(to right, #eaafc8, #654ea3);
  background: linear-gradient(to right, #eaafc8, #654ea3);
}
</style>