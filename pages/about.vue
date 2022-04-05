<template>
  <div
    class="mb-7"
    style="
      background: #FEC386;
      background: -webkit-linear-gradient(to right, #CCE5F1, #FEC386);
      background: linear-gradient(to right, #CCE5F1, #FEC386);
    "
  >
    <section :class="$vuetify.breakpoint.name === 'xl' ? 'container' : ''">
      <v-container
        style=""
        :class="$vuetify.breakpoint.mdAndDown ? 'pt-6' : 'pt-9 mt-8'"
      >
        <v-row no-gutters>
          <v-col cols="12" md="5" :class="$vuetify.breakpoint.name === 'lg' ? 'mt-3 animate__animated animate__fadeInLeft animate__delay-1s' : 'mt-10 animate__animated animate__fadeInDown'">
            <v-img
              width="90%"
              height="100%"
              class="mx-auto rounded-lg"
              :src="require('@/assets/image/profile_.png')"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
          <v-col cols="12" md="7" class="px-5 mt-3 text-justify animate__animated animate__fadeInLeft ">
            <h3 class="mb-3">Hallo, Saya Alfian An - Naufal Nuha</h3>
            <p>
              Hallo, nama saya Alfian An - Naufal Nuha dan saya seorang Web
              Development. Saya memiliki kemampuan untuk membuat sebuah Website
              atau Aplikasi Web.
            </p>
            <p>
              Saya lahir di Semarang pada 12 Mei 2000 dan sekarang saya tinggal
              di Daerah Istimewa Yogyakarta. Saya pertama kali mendalami coding
              adalah setelah dari Pondok Pesantren dengan masuk ke sebuah Kursus
              Web Pemograman yaitu
              <a class="white--text text-decoration-underline" href="https://alfabankjogja.com/">Alfabank Yogyakarta</a>
            </p>
            <p>
              Saya saat ini sedang menempuh kuliah pada Jurusan Teknik
              Informatika di Universitas Mercubuana Yogyakarta Kampus 2.
              Sekarang menempuh pada semester ke 4 dan sambil bekerja.
            </p>
            <p>
              Saat ini saya bekerja di PT . Era Solusi Data sebagai Front End
              Development. Sebagai Front End pada produk
              <a class="white--text text-decoration-underline" href="https://sodapos.com">Aplikasi Kasir SODA POS</a>. Dan ada
              beberapa project yang pernah saya buat bisa dilihat
              <nuxt-link class="white--text text-decoration-underline" to="/#project">disini</nuxt-link>
            </p>
            <v-btn 
              href="assets/CV_ALFIAN_AN_NAUFAL_NUHA.pdf" 
              download=""
              color="primary">
              Download CV
              <v-icon right>mdi-download</v-icon>
            </v-btn>
            <p class="body-1 font-weight-bold mt-3 mb-0">Kontak Kami Di Sini</p>
            <div class="my-3">
              <div class="body-2 line-text-second text-first">
                Jl. Ahmad Wahid 172B Kalangan, Baturetno, Banguntapan, <br />
                Bantul, Yogyakarta, Indonesia
              </div>
              <div class="body-2 line-text-second text-first">
                Telephone: +62 895 3925 85163
              </div>
              <div class="body-2 line-text-second text-first">
                Email : alfian.nuha@gmail.com
              </div>
            </div>
            <p class="body-1 font-weight-bold mb-5">Sosial Media</p>
            <div>
              <v-btn
                v-for="(item, index) in social_media"
                :key="index"
                rounded
                class="
                  text-capitalize
                  white--text
                  body-2
                  font-weight-bold
                  mr-3
                  mb-3
                "
                icon
                elevation="0"
                :href="item.link"
                target="_blank"
              >
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-img
                      v-on="on"
                      v-bind="attrs"
                      width="40"
                      height="40"
                      contain
                      alt="sodapos"
                      :src="item.icon"
                    >
                    </v-img>
                  </template>
                  <span>{{ item.title }}</span>
                </v-tooltip>
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <!-- <v-row
          class="px-15 mt-7 text-justify d-flex"
          style="font-size: 20px"
          align="center"
          justify="center"
        >
          <v-col cols="12" md="6">
            <p>
              Hallo, nama saya Alfian An - Naufal Nuha dan saya seorang Web
              Development. Saya memiliki kemampuan untuk membuat sebuah Website
              atau Aplikasi Web.
            </p>
            <p>
              Saya lahir di Semarang pada 12 Mei 2000 dan sekarang saya tinggal
              di Daerah Istimewa Yogyakarta. Saya pertama kali mendalami coding
              adalah setelah dari Pondok Pesantren dengan masuk ke sebuah Kursus
              Web Pemograman yaitu
              <a href="https://alfabankjogja.com/">Alfabank Yogyakarta</a>
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <p>
              Saya saat ini sedang menempuh kuliah pada Jurusan Teknik
              Informatika di Universitas Mercubuana Yogyakarta Kampus 2.
              Sekarang menempuh pada semester ke 4 dan sambil bekerja.
            </p>
            <p>
              Saat ini saya bekerja di PT . Era Solusi Data sebagai Front End
              Development. Sebagai Front End pada produk
              <a href="https://sodapos.com">Aplikasi Kasir SODA POS</a>. Dan ada
              beberapa project yang pernah saya buat bisa dilihat
              <nuxt-link to="/#project">disini</nuxt-link>
            </p>
          </v-col>
        </v-row> -->
        <v-divider></v-divider>
        <!-- <v-row justify="center" class="pt-4 px-16">
          <v-col cols="12" sm="8">
            <p class="body-1 font-weight-bold mt-3 mb-0">Kontak Kami Di Sini</p>
            <div class="my-5">
              <div class="body-2 line-text-second text-first">
                Jl. Ahmad Wahid 172B Kalangan, Baturetno, Banguntapan, <br />
                Bantul, Yogyakarta, Indonesia
              </div>
              <div class="body-2 line-text-second text-first">
                Telephone: +62 895 3925 85163
              </div>
              <div class="body-2 line-text-second text-first">
                Email : alfian.nuha@gmail.com
              </div>
            </div>
          </v-col>
          <v-col
            cols="12"
            sm="4"
            :class="
              $vuetify.breakpoint.name === 'xs'
                ? 'justify-center align-center text-center'
                : ''
            "
          >
            <p class="body-1 font-weight-bold mb-5">Sosial Media</p>
            <div>
              <v-btn
                v-for="(item, index) in social_media"
                :key="index"
                rounded
                class="
                  text-capitalize
                  white--text
                  body-2
                  font-weight-bold
                  mr-3
                  mb-3
                "
                icon
                elevation="0"
                :href="item.link"
                target="_blank"
              >
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-img
                      v-on="on"
                      v-bind="attrs"
                      width="40"
                      height="40"
                      contain
                      alt="sodapos"
                      :src="item.icon"
                    >
                    </v-img>
                  </template>
                  <span>{{ item.title }}</span>
                </v-tooltip>
              </v-btn>
            </div>
          </v-col>
        </v-row> -->
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      social_media: [
        {
          title: "Email",
          link: `https://mail.google.com/mail/?view=cm&fs=1&to=alfian.nuha@gmail.com&su=[PROJECT] Request Project&body=Isi keterangan permintaan Anda dengan jelas dan sertakan nomor telpon atau nomor Whatsapp yang dapat kami hubungi&bcc=alfian.nuha@gmail.com`,
          icon: require("@/assets/sosmed/gmail_.png"),
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
        {
          title: "GitHub",
          link: `https://github.com/alfiannuha`,
          icon: require("@/assets/sosmed/github.png"),
        },
        {
          title: "GitLab",
          link: `https://gitlab.com/alfian.nuha`,
          icon: require("@/assets/sosmed/gitlab.png"),
        },
      ],
      // SEO
      content: {
        url: "about",
        title: "Tentang",
        description: "Alfian An - Naufal Nuha",
        image: require("@/assets/logo/logo.png"),
      },
    };
  },
  methods: {
  }
};
</script>

<style>
</style>