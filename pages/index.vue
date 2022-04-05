<template>
  <div class="mb-12">
    <v-dialog v-model="dialog.request" width="500" persistent>
      <v-card class="rounded-lg box-shadow">
        <v-card-title class="body-1">
          Silahkan request dengan media sosial di bawah ini
          <v-spacer></v-spacer>
          <v-icon color="red" @click="dialog.request = false"
            >mdi-close-circle</v-icon
          >
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-row no-gutters class="mt-7">
            <v-col
              cols="6"
              md="3"
              v-for="(l, index) in social_media"
              :key="index"
            >
              <div class="text-center" @click="goTo(l.link)">
                <img
                  :alt="l.title"
                  class="cursor-pointer"
                  width="50"
                  height="45"
                  :src="l.icon"
                />
              </div>
            </v-col>
          </v-row>
          <div
            class="mt-5 pa-2 white--text rounded-lg primary-color"
            style="font-size: 16px">
            Tulis dengan jelas permintaan Anda, selain whatsapp dan telegram, sertakan nomor Anda yang bisa kami hubungi
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>


    <v-dialog v-model="dialog.previewImages" width="80%">
      <v-img
        :src="imagePreview">
      </v-img>
    </v-dialog>

    <v-dialog v-model="dialog.details" width="80%" scrollable persistent>
      <v-card class="rounded-lg box-shadow">
        <v-card-title class="body-1">
          {{ detail.title }}
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-on="on"
                v-bind="attrs"
                small
                class="ml-3"
                color="primary"
                icon
                target="_blank"
                :href="detail.website"
              >
                <v-icon>mdi-link</v-icon>
              </v-btn>
            </template>
            <span>Preview in new Window</span>
          </v-tooltip>
          <v-spacer></v-spacer>
          <v-icon color="red" @click="dialog.details = false">mdi-close-circle</v-icon>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 450px" class="pa-2">
          <div class="d-flex">
            <div
              class="mr-5"
              style="flex: 1">
              <v-img :src="detail.image" width="650" height="350" class="cursor-pointer" @click="showImage(detail.image)">
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    >
                    </v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </div>
            <div
              style="width: 600px;overflow: auto;height: 430px;"
              class="subtitle-2">
              <p v-if="detail.detail_desc" v-html="detail.detail_desc"></p>
              <p v-else v-html="detail.description"></p>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-snackbar :color="snackbar.color" v-model="snackbar.state">
      {{ snackbar.text }}
    </v-snackbar>

    <section :class="$vuetify.breakpoint.name === 'xl' ? 'container' : ''">
      <v-container class="py-5 my-5">
        <v-row class="pa-3 py-5 my-5" no-gutters>
          <v-col cols="12" md="12" align="center" justify="center">
            <div class="hero-img-wrap mt-10">
              <div class="hero-img-container">
                <v-img
                  width="100%"
                  height="100%"
                  class="hero-img"
                  :src="require('@/assets/image/profile_.png')"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      >
                      </v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                <div id="hero-img-shadow-1" class="hero-img-shadow-wrap">
                  <div class="hero-img-shadow"></div>
                </div>
                <div
                  id="hero-img-shadow-2"
                  class="hero-img-shadow-wrap hero-img-shadow-wrap--intro"
                >
                  <div class="hero-img-shadow"></div>
                </div>
              </div>
            </div>

            
            <h1 class="header-title mt-5 animate__animated animate__backInDown">Alfian An - Naufal Nuha</h1>
            <h2 class="subheader-title mt-7 animate__animated animate__backInDown animate__delay-1s">Front-End Development</h2>
            <div class="mt-7 animate__animated animate__backInDown animate__delay-2s">
              <v-btn
                style="
                  color: #333;
                  border-radius: 15px;
                  background: linear-gradient(to left, #CDE5F1, #FEC386);
                  box-shadow: inset -20px -20px 60px #9a69ca,
                    inset 20px 20px 60px #d08fff;
                "
                @click="dialog.request = true"
              >
                <span style="font-size: 15px"> Start a Project Request </span>
                <v-icon right>mdi-chevron-triple-right</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- PROJECT -->
    <section
      id="project"
      :class="$vuetify.breakpoint.name === 'xl' ? 'container' : ''"
    >
      <v-container
        style=""
        :class="$vuetify.breakpoint.mdAndDown ? 'py-6' : 'py-16 my-16'"
      >
        <v-row class="pa-3 py-12" align="center" no-gutters>
          <v-col cols="12" md="6">
            <p class="text-h3 line-text-first text-capitalize text-left mt-5">
              Projects
            </p>
            <p class="text-h3" style="color: #d31145">
              Beberapa project yang telah saya kerjakan
            </p>
          </v-col>
          <v-col cols="12" md="6" class="pr-0 pl-0 custom__margin">
            <v-img
              alt="project"
              height="auto"
              width="500"
              style="margin: auto; z-index: 1"
              :src="require('@/assets/image/project.png')"
            >
            </v-img>
          </v-col>
        </v-row>

        <!-- <div class="container">
          <div class="card" data-tilt data-tilt-glare data-tilt-max-glare="0.8">
            <div class="content">
              <h2>01</h2>
              <h3>Card One</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, cum.</p>
              <a href="#">Read More</a>
            </div>
          </div>

          <div class="card">
            <div class="content">
              <h2>02</h2>
              <h3>Card Two</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, cum.</p>
              <a href="#">Read More</a>
            </div>
          </div>

          <div class="card">
            <div class="content">
              <h2>03</h2>
              <h3>Card Three</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, cum.</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div> -->

        <v-row no-gutters class="mt-5">
          <v-col
            cols="12"
            md="6"
            class="pa-3"
            v-for="(l,i) in projects"
            :key="i">

            <v-hover v-slot="{ hover }">
              <v-card class="project box-shadow rounded-lg mt-7" width="530">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    @click="preview(l)"
                    class="
                      d-flex
                      cursor-pointer
                      transition-fast-in-fast-out
                      grey
                      lighten-4
                      v-card--reveal
                      text-h2
                      white--text
                    "
                    style="height: 100%; width: 100%; z-index: 2">
                    <h2 
                      style="
                        position: absolute;
                        top: 30px;
                        right: 20px;
                        font-size: 2.3em;
                        color: rgba(0, 0, 0, 0.05);
                        pointer-events: none;"
                      class="grey--text">0{{ i + 1 }}</h2>

                    <div class="black--text text-h5 font-weight-bold">
                      {{ l.title }}
                    </div>
                  </div>
                </v-expand-transition>
                <v-img :src="l.image">
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      >
                      </v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>

        <v-btn @click="$router.push('/projects')" text color="red" class="mt-5 mr-7 text-capitalize text-center">
          Show More Project
        </v-btn>
      </v-container>
    </section>

    <!-- SKILL -->
    <section
      id="skill"
      :class="$vuetify.breakpoint.name === 'xl' ? 'container' : ''"
    >
      <v-container
        style=""
        :class="$vuetify.breakpoint.mdAndDown ? 'py-6' : 'py-16 my-16'"
      >
        <v-row class="pa-3 py-12" align="center" no-gutters>
          <v-col cols="12" md="6">
            <p class="text-h3 line-text-first text-capitalize text-left mt-5">
              Skill
            </p>
            <p class="text-h3" style="color: #d31145">
              Beberapa skill yang saya kuasai saat ini
            </p>
          </v-col>
          <v-col cols="12" md="6" class="pr-0 pl-0 custom__margin">
            <v-img
              alt="Study"
              height="auto"
              width="500"
              style="margin: auto; z-index: 1"
              :src="require('@/assets/image/study.png')"
            >
            </v-img>
          </v-col>
        </v-row>

        <!-- SKILL -->
        <v-row no-gutters class="mt-5">
          <v-col cols="12" md="2" class="pa-10">
            <v-img :src="require('@/assets/logo/html.png')">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div class="text-center mt-3">HTML</div>
          </v-col>
          <v-col cols="12" md="2" class="pa-10">
            <v-img :src="require('@/assets/logo/css.png')">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div class="text-center mt-3">CSS</div>
          </v-col>
          <v-col cols="12" md="2" class="pa-10">
            <v-img :src="require('@/assets/logo/js.png')">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div class="text-center mt-3">Javascript</div>
          </v-col>
          <v-col cols="12" md="2" class="pa-10">
            <v-img :src="require('@/assets/logo/php.png')">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div class="text-center mt-3">PHP</div>
          </v-col>
          <v-col cols="12" md="2" class="pa-10">
            <v-img :src="require('@/assets/logo/mysql.png')">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div class="text-center mt-16 pt-8">MySQL</div>
          </v-col>
          <v-col cols="12" md="2" class="pa-10">
            <v-img :src="require('@/assets/logo/codeigniter.png')">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div class="text-center mt-5">CodeIgniter</div>
          </v-col>
          <v-col cols="12" md="2" class="pa-10">
            <v-img :src="require('@/assets/logo/vue.png')">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div class="text-center mt-3">Vue JS</div>
          </v-col>
          <v-col cols="12" md="2" class="pa-10">
            <v-img :src="require('@/assets/logo/nuxt.png')">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div class="text-center mt-3">Nuxt JS</div>
          </v-col>
          <v-col cols="12" md="2" class="pa-10">
            <v-img width="400" :src="require('@/assets/logo/bootstrap.png')">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div class="text-center mt-16">Bootstrap</div>
          </v-col>
          <v-col cols="12" md="2" class="pa-10">
            <v-img :src="require('@/assets/logo/vuetify.png')">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div class="text-center mt-5">Vuetify</div>
          </v-col>
          <v-col cols="12" md="2" class="pa-10">
            <v-img :src="require('@/assets/logo/next.png')">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div class="text-center mt-16 pt-6">
              <v-badge content="Ongoing" color="green"> Next JS </v-badge>
            </div>
          </v-col>
          <v-col cols="12" md="2" class="pa-10">
            <v-img :src="require('@/assets/logo/laravel.png')">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div class="text-center mt-10">
              <v-badge content="Ongoing" color="green"> Laravel </v-badge>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CONTACT -->
    <section id="contact">
      <v-container style="min-height: 90vh">
        <v-row class="my-16" align="center" justify="center">
          <v-col cols="12" md="5" class="mt-16">
            <p class="text-h4 text--first mt-16 mb-5">Kontak Kami</p>
            <div class="my-16">
              <div class="title text--secondary line-text-second">
                Alfian An - Naufal Nuha
              </div>
              <div
                class="
                  body-1
                  font-weight-light
                  subheader
                  text--secondary
                  line-text-second
                "
              >
                Jl. Ahmad Wahid 172B Kalangan, Baturetno, Banguntapan, <br />
                Bantul, Yogyakarta, Indonesia
              </div>
              <div
                class="
                  body-1
                  font-weight-light
                  subheader
                  text--secondary
                  line-text-second
                "
              >
                Telephone: +62 895 3925 85163
                <input type="hidden" id="telephone" ref="link-referal" :value="`0895392685163`">
                <v-btn @click="copyText()" color="#A6DAF5" text x-small>
                  <v-icon size="15">mdi-content-copy</v-icon>
                </v-btn>
              </div>
              <div
                class="
                  body-1
                  font-weight-light
                  subheader
                  text--secondary
                  line-text-second
                "
              >
                Email : alfian.nuha@gmail.com
              </div>
            </div>
            <img
              alt="ContactUs"
              :width="$vuetify.breakpoint.name !== 'xs' ? '370' : '90%'"
              :src="require('@/assets/image/contactus.png')"
            />
          </v-col>
          <v-col cols="12" md="7" class="mt-16">
            <ValidationObserver ref="observer">
              <v-form class="mt-16" name="submit-to-google-sheet">
                <ValidationProvider
                  name="Nama Lengkap"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-text-field
                    color="#E69F8C"
                    label="Nama Lengkap"
                    id="name"
                    name="name"
                    v-model="form.name"
                    :error-messages="errors"
                    required
                  >
                  </v-text-field>
                </ValidationProvider>
                <ValidationProvider
                  name="No Telephone"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-text-field
                    color="#E69F8C"
                    label="No Telephone"
                    id="telephone"
                    name="telephone"
                    type="number"
                    v-model="form.phone"
                    :error-messages="errors"
                    required
                  >
                  </v-text-field>
                </ValidationProvider>
                <ValidationProvider
                  name="Email"
                  rules="required|email"
                  v-slot="{ errors }"
                >
                  <v-text-field
                    color="#E69F8C"
                    label="Email"
                    id="email"
                    name="email"
                    v-model="form.email"
                    :error-messages="errors"
                    required
                  >
                  </v-text-field>
                </ValidationProvider>
                <ValidationProvider
                  name="Isi Pesan"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-textarea
                    color="#E69F8C"
                    rows="5"
                    id="message"
                    name="message"
                    v-model="form.content"
                    :error-messages="errors"
                    required
                  >
                    <template v-slot:label>
                      <div>Isi Pesan</div>
                    </template>
                  </v-textarea>
                </ValidationProvider>
              </v-form>
            </ValidationObserver>
            <div>
            </div>
            <div class="text-right">
              <v-btn
                elevation="0"
                class="body-2 text-capitalize white--text mt-5 primary-color"
                large
                :loading="process.run"
                :disabled="process.run"
                @click="sending"
              >
                Kirim Pesan
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import { createSEOMeta } from "@/utils/seo";
import VanillaTilt from 'vanilla-tilt';
export default {
  data() {
    return {
      dialog: {
        request: false,
        website: false,
        description: false,
        details: false,
        previewImages: false,
      },
      imagePreview: "",
      snackbar: {
        state: false,
        color: "",
        text: "",
      },
      process: {
        run: false
      },
      form: {
        name: "",
        phone: "",
        email: "",
        content: "",
      },
      show: false,
      detail: {},
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
      ],
      projects: [
        {
          title: "Landing Page SODA POS",
          image: require("@/assets/image/sodapos.png"),
          website: "https://sodapos.com",
          description: `Landing Page SODA POS ini adalah website produk kantor tentang penjualan Aplikasi Kasir. Saya disini melanjutkan beberapa kekurangan pada website ini dan melakukan maintenance. Landing Page ini di buat dengan Framework Nuxt JS dan Vuetify, serta beberapa plugins yang tersedia.`,
          detail_desc: `Landing Page SODA POS ini adalah website produk kantor tentang penjualan Aplikasi Kasir. Saya disini melanjutkan beberapa kekurangan pada website ini dan melakukan maintenance. Landing Page ini di buat dengan Framework Nuxt JS dan Vuetify, serta beberapa plugins yang tersedia.
          <span>Landing Page ini memiliki fitur sebagai berikut : </span>
          <br/>
          <br/>
          <ol type="1">
            <li>API (berbasis PHP)</li>
            <li>Login</li>
            <li>Registrasi</li>
            <li>Menu Dashboard (Memiliki  fitur auto login ke halaman Admin / Kasir Toko)</li>
            <li>Menu Data Merchan</li>
            <li>Menu Tagihan</li>
            <li>Menu Profile atau Pengaturan</li>
          </ol>`, 
          view: true,
        },
        {
          title: "Landing Page Affiliate SODA POS",
          image: require("@/assets/image/affiliate.png"),
          website: "https://affiliate.sodapos.com",
          description: `Landing Page Affiliate SODA POS ini adalah website tentang pengajakan kepada semua orang untuk menjadi Affiliate di SODA POS. Disini saya mendevelop atau membuat dari awal di bantu orang beberapa temna kantor saya. Landing Page ini dibuat menggunakan Nuxt JS dan vuetify.
          `,
          detail_desc: `Landing Page Affiliate SODA POS ini adalah website tentang pengajakan kepada semua orang untuk menjadi Affiliate di SODA POS. Disini saya mendevelop atau membuat dari awal di bantu orang beberapa temna kantor saya. Landing Page ini dibuat menggunakan Nuxt JS dan vuetify. 
          
          <span>Landing Page ini memiliki fitur sebagai berikut : </span>
          <br/>
          <br/>
          <ol type="1">
            <li>API (berbasis PHP)</li>
            <li>Login By email atau Sigle Sign On (Google Sign In)</li>
            <li>Registrasi By email atau Sigle Sign On (Google Sign In)</li>
            <li>Menu Dashboard</li>
            <li>Menu Komisi</li>
            <li>Menu Laporan</li>
            <li>Menu Profile atau Pengaturan</li>
          </ol>`,
          view: true,
        },
        {
          title: "Admin User SODA POS",
          image: require("@/assets/image/admin.png"),
          website: "https://admin.sodapos.com",
          description: `Halaman Admin User SODA POS adalah halaman untuk mengatur toko Anda dari membuat produk, melihat stok, melihat grafik penjualan, melihat laporan penjualan, laporan shift untuk tiap kasir dan juga dapat melakukan Export Excel untuk setiap data. Di Halaman Admin ini juga dapat memberikan sebuah privilage kepada setiap karyawan. Halaman Admin ini menggunakan Framework Vue JS dan Vuetify.
          `,
          detail_desc: `Halaman Admin User SODA POS adalah halaman untuk mengatur toko Anda dari membuat produk, melihat stok, melihat grafik penjualan, melihat laporan penjualan, laporan shift untuk tiap kasir dan juga dapat melakukan Export Excel untuk setiap data. Di Halaman Admin ini juga dapat memberikan sebuah privilage kepada setiap karyawan. Halaman Admin ini menggunakan Framework Vue JS dan Vuetify. 
          <span>Halaman Admin ini memiliki fitur sebagai berikut : </span>
          <br/>
          <br/>
          <ol type="1">
            <li>API (berbasis PHP, CodeIgniter 3)</li>
            <li>Login</li>
            <li>Reset Password</li>
            <li>Menu Berita SODA POS</li>
            <li>Menu Dashboard</li>
            <li>Menu Produk (Pengaturan Produk, Bahan, Tipe Penjualan, Kategori Produk, dan ada juga untuk pengaturan Resep)</li>
            <li>Menu Inventory / Stok (Melihat Stok Produk, Melihat Kartu Stok, Melakukan Penyesuaian Stok, Transfer Stok kepada Toko Cabang, Melakukan Stok Opname)</li>
            <li>Menu Manajemen Meja (Memanajemen Meja dan juga dapat melakukan pengaturan untuk Self Order)</li>
            <li>Menu Monitoring Order (Memonitoring Pesanan)</li>
            <li>Menu Supplier</li>
            <li>Menu Pembelian (Pembelian Produk kepada Supplier)</li>
            <li>Menu Pelanggan</li>
            <li>Menu User Printer</li>
            <li>Menu Pegawai (Dapat mengatur privilage menu untuk karyawan dan hanya untuk Admin)</li>
            <li>Menu Laporan Piutang (Berisi data pelanggan yang melakukan pembayaran dengan Hutang)</li>
            <li>Menu Laporan Penjualan (Terdapat lebih dari 5 Laporan Penjualan)</li>
            <li>Menu Shift Kasir (Mengetahui Hasil Penjualan tiap Shift)</li>
            <li>Menu Pengaturan (Mengatur Toko dan Mengatur Bank untuk pembayaran Non-Tunai)</li>
          </ol>
          <p>
          Pada Menu Produk dapat melakukan Import Produk dan disediakan template dari sodapos, sodapos juga menyediakan import data produk dari POS lain antara lain adalah MOKA POS, OLSERA POS, NUTA POS, QASIR POS, PAWOON POS, MAJOO POS
          <p/>
          <p>
          Pada Menu Manajemen Meja sodapos menyediakan Group untuk meja tersebut seperti Outdoor dan Indoor. Da juga Menajemen Meja untuk mengatur meja per group dan ketika membuat meja sodapos ototmatis menyediakan scan QR yang dapat di print dan dapat digunakan untuk Self Order.
          <p/>`,
          view: true,
        },
        {
          title: "Kasir SODA POS",
          image: require("@/assets/image/kasir-sodapos.png"),
          website: "https://kasir.sodapos.com",
          description: `Halaman Kasir SODA POS adalah halaman untuk melakukan penjualan. Halaman Kasir ini menggunakan Framework Vue JS dan Vuetify.`,
          detail_desc: `Halaman Kasir SODA POS adalah halaman untuk melakukan penjualan. Halaman Kasir ini menggunakan Framework Vue JS dan Vuetify. 
          <br/>
          <div>Link Apliasi Kasir</div>
          <a href="https://play.google.com/store/apps/details?id=com.sodapos" target"_blank">Aplikasi Kasir SODA POS (Hanya untuk Tablet)</a>
          <br/>
          <br/>
          <span>Halaman Admin ini memiliki fitur sebagai berikut : </span>
          <br/>
          <ol type="1">
            <li>API (berbasis PHP, CodeIgniter 3)</li>
            <li>Login</li>
            <li>Reset Password</li>
            <li>Menu Beranda</li>
            <li>Menu Kasir Kas</li>
            <li>Menu Close Register</li>
            <li>Menu Test Printer (Untuk melakukan test pada printer dan terdapat tata caranya, dapat menggunakan printer kabel maupun bluetooth)</li>
          </ol>`,
          view: true,
        },
      ],
      skills: [
        {
          title: "PHP",
          image: require("@/assets/logo/php.png"),
        },
        {
          title: "Vue js",
          image: require("@/assets/logo/vue.png"),
        },
        {
          title: "Nuxt js",
          image: require("@/assets/logo/nuxt.png"),
        },
        {
          title: "JS",
          image: require("@/assets/logo/js.png"),
        },
        {
          title: "CodeIgniter",
          image: require("@/assets/logo/codeigniter.png"),
        },
        {
          title: "HTML",
          image: require("@/assets/logo/html.png"),
        },
        {
          title: "CSS",
          image: require("@/assets/logo/css.png"),
        },
      ],
      // SEO
      content: {
        url: "",
        title: "Alfian An - Naufal Nuha - Beranda",
        description: "Portofolio Alfian An - Naufal Nuha",
        image: require("@/assets/logo/logo.png"),
      },
    };
  },
  head() {
    return {
      title: this.content.title,
      meta: createSEOMeta(this.content),
    };
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
    },
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

    VanillaTilt.init(document.querySelectorAll(".project"), {
      max: 20,
      speed: 400
    });
  },
  methods: {
    copyText(){
      /* Get the text field */
      var copyText = document.getElementById("telephone");

      /* Select the text field */
      copyText.select();
      // copyText.setSelectionRange(0, 99999); /* For mobile devices */

      /* Copy the text inside the text field */
      navigator.clipboard.writeText(copyText.value);
      
      /* Alert the copied text */
      this.snackbar.state = true;
      this.snackbar.color = "#FEC386"
      this.snackbar.text = "Content Berhasil di Copy"
    },

    goTo(link) {
      window.open(
        link,
        "_blank" // <- This is what makes it open in a new window.
      );
    },

    sending() {
      // console.log(this.form);
      // this.$axios.post(`https://formspree.io/f/xwkajkdl`,this.form)
      // .then(response => 
      //   this.snackbar = {
      //     state: true,
      //     color: "green",
      //     text: "Pesan Berhasil Dikirim",
      // })
      // .catch(error => 
      //   this.snackbar = {
      //     state: true,
      //     color: "red",
      //     text: "Pesan Gagal Dikirim",
      // })

      const scriptURL = 'https://script.google.com/macros/s/AKfycbzGrcZlBmRDkIKMEXci0X0S6C1Dz98MKdvxY-5HFctkK_xpdIwe4z7ufzE0Bd_ABNCb/exec'
      const form = document.forms['submit-to-google-sheet']

      var formdata = new FormData(form)
      formdata.append('datetime', new Date().toLocaleString())
      
      fetch(scriptURL, { method: 'POST', body: formdata})
        .then(response => 
        this.snackbar = {
          state: true,
          color: "green",
          text: "Pesan Berhasil Dikirim",
        })
        .catch(error => 
        this.snackbar = {
          state: true,
          color: "red",
          text: "Pesan Gagal Dikirim",
        })
    },

    showDetails(item) {
      this.dialog.details = true
      this.detail = item;
    },

    showImage(images){
      this.dialog.previewImages = true;
      this.imagePreview = images
    },

    preview(data) {
      this.dialog.details = true;
      this.detail = data;
    },
  },
};
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 50%;
}

