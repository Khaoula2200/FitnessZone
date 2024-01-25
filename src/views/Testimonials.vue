<template>
  <div>
    <HeaderFive>
      <img class="wa-logo" slot="logo" src="../assets/images/logo/white.png" />
    </HeaderFive>
    <!-- End Header -->
    <div class="rn-portfolio-area section-ptb-xl testimonials-separate" id="testimonials">
      <v-container>
        <Testimonials />
      </v-container>
    </div>

    <Footer />
    <!-- End Footer -->
  </div>
</template>

<script>
  import HeaderFive from "../components/header/HeaderFive";
  import Testimonials from "../components/testimonials/Testimonials";
  import Footer from "../components/footer/Footer";
  export default {
    components: {
        HeaderFive,
        Testimonials,
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
.rn-portfolio-area .container {
    max-width: 100%;
    padding: 0;
}
.testimonials-separate {
  padding-top: 60px;
  padding-bottom: 100px;
}
</style>
