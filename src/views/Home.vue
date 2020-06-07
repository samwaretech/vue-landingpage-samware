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
              <button style="border:none">Hubungi kami</button>
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
          <div style="font-size:23px;padding:20px 0px;">
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
                  <img width="120" src="@/assets/img/2/sectwo-logo-3.png" alt />
                </div>
                <div class="body center" style="font-size:12px">
                  <div class="ps center" style="font-size:14px">
                    <b>Aplikasi multi platform</b>
                  </div>Di era Industri4.0 ini, sebuah website
                  memiliki fungsi sebagai identitas bagi
                  setiap pelaku usaha. Selain itu, website
                  dapat dioptimalkan sebagai alat bantu
                  pemasaran melalui Search Egine
                  Optimization (SEO).
                </div>
              </div>
            </div>
          </div>
          <button class="tred">Selengkapnya</button>
        </div>
      </div>
    </section>
    <section style="background-color:white">
      <div class="container center" style="padding:100px 0px">
        <h2>Harga</h2>Miliki website hanya dengan Rp. 49.000 per bulan
        <div class="ps left">
          <h4>Web Statis</h4>
          <table>
            <tr>
              <th rowspan="2">Fitur</th>
              <th class="center" colspan="3">Nama Paket</th>
            </tr>
            <tr>
              <th>#Mulai Aja Dulu</th>
              <th>#Mari melangkah</th>
              <th>#Kembangkan Bisnismu</th>
            </tr>
            <tr>
              <td>Domain</td>
              <td><span class="tred">*</span>Gratis Domain</td>
              <td><span class="tred">*</span>Gratis Domain</td>
              <td><span class="tred">*</span>Gratis Domain</td>
            </tr>
            <tr>
              <td>SSL</td>
              <td>YA</td>
              <td>YA</td>
              <td>YA</td>
            </tr>
            <tr>
              <td>Email Bisnis</td>
              <td>1 Email bisnis</td>
              <td>2 Email bisnis</td>
              <td>Sesui permintaan</td>
            </tr>
            <tr>
              <td>Halaman</td>
              <td>5 Halaman</td>
              <td>7 Halaman</td>
              <td>Sesui permintaan</td>
            </tr>
            <tr>
              <td>HARGA</td>
              <td>750k/thn</td>
              <td>1150k/thn</td>
              <td><button>Hubungi kami</button></td>
            </tr>
          </table>
        </div>
      </div>
    </section>
    <section class="bred">
      <div class="container twhite" style="padding:120px 0px">
        <div class="ps mbs center"><h1>Tentang Website</h1></div>
        <div class="card tgraym shadows" style="padding:50px 15px">
          <div class="grid-two">
            <div> Website Statis</div>
            <div>Website Statis adalah sebuah website  yang cocok bagi para pemilik cafe,kedai,restaurant,minimarket untuk memasarkan dan mengoptimalkan profil mereka melalui website ringan dan instant.</div>
          </div>
        </div>
        <div class="card tgraym shadows" style="padding:50px 15px">
          <div class="grid-two">
            <div> Website Statis</div>
            <div>Website Statis adalah sebuah website  yang cocok bagi para pemilik cafe,kedai,restaurant,minimarket untuk memasarkan dan mengoptimalkan profil mereka melalui website ringan dan instant.</div>
          </div>
        </div>
        <div class="card tgraym shadows" style="padding:50px 15px">
          <div class="grid-two">
            <div> Website Statis</div>
            <div>Website Statis adalah sebuah website  yang cocok bagi para pemilik cafe,kedai,restaurant,minimarket untuk memasarkan dan mengoptimalkan profil mereka melalui website ringan dan instant.</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";

export default {
  components: {
    navbar
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
</style>