.header-title {
  font-family: "Kaushan Script", cursive !important;
  font-weight: 500;
  /* font-size: 23px; */
  color: #E69F8C;
}
.subheader-title {
  font-family: "Kaushan Script", cursive !important;
  font-weight: 500;
  font-size: 17px;
  color: #E69F8C;
}

.hero-img-wrap {
  will-change: opacity;
  animation: heroImgWrap 0.8s ease;
  animation-iteration-count: 1;
  animation-fill-mode: backwards;
  animation-delay: 0.8s;
}

.hero-img-wrap {
  width: 25vw;
  height: 25vw;
  max-height: 40vh;
  max-width: 40vh;
  min-height: 250px;
  min-width: 250px;
}

.hero-img-wrap {
  position: relative;
  z-index: 2;
}

/* IMG CONTAINTER */
.hero-img-container {
  position: relative;
  z-index: 3;
  width: 80%;
  height: 80%;
  padding: 12px;
  border: 1px solid hsla(0, 0%, 100%, 0.3);
  border-radius: 50%;
  background-color: hsla(0, 0%, 84%, 0.5);
  -o-object-fit: cover;
  object-fit: cover;
}

/* IMG */
.hero-img {
  will-change: transform;
  animation: heroImgScale 0.8s ease;
  animation-iteration-count: 1;
  animation-fill-mode: backwards;
  animation-delay: 0.8s;
}

