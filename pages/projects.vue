<template>
  <div>
     <v-dialog v-model="dialog.previewImages" width="80%">
      <v-img
        :src="imagePreview">
      </v-img>
    </v-dialog>

    <v-dialog v-model="dialog.details" width="85%" scrollable persistent>
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
            <span>Open Website</span>
          </v-tooltip>
          <v-spacer></v-spacer>
          <v-icon color="red" @click="dialog.details = false">mdi-close-circle</v-icon>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 450px" class="pa-2">
          <div class="d-flex">
            <div
              class="mr-5 pt-2"
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
              style="width: 600px;overflow: auto;height: 430px;line-height: 1.5;text-align: justify;padding:  10px 10px 0 0"
              class="subtitle-2">
              <p v-if="detail.detail_desc" v-html="detail.detail_desc"></p>
              <p v-else v-html="detail.description"></p>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-container
      style=""
      :class="$vuetify.breakpoint.mdAndDown ? 'py-6' : 'py-16 my-16'">

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
            alt="sodapos"
            height="auto"
            width="500"
            style="margin: auto; z-index: 1"
            :src="require('@/assets/image/project.png')"
          >
          </v-img>
        </v-col>
      </v-row>

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
              <v-img :src="l.image" class="rounded-lg">
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
    </v-container>
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
      detail: {},
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
        {
          title: "Admin Internal SODA POS",
          image: require("@/assets/image/internal.png"),
          website: "https://internal.sodapos.com",
          description: `Halaman Admin Internal SODA POS adalah Halaman untuk kepnetingan internal atau untuk CS SODA POS. Halaman ini menggunakan CodeIgniter 3, JQuery dan Bootstrap`,
          detail_desc: ``,
          view: false,
        },
        {
          title: "Website Pernikahan",
          image: require("@/assets/image/weddingku.png"),
          website: "https://weddingku.vercel.app/",
          description: `Website ini saya buat sebenarnya untuk kepentingan pribadi saya agar tidak memakan biaya untuk pembuatan jasa Undangan Pernikahan. Website ini saya buat dengan Framework Nuxt Js dan Vuetify. Webiste ini saya kerjaan dalam kurun waktu satu hari. Karna data di dalamnya masih data kosong atau dummy, maka dari itu lebih cepat pengerjaan nya.`,
          view: false,
        },
        {
          title: "Halaman Admin Garonk Signal",
          image: require("@/assets/image/garonk_signal.png"),
          website: "https://garonk.com",
          description: `Halaman Admin Garonk Signal ini digunakan untuk membuat sebuah layanan signal, list update waktu signal, dll. Halaman Admin ini dibuat menggunakan CodeIgniter 3, JQuery dan Bootstrap.`,
          detail_desc: `
          Halaman Admin Garonk Signal ini digunakan untuk membuat sebuah layanan signal, list update waktu signal, dll. Halaman Admin ini dibuat menggunakan CodeIgniter 3, JQuery dan Bootstrap.
          <span>Halaman Admin ini memiliki fitur sebagai berikut : </span>
          <br/>
          <br/>
          <ol type="1">
            <li>API (berbasis PHP)</li>
            <li>ADMIN (berbasis CodeIgniter 3)</li>
            <li>Login</li>
            <li>Menu Dashboard</li>
            <li>Menu Data User</li>
            <li>Menu Layanan Signal</li>
            <li>Menu List Waktu Update Signal</li>
            <li>Menu Broadcast (digunakan untuk mengirimkan pesan pengumuman kepada pengguna)</li>
            <li>Menu Signal Order (berisi pesanan pembelian signal)</li>
            <li>Menu Social Media (untuk mengatur Social media yang tampil pada Aplikasi Mobile)</li>
            <li>Menu Pengaturan (Pengaturan Terhadap Aplikasi Mobile : Logo, Nama Apliaksi, Close Order)</li>
          </ol>`,
          view: true,
        },
        {
          title: "Admin CMS KIMI",
          image: require("@/assets/image/kimi.png"),
          website: "http://cms.kimi.id",
          description: `Halaman Admin CMS KIMI adalah sebuah aplikasi untuk membuat soal, mengatur pengguna. Ada berbagai jenis soal yang bisa dibuat dari Halaman Admin ini, seperti Listening, Reading, dll. Halaman Admin ini menggunakan framework Vue JS dan vuetify.`,
          detail_desc: `Halaman Admin CMS KIMI adalah sebuah aplikasi untuk membuat soal, mengatur pengguna. Ada berbagai jenis soal yang bisa dibuat dari Halaman Admin ini, seperti Listening, Reading, dll. Halaman Admin ini menggunakan framework Vue JS dan vuetify.
          <br/>
          <div>Link Apliasi Mobile</div>
          <a href="https://play.google.com/store/apps/details?id=com.yureka.technology.ytc">Aplikasi Mobile Kimi</a>
          <br/>
          <br/>
          Halaman Admin ini memiliki fitur sebagai berikut : 
          <br/>
          <ol type="1">
            <li>API (berbasis Go, Node JS)</li>
            <li>ADMIN (berbasis Vue JS)</li>
            <li>Login</li>
            <li>Menu Dashboard</li>
            <li>Menu Course (CRUD Course)</li>
            <li>Menu Topic (CRUD Topic Course)</li>
            <li>Menu Activity (CRUD Activity)</li>
            <li>Menu Question (CRUD Question : Kosakata (Pilihan Gambar), Kosakata (Matching Gambar), Mendengarkan AudioMenyusun Kata/ Menerjemahkan, Merekam Suara, Merekam Suara (Conversation), Membaca (Fill in the blank), Membaca (Paragraph))</li>
            <li>Menu Data User</li>
            <li>Menu Pengaturan</li>
          </ol>`,
          view: true,
        },
        {
          title: "Admin CMS EPOT",
          image: require("@/assets/image/cms-epot.png"),
          website: "https://cms.epot.co.id/",
          description: `Halaman Admin CMS EPOT adalah sebuah aplikasi untuk membuat soal, mengatur pengguna. Ada berbagai jenis soal yang bisa dibuat dari Halaman Admin ini, seperti Listening, Reading, Structure, dll. Halaman Admin ini menggunakan framework Vue JS dan vuetify.`,
          detail_desc: `Halaman Admin CMS EPOT adalah sebuah aplikasi untuk membuat soal, mengatur pengguna. Ada berbagai jenis soal yang bisa dibuat dari Halaman Admin ini, seperti Listening, Reading, Structure, dll. Halaman Admin ini menggunakan framework Vue JS dan vuetify. 
          Di project ini saya melakuka maintenance dan juga ketika ada penambahan fitur baru.

          <span>Halaman Admin ini memiliki fitur sebagai berikut : </span>
          <br/>
          <br/>
          <ol type="1">
            <li>API (berbasis Go, Node JS)</li>
            <li>ADMIN (berbasis Vue JS)</li>
            <li>Login</li>
            <li>Menu Dashboard</li>
            <li>Menu Tes Epot (CRUD Questions)</li>
            <li>Data Detail Test (Berisi Detail para peserta test dan juga bentuk pelanggaran yang dilakukan peserta test)</li>
            <li>Sertifikat</li>
            <li>Sertifikat B2B</li>
            <li>Daftar Kirim Sertifikat</li>
            <li>Cek Lisensi</li>
            <li>Member</li>
            <li>Data Point</li>
            <li>Order Lisensi</li>
            <li>Lembaga (Digunakan untuk mendaftarkan lembaga yang ingin mengikuti test dan dapat melakukan pengaturan pelanggaran saat test seperti: Deteksi Pindah Tab, Deteksi Wajah, Deteksi Percakapan)</li>
          </ol>`,
          view: true,
        },
        {
          title: "EPOT Enduser",
          image: require("@/assets/image/epot-enduser.png"),
          website: "https://epot.yec.co.id/",
          description: `Halaman adalah sebuah aplikasi untuk membuat soal, mengatur pengguna. Ada berbagai jenis soal yang bisa dibuat dari Halaman Admin ini, seperti Listening, Reading, dll. Halaman Admin ini menggunakan framework Vue JS dan vuetify.`,
          detail_desc: `Halaman adalah sebuah aplikasi untuk membuat soal, mengatur pengguna. Ada berbagai jenis soal yang bisa dibuat dari Halaman Admin ini, seperti Listening, Reading, dll. Halaman Admin ini menggunakan framework Vue JS dan vuetify.
          Di project ini saya melakuka maintenance dan juga ketika ada penambahan fitur baru

          <span>Halaman Admin ini memiliki fitur sebagai berikut : </span>
          <br/>
          <br/>
          <ol type="1">
            <li>API (berbasis Go, Node JS)</li>
            <li>ADMIN (berbasis Vue JS)</li>
            <li>Login</li>
            <li>Menu Test Epot</li>
            <li>Menu Sertifikat (Hanya untuk perserta B2C)</li>
            <li>Menu Panduan (Panduan sebelum memulai test)</li>
            <li>Menu Account</li>
          </ol>
          <br/>
          <p>
          Di dalam WEB ini ketika memulai test akan melalui sebuah pengecekan dari mulai pengecekan audio, camera, dan microphone. Dan Saat test pun ada pengecekan, yaitu pengecekan Wajah ketika melebihi 1 wajah maupun wajah tidak terdeteksi oleh kamera, Deteksi Percakapan ketika pada saat test berlangsung perserta terdeteksi bersuara atau melakukan percakapan </p>
          <p>
          Kesulitan yang saya dapat dalam pengerjaan ini adalah ketika melakukan implementasi pada Deteksi Multi Wajah dan Wajah tidak terdeteksi
          </p>`,
          view: true,
        },
        
      ],
      // SEO
      content: {
        url: "projects",
        title: "Project Saya",
        description: "Alfian An - Naufal Nuha",
        image: require("@/assets/logo/logo_2.png"),
      },
    }
  },
  head() {
    return {
      title: this.content.title,
      meta: createSEOMeta(this.content),
    };
  },
  mounted() {
    VanillaTilt.init(document.querySelectorAll(".project"), {
      max: 25,
      speed: 200
    });
  },
  methods: {
    goTo(link) {
      window.open(
        link,
        "_blank" // <- This is what makes it open in a new window.
      );
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
  }
}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 50%;
}
</style>