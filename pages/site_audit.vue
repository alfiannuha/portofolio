<template>
  <div class="my-0 pa-5 line-text-second"
    style="">
      <!-- background: #654ea3;
      background: -webkit-linear-gradient(to right, #eaafc8, #654ea3);
      background: linear-gradient(to right, #eaafc8, #654ea3); -->
    <section :class="$vuetify.breakpoint.name === 'xl' ? 'container' : ''">
      <v-container
        style = "text-align: justify;"
        :class="$vuetify.breakpoint.mdAndDown ? 'py-6' : 'py-12 my-12'"
      >
      <h1 :class="$vuetify.breakpoint.name === 'lg' ? 'mb-7 umby' : 'mb-7 mt-14 umby-mobile'">
        Pengertian dan Manfaat Site Audit
      </h1>

      <div style="font-size: 18px !important;text-indent: 0.5in;">
        <p class="font-weight-bold">
          <v-icon class="color-first" left>mdi-decagram</v-icon>
          Pengertian Site Audit
        </p>
        <p>
          Site Audit atau Audit situs adalah proses untuk mengevaluasi sebuah website terhadap keramahan mesin pencari dari berbagai area. Juga dapat di anggap sebagai evaluasi dari kinerja sebuat situs atau website secara keseluruhan.
        </p>
        <p>
          Audit Situs yang tepat dapat memberi tahukan kepada kita apa yang berfungsi di situs WEB kita pada saat ini dan apa yang kurang, serta kita dapat meningkatkan situs kita untuk mendapatkan peringkat pada pencarian Google.
        </p>
        <p>
          Mencapai semua hal itu memerlukan pengauditan situs dengan enam elemen yang berbeda : 
          <br>
          <br>
          <ol type="1">
            <li>
              <span class="font-weight-bold"> Audit Kesehatan Situs : </span>
              <p>
                Jenis audit situs web ini menilai arsitektur dan kegunaaan situs web kita.
              </p>
            </li>
            <li>
              <span class="font-weight-bold"> Audit Keamanan Situs: </span>
              <p>
                Mengidentifikasi kerentanan situs kita terhadap pelanggaran keamanan.
              </p>
            </li>
            <li>
              <span class="font-weight-bold"> Audit Pengoptimalan Tingkat Konversi Situs: </span>
              <p>
                Membantu bisnis memahami bagaimana pengunjung berpindah melalui situs web kita, tindakan apa yang mereka ambil dan apa yang menghentikan pengguna dari menyelesaikan tujuan akhir.
              </p>
            </li>
            <li>
              <span class="font-weight-bold"> Audit Penalti dan Pemulihan Google : </span>
              <p>
                Identifikasi penalti, yang merupakan masalah manual atau algoritmik dan dinilai dengan proses untuk memberikan solusi bagi pemulihan situs.
              </p>
            </li>
            <li>
              <span class="font-weight-bold"> Audit Situs Web Pesaing : </span>
              <p>
                Mengetahui apa yang dilakukan pesaing kita adalah salah satu cara terpenting untuk tetap menjadi yang nomor satu dalam industri kita.
              </p>
            </li>
            <li>
              <span class="font-weight-bold"> Audit Konten dan SEO : </span>
              <p>
                Dapat membantu kita memahami bagaimana kinerja konten di dalam situs atau website kita.
              </p>
            </li>
          </ol>
        </p>
      </div>
      <br><br>
      <div style="font-size: 18px !important;text-indent: 0.5in;">
        <p class="font-weight-bold">
          <v-icon class="color-first" left>mdi-decagram</v-icon>
          Manfaat Site Audit
        </p>
        <p>
          Site Audit memiliki beberapa manfaat, yaitu :
        </p>
        <ol type="1">
          <li>
            <span class="font-weight-bold"> Meningkatkan Performa Situs : </span>
            <p>
              Site Audit secara langsung menganalisis kinerja dari website kita serta infrastruktur website kita.
            </p>
          </li>
          <li>
            <span class="font-weight-bold"> Kualitas SEO Situs Meningkat : </span>
            <p>
              Proses site audit dapat menidentifikasi isu SEO dalam website secara efektif tanpa melewatkan satu aspek yang bermasalah dalam website kita. Proses audit site juga memberikan solusi atas semua masalah SEO yang terdapat pada Website kita.
            </p>
          </li>
          <li>
            <span class="font-weight-bold"> Memperbaiki Kualitas Rating Situs : </span>
            <p>
              Meningkatkan performa website kita untuk menjadikan audiens mendapatkan pengalaman yang baik di dalam situs website kita.
            </p>
          </li>
        </ol>
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