.hero-img {
  display: block;
  width: 100%;
  height: 100%;
  max-width: none;
  border-radius: 50%;
  z-index: 7;
}

/* HERO 1 */

#hero-img-shadow-1 {
  will-change: opacity;
  animation: heroImgShadow1 0.8s ease;
  animation-duration: 0.8s;
  animation-timing-function: ease;
  animation-delay: 1.5s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: backwards;
  animation-play-state: running;
  animation-name: heroImgShadow1;
  animation-iteration-count: 1;
  animation-fill-mode: backwards;
  animation-delay: 1.5s;
}
.hero-img-shadow-wrap {
  position: absolute;
  left: -20%;
  top: -20%;
  right: 0;
  bottom: 0;
  width: 140%;
  height: 140%;
  padding: 20%;
  border-radius: 50%;
  -webkit-filter: blur(20px);
  filter: blur(20px);
}
.hero-img-shadow {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-image: radial-gradient(
      circle farthest-side at 100% 100%,
      #9873ff,
      rgba(152, 115, 255, 0)
    ),
    radial-gradient(
      circle farthest-side at 100% 0,
      #0ba5f7,
      rgba(85, 196, 255, 0)
    ),
    radial-gradient(circle farthest-side at 0 0, #ff763c, rgba(255, 176, 60, 0)),
    radial-gradient(
      circle farthest-side at 0 100%,
      #ff5aaa,
      rgba(255, 90, 170, 0)
    );
}

/* HERO 2 */

#hero-img-shadow-2 {
  will-change: opacity, transform;
  animation: heroImgShadow2 1.2s cubic-bezier(0.65, 0, 0.35, 1);
  animation-duration: 1.2s;
  animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
  animation-delay: 1.5s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;
  animation-play-state: running;
  animation-name: heroImgShadow2;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-delay: 1.5s;
}
.hero-img-shadow-wrap.hero-img-shadow-wrap--intro {
  z-index: 1;
}

.hero-img-shadow-wrap {
  position: absolute;
  left: -20%;
  top: -20%;
  right: 0;
  bottom: 0;
  width: 140%;
  height: 140%;
  padding: 20%;
  border-radius: 50%;
  -webkit-filter: blur(20px);
  filter: blur(20px);
}

/* CARD */
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  flex-wrap: wrap;
  z-index: 1;
}


</style>