<template>
    <!-- Start Single Slider -->
    <div class="slider--8-wrapper">
        <v-row>
          <v-col lg="12">
            <div class="text-center section-title-2">
              <h2>What Clients Say</h2>
            </div>
          </v-col>
        </v-row>
      <VueSlickCarousel
        v-bind="settings"
        class="slider-activation-with-slick rn-slick-dot dot-light mb--0 "
      >
        <div
          class="slider--8 d-flex align-center justify-center bg_image rfanimation-style--1"
          v-for="(slider, i) in sliderContent"
          :key="i"
        >
          <v-container>
            <v-row>
              <v-col cols="12">
                <div class="content text-center">
                    <div class="profile-image">
                        <img :src="slider.image" />
                    </div>
                  <p class="description">
                    {{ slider.review }}
                  </p>
                  <small class="reviewer-name">{{ slider.name }}</small>
                  <!--
                    <div class="slide-btn mt-10">
                    <router-link class="rf-btn" to="/contact"
                      >Contact Us</router-link
                    >
                  </div>
                -->
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
              image: require("../../assets/images/profile/john-emily.jpg"),
              name: "John & Emily",
              review: `“Choosing this agency was the best decision we made for our wedding. Every moment captured was filled with love, and their attention to detail made our day truly magical.”`,
            },
            {
              image: require("../../assets/images/profile/sarah.jpg"),
              name: "Sarah",
              review: `“The makeup artist made me feel like a queen on my big day. I've never felt more beautiful. Thank you for making my dream wedding look come true!”`,
            },
            {
              image: require("../../assets/images/profile/david-lisa.jpg"),
              name: "David & Lisa",
              review: `"The DJ knew exactly how to keep the party alive. The music was spot-on, and the dance floor was never empty. We couldn't have asked for a better night!"`,
            },
            {
              image: require("../../assets/images/profile/alex.jpg"),
              name: "Alex",
              review: `"The honeymoon planning took all the stress away. Every detail was thoughtfully arranged, and we had the most incredible time. Thank you for a dreamy experience!"`,
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
  
  <style lang="scss" scoped>
  .container {
    padding: 0 !important;
  }
    .slick-slide {
      img {
        display: block;
        width: 100%;
      }
    }
    .slider--8 .content h2 {
      font-size: 80px !important;
    }
    .slider--8-wrapper {
        background-color: #767b67 !important;
        padding: 60px 0 !important;
        min-height: 400px;
    }
    .profile-image {
        display: flex;
    flex-direction: row;
    justify-content: center;
    }
    .profile-image img{
        width: 100px;
        height: 100px;
        border-radius: 50%;

        object-fit: cover;
        object-position: center right;
    }
    .slick-dots {
        display: none !important;
    }
   .slider--8 .content {
    display: flex !important;
    flex-direction: column;
    gap: 20px;
   }
   .description {
    font-style: italic !important;
   }
   .reviewer-name {
    font-weight: 500;
    color: #444444;
   }
   .section-title-2 h2 {
    margin-bottom: 40px !important;
    color: white;
   }
  </style>
  