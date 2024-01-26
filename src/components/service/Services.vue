<template>
  <div
    class="row services-wrapper"
  >
    <!-- Start Single Portfoli -->
    <v-col
      v-for="(icon, i) in servicesContent"
      :key="i"
      lg="4"
      md="4"
      sm="6"
      cols="12"
      class="column"
    >
        <div class="element">
          <div :class="icon.serviceIconClass"> </div>
          <div class="service-description">
            <div class="title">
              {{ icon.title }}
            </div>
            <div class="description">
              {{ icon.desc }}
            </div>
          </div>
        </div>
    </v-col>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        servicesContent: [
          {
            serviceIconClass: "services-icon icon-1",
            title: "Photoshoot",
            desc: "Capture your love story with expert photographers.",
          },
          {
            serviceIconClass: "services-icon icon-2",
            title: "Wedding Makeup",
            desc: "Enhance your natural beauty and radiate confidence with professional wedding makeup.",
          },
          {
            serviceIconClass: "services-icon icon-3",
            title: "Exquisite Catering",
            desc: "Elevate your celebration with gourmet delights.",
          },
          {
            serviceIconClass: "services-icon icon-4",
            title: "Music & Dj",
            desc: "Set the perfect ambiance with our music and DJ services.",
          },
          {
            serviceIconClass: "services-icon icon-5",
            title: "Wedding Cake",
            desc: "Our custom-designed wedding cakes will add a delicious touch to your celebration.",
          },
          {
            serviceIconClass: "services-icon icon-6",
            title: "Honeymoons",
            desc: "Embark on a blissful journey with curated honeymoon experiences.",
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
  .services-wrapper {
    margin-left: 15px;
    margin-right: 15px;
  }
  .services-wrapper .column {
  padding: 20px 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 35px;
    padding-right: 35px;
}
  .element {
    display: flex;
    flex-direction: column;
  }
  .services-icon {
    width: 100% !important;
    height: 55px !important;
    background-size: contain !important;
 }
//  .icon-1 {
//   background: url('../../assets/svg-icons/photoshoot.svg') no-repeat center center;
//  }
//  .icon-2 {
//   background: url('../../assets/svg-icons/makeup.svg') no-repeat center center;
//  }
//  .icon-3 {
//   background: url('../../assets/svg-icons/food.svg') no-repeat center center;
//  }
//  .icon-4 {
//   background: url('../../assets/svg-icons/music.svg') no-repeat center center;
//  }
//  .icon-5 {
//   background: url('../../assets/svg-icons/cake.svg') no-repeat center center;
//  }
//  .icon-6 {
//   background: url('../../assets/svg-icons/honeymoon.svg') no-repeat center center;
//  }
 .service-description {
  color: #989994;
  text-align: center !important;
 }
.service-description .title {
  font-weight: 700 !important;
}
</style>
