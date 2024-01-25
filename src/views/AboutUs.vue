<template>
  <div>
    <HeaderTwo>
      <img class="wa-logo" slot="logo" src="../assets/images/logo/white.png" />
    </HeaderTwo>
    <!-- End Header -->

    <!-- Start Bradcaump area -->
    <div class="bradcaump_area">
      <div class="parallaxContainer paralaxbg--3" data-black-overlay="6">
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="text-center bradcaump_inner">
                <h2 class="bradcaump-title">
                  WedAura
                </h2>
                <p style="font-style: italic;">Where Every Detail Matters</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <!-- End Bradcaump area -->
    <div class="about_page-main">
      <About />
      <!-- End About -->
    </div>

    <Footer />
    <!-- End Footer -->
  </div>
</template>

<script>
  import HeaderTwo from "../components/header/HeaderTwo";
  import About from "../components/about/About";
  import Footer from "../components/footer/Footer";
  export default {
    components: {
      HeaderTwo,
      About,
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
  .about_page-main {
    .content h2 {
      font-size: 36px;
      line-height: 1.5;
      margin-bottom: 28px;

      @media only screen and (max-width: 767px) {
        font-size: 26px;
      }
    }
    // padding-bottom: 70px ;
  }
  .parallaxContainer {
    background : initial !important;
    background-image: url(../assets/images/gallery/couple-about-1.jpg) !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center !important;
    padding: 250px 0;
    // background-color: rgb(250, 228, 216);
  }
</style>
