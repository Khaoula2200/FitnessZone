<template>
  <div
    class="row portfolio-wrapper row--55 rn-custom-portfolio-wrapper rn-hil-portfolio"
  >
    <!-- Start Single Portfoli -->
    <v-col
      v-for="(content, i) in portfolioContent"
      :key="i"
      lg="4"
      md="4"
      sm="6"
      cols="12"
    >
      <div class="portfolio-wrap">
        <div class="portfolio" :class="content.imgClass">
          <div class="content">
            <h4 class="title">{{ content.title }}</h4>
            <span class="desc">{{ content.desc }}</span>
          </div>
          <div class="bgDescription"></div>
        </div>
      </div>
    </v-col>
    <!-- End Single Portfoli -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        portfolioContent: [
          {
            imgClass: "project-bg--1",
            title: "Timeless Connection",
            desc: "frozen in time",
          },
          {
            imgClass: "project-bg--2",
            title: "Celebration in Bloom",
            desc: "a sincere moment",
          },
          {
            imgClass: "project-bg--3",
            title: "Serene Celebration",
            desc: "surrounded by love",
          },
          {
            imgClass: "project-bg--4",
            title: "Radiant Togetherness",
            desc: "beautiful expression of love",
          },
          {
            imgClass: "project-bg--5",
            title: "Vows Unveiled",
            desc: "joyful Moments",
          },
          {
            imgClass: "project-bg--6",
            title: "Spontaneous Joy",
            desc: "captured in an unscripted moment",
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  @media only screen and (max-width: 575px){
    .rn-hil-portfolio > div {
        margin-top: 0 !important;
    }
  }

</style>
