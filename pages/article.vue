<template>
  <div class="my-0 pa-5 line-text-second"
    style="">
      <!-- background: #654ea3;
      background: -webkit-linear-gradient(to right, #eaafc8, #654ea3);
      background: linear-gradient(to right, #eaafc8, #654ea3); -->
    <section :class="$vuetify.breakpoint.name === 'xl' ? 'container' : ''">
      <v-container
        style = "text-align: justify; text-indent: 0.5in;"
        :class="$vuetify.breakpoint.mdAndDown ? 'py-6' : 'py-12 my-12'"
      >
      <h1 :class="$vuetify.breakpoint.name === 'lg' ? 'mb-7 umby' : 'mb-7 mt-14 umby-mobile'">Mahasiswa UMBY jadi Technopreneur memanfaatkan Web</h1>

      <div style="font-size: 18px !important;">
        <p>
          Mahasiswa UMBY mendapatkan sebuah pembelajaran atau materi tentang bagaimana menjadi Technopreneur. Apa itu Technopreneur ?. Technopreneur adalah sesorang yang memiliki usaha dengan menjadikan teknologi sebagai alat untuknya berjualan atau mengembangkan usahanya. Technopreneur juga sangat menguntungkan bagi mahasiswa yang belum mendapatkan perkerjaan dengan menggunakan teknologi saat ini untuk berjualan hal yang dimilki, bisa berupa barang, jasa atau hal yang dapat di jual. 
        </p>
        <p>
          Mahasiswa UMBY dapat memanfaatkan sebuah teknologi seperti WEB untuk menjadi Technopreneur yang sudah dimulai pada Bulan Okteber tahun 2021. Banyak Mahasiswa UMBY yang sudah memiliki sebuha we untuk berjualan di Internet. Menjadi Technopreneur sangat menguntungkan atau sangat mudah, karena hanya dengan bermodalkan webiste dan produk yang kita jual serta waktu untuk memonitoring website penjualan kita.
        </p>
      </div>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.umby {
  text-align: center;
  font-size: 45px !important;
  font-weight: 500;
  font-family: "Kaushan Script", cursive !important;
}

.umby-mobile {
  text-align: center;
  font-size: 25px !important;
  font-weight: 500;
  font-family: "Kaushan Script", cursive !important;
}
</style>