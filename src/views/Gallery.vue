<template>
  <div>
    <HeaderFive>
      <img class="wa-logo" slot="logo" src="../assets/images/logo/white.png" />
    </HeaderFive>
    <!-- End Header -->

<!-- Start Portfolio Area -->
<div class="rn-portfolio-area section-ptb-xl gallery-separate" id="gallery">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="text-center section-title-2">
              <h2>Gallery</h2>
              <p>Each image tells a unique story, capturing the authenticity and joy of our past clients' special days. Dive into our gallery and envision the possibilities for your own unforgettable wedding experience.</p>
            </div>
          </v-col>
        </v-row>
        <PortfolioTwo />
      </v-container>
    </div>

    <Footer />
    <!-- End Footer -->
  </div>
</template>

<script>
  import HeaderFive from "../components/header/HeaderFive";
  import PortfolioTwo from "../components/portfolio/PortfolioTwo";
  import Footer from "../components/footer/Footer";
  export default {
    components: {
        HeaderFive,
        PortfolioTwo,
        Footer,
    },
    data() {
      return {};
    },
  };
</script>

<style lang="scss">
.wa-logo {
  width: 75px !important;
}

.section-title-2 {
  padding: 20px 35px 40px 35px;
}

.gallery-separate {
  padding-top: 60px;
  padding-bottom: 100px;
}
</style>
