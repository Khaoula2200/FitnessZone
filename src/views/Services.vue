<template>
  <div>
    <HeaderFive>
      <img class="wa-logo" slot="logo" src="../assets/images/logo/white.png" />
    </HeaderFive>
    <!-- End Header -->

    <div class="rn-portfolio-area section-ptb-xl services-separate" id="services">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="text-center section-title-2">
              <h2>Our Offerings</h2>
              <p>Explore our range of specialized services, meticulously designed to elevate your celebration. Reach out to us and  experience wedding planning with a touch of sophistication and efficiency.</p>
            </div>
          </v-col>
        </v-row>
        <Services />
      </v-container>
    </div>

    <Footer />
    <!-- End Footer -->
  </div>
</template>

<script>
  // import HeaderTwo from "../components/header/HeaderTwo";
  import HeaderFive from "../components/header/HeaderFive";
  import Services from "../components/service/Services";
  import Footer from "../components/footer/Footer";
  export default {
    components: {
      HeaderFive,
        Services,
        Footer
    },
    data() {
      return {};
    },
  };
</script>

<style lang="scss" scoped>
.wa-logo {
  width: 75px !important;
}
.section-title-2 {
  padding: 20px 35px 40px 35px;
}

.services-separate {
  padding-top: 60px;
  padding-bottom: 100px;
}
</style>
