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
                <p class="description">
                  {{ slider.desc }}
                </p>
                <div class="slide-btn mt-10">
                  <router-link class="rf-btn" to="/WedAura/contact"
                    >Contact Us</router-link
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
            src: require("../../assets/images/bg/couple1.jpg"),
            title: "Unforgettable Weddings",
            desc: ` Experience the magic of your special day with our dedicated team. We craft unforgettable moments tailored to your unique love story.`,
          },
          {
            src: require("../../assets/images/bg/couple3.jpg"),
            title: "Capturing Timeless Memories",
            desc: `Our expert photographers specialize in immortalizing the joy and love of your wedding day. Every snapshot tells a story that lasts a lifetime.`,
          },
          {
            src: require("../../assets/images/bg/couple2.jpg"),
            title: "Elegance Redefined",
            desc: `Elevate your wedding with a touch of timeless elegance. From venue decor to floral arrangements, we create an atmosphere that reflects your style.`,
          },
          // {
          //   src: require("../../assets/images/bg/couple1.jpg"),
          //   title: "Development",
          //   desc: `There are many variations of passages of Lorem Ipsum available 
          //         but the majority have suffered alteration.`,
          // },
          // {
          //   src: require("../../assets/images/bg/couple1.jpg"),
          //   title: "Marketing",
          //   desc: ` There are many variations of passages of Lorem Ipsum available
          //         but the majority have suffered alteration.`,
          // },
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
  
</style>
