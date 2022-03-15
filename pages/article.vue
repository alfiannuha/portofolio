<template>
  <div class="my-0 pa-5 line-text-second">
    <section :class="$vuetify.breakpoint.name === 'xl' ? 'container' : ''">
      <v-container
        style = "text-align: justify; text-indent: 0.5in;"
        :class="$vuetify.breakpoint.mdAndDown ? 'py-6' : 'py-12 my-12'"
      >
      <h1 :class="$vuetify.breakpoint.name === 'lg' ? 'mb-7 umby' : 'mb-7 mt-14 umby-mobile'">Article 1</h1>

      <div style="font-size: 18px !important;text-indent: 0.5in;">
        <p>
          Pada semester 1 saya belajar tentang Aljabar dan Jaringan komputer, di semester ini saya mulai memahami tentang jaringan komputer walaupun belum terlalu paham sekali dan setidak nya mengerti walaupun hanya sedikit. Pada semester 2 saya mempelajari Algoritma Pemrograman, Komputasi Numerik, Arsitektur dan Organisasi Komputer, Struktur Data, Teknologi Open Source di semester ini banyak hal baru yang baru saya ketahui terkhusus dari mata kuliah komputasi numerik. Pada semester 3 saya mempelajari Basis Data, Data Warehouse, Manajemen Proyek IT, Object Oriented Programming. Di semester 3 ini awal mula saya mempelajari bahasa pemrograman JAVA pada mata kuliah Object Oriented Programming. 
        </p>
        <p>
          Pada semester 4 saya mempelajari Kemanan Jaringan, Technopreneurship. Dari sinilah Website pribadi saya mulai buat pada mata kuliah Technopreneurship, karena sedari dulu ada keiinginan untuk membuat website seperti portofolio ini tetapi belum kesampaian dan akhirnya saya memutuskan untuk membuatnya saat mata kuliah Technopreneurship ini.
        </p>
        <p>
          Saat kuliah E-learning menurut saya ada bagusnya dan ada pula kekurangannya. Bagusnya adalah bagi yang sudah bekerja adalah lebih bisa memanajemen waktu antara kerja dan tugas kuliah, lebih banyak waktu luang, lebih bisa melakukan explore terhadap hal-hal baru yang diinginkan, module pembelajaran bisa terdokumentasi. Kekurangannya adalah kurangnya penjelasan langsung dari dosen, kurangnya hal mendasar dari dosen kepada mahasiswa seperti pembagian ilmu yang dimilki dosen kepada mahasiswanya.
        </p>
      </div>

      <h1 :class="$vuetify.breakpoint.name === 'lg' ? 'mb-7 umby' : 'mb-7 mt-14 umby-mobile'">Article 2</h1>

      <div style="font-size: 18px !important;text-indent: 0.5in;">
        <p>
          Development website ini saya kerjakan sendiri dalam waktu 2 hari dengan menggunakan Framework Nuxt JS dan Vuetify. Website ini masih saya kembangkan dalam segi performa, penambahan kontent, UI / UX. Saya membuat website ini adalah pada saat mata kuliah Technopreneurship pada semester 4, karena pada mata kuliah tersebut di berikan tugas untuk membuat website untuk berjualan, maka dari itu saya membuat website ini yang bertujuan untuk mempromosikan diri saya sebagai Programmer dan juga menjual jasa saya sebagai Programmer. Ada beberapa kendala dalam pembuatan website ini yang paling mendasarnya adalah soal design karna saya harus melakukan riset yang cukup lama untuk mendapatkan UI dan UX yang menarik dan dapat membuat orang tertarik dengan website saya dan harapannya dapat menjadi rekomendasi kepada orang untuk menggunakan jasa saya. 
        </p>
        <p></p>
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