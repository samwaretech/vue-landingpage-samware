<template>
  <div>
    <navbar></navbar>
    <section
      class="twhite curved"
      style="background: linear-gradient(to bottom, #ed1073 38%, #ee2a47 100%);"
    >
      <div class="container" style="padding:120px 0px">
        <div class="grid-two rsv">
          <div>
            Welcome
            <div style="font-size:38px">
              Your Bussines
              <br />IT solution
            </div>Samware telah membantu berbagai perusahaan
            untuk melakukan optimalisasi proses bisnis dalam
            menjalankan perusahaan.
            <div class="mts">
              <a href="https://api.whatsapp.com/send?phone=6285231888456">
                <button style="border:none">Hubungi kami</button>
              </a>
            </div>
          </div>
          <div class="ms hide">
            <img style="width:100%;height:auto" src="@/assets/img/1/ilustrasi1.png" alt />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container center" style="margin-top:-160px;padding:100px 0px;">
        <div class="card shadows" style="border-radius:10px">
          <div style="font-size:23px;padding:20px 0px;color:#ec0f72">
            <b>Layanan Samware</b>
          </div>
          <div class="grid-three rsv">
            <div>
              <div class="card">
                <div class="mbs ps">
                  <img width="120" src="@/assets/img/2/sectwo-logo-1.png" alt />
                </div>
                <div class="body center" style="font-size:12px">
                  <div class="ps center" style="font-size:14px">
                    <b>Pengembangan Website</b>
                  </div>Di era Industri4.0 ini, sebuah website
                  memiliki fungsi sebagai identitas bagi
                  setiap pelaku usaha. Selain itu, website
                  dapat dioptimalkan sebagai alat bantu
                  pemasaran melalui Search Egine
                  Optimization (SEO).
                </div>
              </div>
            </div>
            <div>
              <div class="card">
                <div class="mbs ps">
                  <img width="120" src="@/assets/img/2/sectwo-logo-2.png" alt />
                </div>
                <div class="body center" style="font-size:12px">
                  <div class="ps center" style="font-size:14px">
                    <b>Enterprise Resource Planning(ERP)</b>
                  </div>Ketika menjalankan kegiatan operasional,
                  setiap entitas atau pelaku usaha pasti
                  membutuhkan sebuah sistem
                  otomatis yang memudahkan mereka
                  untuk mengontrol dan mengevaluasi
                  kegiatan operasional secara real time.
                </div>
              </div>
            </div>
            <div>
              <div class="card">
                <div class="mbs ps">
                  <img width="120" src="@/assets/img/2/sectwo-logo-3.png" alt />
                </div>
                <div class="body center" style="font-size:12px">
                  <div class="ps center" style="font-size:14px">
                    <b>Aplikasi multi platform</b>
                  </div>samware dapat membantu anda untuk
                  mengembangkan aplikasi dengan
                  mobilitas yang tinggi bagi pelanggan
                  kami dengan dukungan penuh dari
                  platform windows, android, dan website
                  secara real-time di manapun.
                </div>
              </div>
            </div>
          </div>
          <router-link to="/faq">
            <button class="tred">Selengkapnya</button>
          </router-link>
        </div>
      </div>
    </section>
    <section id="service" style="background-color:white">
      <div class="container center" style="padding:100px 0px">
        <div class="ps mbs" style="color:#ec0f72">
          <h1>Harga Layanan</h1>
          <span class="tgraym">Era Industri 4.0 sudah datang loh! yakin kamu gak ketinggalan?</span>
        </div>
        <div class="ps">
          <button v-on:click="selectPrice(1)" class="btnSelect">Website</button>
          <button v-on:click="selectPrice(1)">ERP</button>
          <button v-on:click="selectPrice(1)">APK</button>
        </div>
        <priceWeb v-if="price == 1" />
        <priceERP v-else-if="price == 2" />
        <priceAPK v-else-if="price == 3" />
      </div>
    </section>
    <div class="triangle" style="background-color:#ec0f72">
      <div class="container twhite" style="padding:20px 0px">
        <div class="grid-three">
          <div class="ps center">
            <div style="font-size:32px">51+</div>Project done
          </div>
          <div class="ps center">
            <div style="font-size:32px">44+</div>Client
          </div>
          <div class="ps center">
            <div style="font-size:32px">12+</div>Developer
          </div>
        </div>
      </div>
    </div>

    <section>
      <div
        class="container center twhite"
        style="padding:80px 0px;color:#ec0f72 !important;min-height:100vh"
      >
        <div style="margin-bottom:50px">
          <h1>Proses Pengembangan</h1>
          <span class="tgraym">
            Langkah mudah untuk
            Optimalisasi bisnismu
          </span>
        </div>
        <div class="grid-two rsv">
          <div class="ms ps center">
            <img width="120" src="@/assets/img/5/secfive-logo-1.png" alt />
            <div>Analisa Kebutuhan</div>
          </div>
          <div class="ms ps center">
            <img width="120" src="@/assets/img/5/secfive-logo-2.png" alt />
            <div>Perancangan & Pemodelan</div>
          </div>
          <div class="ms ps center">
            <img width="120" src="@/assets/img/5/secfive-logo-3.png" alt />
            <div>Uji coba & Pengembangan</div>
          </div>
          <div class="ms ps center">
            <img width="120" src="@/assets/img/5/secfive-logo-4.png" alt />
            <div>Uji coba & Pengembangan</div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section style="background-color:#ec0f72;">
      <div class="twhite center container" style="padding:80px 0px">
        <h1>Tanya Jawab</h1>
        <div class="card shadows left tgraym">
          <span style="color:#ec0f72">Berapa lama durasi pembuatan aplikasi saya?</span>
          <ul>
            <li>Lama waktu pengerjaan pembuatan aplikasi berbeda-beda, tergantung konsep websitenya. Namun biasanya jika file sudah komplit pengerjaan 4 sampai 8 hari kerja, Biasanya lebih cepat.</li>
          </ul>
        </div>
        <div class="card shadows left tgraym">
          <span
            style="color:#ec0f72"
          >Apakah jasa pembuatan website ini sekali bayar untuk selamanya?</span>
          <ul>
            <li>Ya, jasa pembuatan website Anda hanya perlu membayar sekali untuk selamanya, Anda hanya perlu membayar biaya perpanjang hosting dan domain nya saja pertahun</li>
          </ul>
        </div>
        <div class="card shadows left tgraym">
          <span
            style="color:#ec0f72"
          >Apakah jasa pembuatan website ini sekali bayar untuk selamanya?</span>
          <ul>
            <li>Ya, jasa pembuatan website Anda hanya perlu membayar sekali untuk selamanya, Anda hanya perlu membayar biaya perpanjang hosting dan domain nya saja pertahun</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- <section>
      <div class="container center" style="min-height:100vh;">
        <div class="tred" style="padding:80px 0px">
          <h1>Pilihan Template</h1>
        </div>
        <div class="grid-three rsv">
          <div>
            <div class="card shadows">
              Templateone
            </div>
          </div>
          <div>
            <div class="card shadows">
              Templateone
            </div>
          </div>
          <div>
            <div class="card shadows">
              Templateone
            </div>
          </div>
          <div>
            <div class="card shadows">
              Templateone
            </div>
          </div>
          <div>
            <div class="card shadows">
              Templateone
            </div>
          </div>
          <div>
            <div class="card shadows">
              Templateone
            </div>
          </div>
          
        </div>
      </div>
    </section>-->
    <!-- Supported By -->
    <section style="background-color:white" class="hide">
      <div class="container center" style="padding:80px 0px">
        <div class="ps mbs" style="color:#ec0f72">
          <h1>Supported By</h1>
        </div>
        <div class="grid-three rsv">
          <div>
            <div class="ps">
              <img src="@/assets/img/logo/sambeer.jpg" alt />
            </div>
          </div>
          <div>
            <div class="ps">
              <img style="border-radius:50%" src="@/assets/img/logo/sambooks.jpg" alt />
            </div>
          </div>
          <div>
            <div class="ps">
              <img src="@/assets/img/logo/samboks.jpg" alt />
            </div>
          </div>
        </div>
        <div class="grid-three rsv">
          <div>
            <div class="ps">
              <img src="@/assets/img/logo/sampro.jpg" alt />
            </div>
          </div>
          <div>
            <div class="ps">
              <img src="@/assets/img/logo/samvis.jpg" alt />
            </div>
          </div>
          <div>
            <div class="ps">
              <img style="border-radius:50%" src="@/assets/img/logo/tour.jpg" alt />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section style="min-height:20vh;">
      <div class="container" style="padding:50px 0px">
        <div class="center ps mbs" style="color:#ec0f72">
          <h1>Testimoni</h1>
        </div>
        <vue-glide :perView="1" :autoplay="2000">
          <vue-glide-slide>
            <div class="grid-two rsv">
              <div class="center mts">
                <img style="border-radius:50%" src="@/assets/img/logo/gio.jpg" alt />
              </div>
              <div>
                " Awalnya saya ragu-ragu dengan samware karena start-up yang baru dibangun tentu saja sistem manajemen yang digunakan masih dalam proses pembelajaran. Namun setelah saya mencoba untuk percaya ternyata samware memberikan suatu hal yang diluar ekspetasi saya yaitu hasil yang lebih dari cukup. Fasilitas sistem yang diberikan bisa membuat kita nyaman dan mudah dalam menggunakan. Semoga selalu makmur samware "
                <br />
                <div class="ps">
                  <b>- Sam Igo</b>
                  <div class="f12">GM SAMBEER & OWNER MAKMUR COFFEE</div>
                </div>
              </div>
            </div>
          </vue-glide-slide>
          <vue-glide-slide>
            <div class="grid-two rsv">
              <div class="center">
                <img style="border-radius:50%" src="@/assets/img/logo/ilma.jpg" alt />
              </div>
              <div>
                " Senang sekali akhirnya ada juga penyedia jasa yang bisa memenuhi kebutuhan perusahaan kami di bidang teknologi informasi. Sejauh ini, @sambooks.press masih hanya sebatas custom website saja. Tapi setelah kami lihat-lihat katalognya, sepertinya akan banyak lagi kerja sama kita di kemudian hari. Makasih samware, don't go anywhere! Good job! "
                <br />
                <div class="ps">
                  <b>- Sam Ima</b>
                  <div class="f12">GM SAMBOOKS</div>
                </div>
              </div>
            </div>
          </vue-glide-slide>
          <vue-glide-slide>
            <div class="grid-two rsv">
              <div class="center">
                <img style="border-radius:50%" src="@/assets/img/logo/lecuz.jpg" alt />
              </div>
              <div>
                " Kita samvis mempercayakan project webpage kita ke Samware karena saya kenal dan mengerti kapabilitas mereka. Overall, murah namun berkualitas. Thanks Samware! "
                <br />
                <div class="ps">
                  <b>- Sam Lecuz</b>
                  <div class="f12">GM SAMVIS</div>
                </div>
              </div>
            </div>
          </vue-glide-slide>
          <vue-glide-slide>
            <div class="grid-two rsv">
              <div class="center">
                <img style="border-radius:50%" src="@/assets/img/logo/anin.jpg" alt />
              </div>
              <div>
                " Mau ngenalin neh samware buat kalian yg lagi butuh ngembangin usaha di website dan aplikasi, kita dari SAMPRO juga baru banget order bikin website biar makin digital. Pelayanan oke, prosesnya bertahap daaaaan hasilnya oke punyaak! Yuk langsong kepoin dia di instagram😉 "
                <br />
                <div class="ps">
                  <b>- Mbak Anin</b>
                  <div class="f12">GM SAMPRO</div>
                </div>
              </div>
            </div>
          </vue-glide-slide>
        </vue-glide>
      </div>
    </section>
    <section
      id="about"
      class="twhite"
      style="background: linear-gradient(to bottom, #ed1073 38%, #ee2a47 100%);"
    >
      <div class="tgrays container" style="padding:60px 0px">
        <div style="font-size:22px">
          <b>Samware.io</b>
        </div>
        <span
          class="tgrays"
        >Samware merupakan partner digital untuk solusi bisnismu, Samware hadir untuk memenuhi kebutuhan optimasi bisnis mulai dari UMKM, Manufactur, Cafe dan lain sebagaianya. Jangan pernah ragu untuk berkonsultasi perihal teknologi pada kami secara gratis tanpa dipungut biaya apapun.</span>
        <div class="grid-three rsv" style="margin-top:50px;">
          <div>
            <b>Informasi</b>
            <ul>
              <li>Pembayaran</li>
              <li style="margin-top:10px">Progam Referal</li>
              <li style="margin-top:10px">Term of Service</li>
            </ul>
          </div>
          <div>
            <b>Produk</b>
            <ul>
              <li>Website</li>
              <li style="margin-top:10px">Apk multi platform</li>
              <li style="margin-top:10px">ERP (Enterprise Resource Planning)</li>
            </ul>
          </div>
          <div>
            <b>Contac US</b>
            <ul>
              <li>
                <i class="fas fa-phone"></i> +62 852-3188-8456
              </li>
              <li style="margin-top:10px">halo@samware.io</li>
              <li style="margin-top:10px">Malang, Indonesia</li>
            </ul>
          </div>
        </div>
        <div class="ps center f12 mts">Powered by samware | 2020</div>
      </div>
    </section>
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import priceWeb from "@/components/priceWeb.vue";
import priceERP from "@/components/priceERP.vue";
import priceAPK from "@/components/priceAPK.vue";
import { Glide, GlideSlide } from "vue-glide-js";

export default {
  components: {
    navbar,
    priceWeb,
    priceERP,
    priceAPK,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  data() {
    return {
      price: 1
    };
  },
  methods: {
    selectPrice(select) {
      this.price = select;
    }
  }
};
</script>

<style>
body {
  background: #f2f2f2 !important;
}
section {
  min-height: 90vh;
}
/* .curved {
  position: relative;
  height: 50vh;
  border-bottom-left-radius: 50% 8%;
  border-bottom-right-radius: 50% 8%;
} */
.triangle {
  position: relative;
  background: #ec0f72;
}

.triangle::before {
  content: "";
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 40px 40px 0 40px;
  border-color: #ec0f72 transparent transparent transparent;
  left: 50%;
  transform: translateX(-50%) translateY(100%);
}
.btnSelect {
  border: none;
  background-color: #ec0f72;
  color: white;
}
</style>
