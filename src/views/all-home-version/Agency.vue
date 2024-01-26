<template>
  <div>
    <HeaderTwo>
      <img class="wa-logo" slot="logo" src="../../assets/images/logo/white.png" />
    </HeaderTwo>
    <SliderTwo />
    
    <div class="" style="" id="about-us">
        <About />
    </div>
    <div class="" style="" id="statistics">
        <Statistics />
    </div>
     <div class="" style="" id="classes">
        <Classes />
    </div>
    
    
     <div class="rn-portfolio-area" id="testimonials">
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
  // import Services from "../../components/service/Services";
  import About from "../../components/about/About";
  import Statistics from "../../components/statistics/Statistics";
  import Classes from "../../components/classes/Classes";
  // import PortfolioTwo from "../../components/portfolio/PortfolioTwo";
  import Testimonials from "../../components/testimonials/Testimonials";
  import Footer from "../../components/footer/Footer";
  export default {
    components: {
      HeaderTwo,
      SliderTwo,
      // Services,
      About,
      Statistics,
      Classes,
      // PortfolioTwo,
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
