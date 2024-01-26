<template>
  <!-- Start Single Slider -->
  <div>
    <VueSlickCarousel
      v-bind="settings"
      class="slider-activation-with-slick rn-slick-dot dot-light mb--0"
    >
      <div
        class="slider--8 fullscreen d-flex align-center justify-center fullscreen bg_image rfanimation-style--1"
        v-for="(slider, i) in sliderContent"
        :key="i"
        :style="{ backgroundImage: 'url(' + slider.src + ')' }"
      >
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="content text-center">
                <h2 class="heading-title">{{ slider.title }}</h2>
               <!--
               <p class="description">
                  {{ slider.desc }}
                </p>
              -->
                <div class="slide-btn mt-10">
                  <router-link class="join-us" to="/FitZone/contact"
                    >Join Us Today</router-link
                  >
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <!-- End Single Slide  -->
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from "vue-slick-carousel";

  export default {
    components: { VueSlickCarousel },
    data() {
      return {
        sliderContent: [
          {
            src: require("../../assets/images/bg/man-woman-training.jpg"),
            // src: require("../../assets/images/bg/woman-back-flex.jpg"),
            title: "Discover Your Strength.",
            desc: `Join FitZone Today!`,
          },
        ],
        settings: {
          fade: true,
          dots: true,
          arrows: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          margin: 20,
        },
      };
    },
  };
</script>

<style lang="scss">
  .slick-slide {
    img {
      display: block;
      width: 100%;
    }
  }
  .slider--8 .content h2 {
    font-size: 80px !important;
  }
  @media only screen and (max-width: 765px){    
    .slider--8 .content h2 {
        font-size: 55px !important;
    }
  }
  @media only screen and (max-width: 420px){    
    .slider--8 .content h2 {
        font-size: 45px !important;
    }
  }
  .heading-title {
    font-family: sans-serif;
    text-transform: uppercase;
    // color: #f2ad09 !important;
    width: 100%;
  }
  .join-us {
  font-size: 16px !important;
  font-weight: 200 !important;
  letter-spacing: 1px !important;
  padding: 13px 20px 13px !important;
  outline: 0 !important;
  border: 1px solid #fff !important;
  cursor: pointer !important;
  position: relative !important;
  background-color: rgba(0, 0, 0, 0) !important;
  user-select: none !important;
  -webkit-user-select: none !important;
  touch-action: manipulation !important;
  color: #333 !important;
  font-weight: 700 !important;
  border-radius: initial !important;
  text-transform: uppercase;
}

.join-us:after {
  content: "";
  // background-color: #ffe54c;
  background-color:#f7c324;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
}

.join-us:hover:after {
  top: 0px;
  left: 0px;
}

@media (min-width: 768px) {
  .join-us {
    padding: 13px 50px 13px;
  }
}
</style>

