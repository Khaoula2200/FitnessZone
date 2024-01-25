<template>
  <div>
    <HeaderTwo>
      <img class="wa-logo" slot="logo" src="../../assets/images/logo/white.png" />
    </HeaderTwo>
    <SliderTwo />
    
    <!-- Start About Area -->
    <div class="" style="" id="about-us">
        <About />
    </div>
    <!-- End About Area -->
    

    <!-- Start Services Area -->
    <div class="rn-portfolio-area section-ptb-xl" style="padding-top:120px !important;" id="services">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="text-center section-title-2">
              <h2>Our Services</h2>
            </div>
          </v-col>
        </v-row>
        <Services />
      </v-container>
    </div>
    <!-- End Services Area -->
    
    <!-- Start Portfolio Area -->
    <div class="rn-portfolio-area section-ptb-xl" id="gallery">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="text-center section-title-2">
              <h2>Gallery</h2>
              <!--<p>My work will prove my quality</p>-->
            </div>
          </v-col>
        </v-row>
        <PortfolioTwo />
      </v-container>
    </div>
     <!-- Start reviews Area -->
     <div class="rn-portfolio-area section-ptb-xl" id="testimonials">
      <v-container>
        <Testimonials />
      </v-container>
    </div>
    <!-- End reviews Area -->
    <Footer />
  </div>
</template>

<script>
  import HeaderTwo from "../../components/header/HeaderTwo";
  import SliderTwo from "../../components/slider/SliderTwo";
  import Services from "../../components/service/Services";
  import About from "../../components/about/About";
  import PortfolioTwo from "../../components/portfolio/PortfolioTwo";
  import Testimonials from "../../components/testimonials/Testimonials";
  import Footer from "../../components/footer/Footer";
  export default {
    components: {
      HeaderTwo,
      SliderTwo,
      Services,
      About,
      PortfolioTwo,
      Testimonials,
      Footer,
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
.section-title-2 h2 {
  
  color: #444444 !important;
}
</style>
