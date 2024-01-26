<template>
  <div
    class="row statistics-wrapper"
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
          <div class="statistic-description">
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
            serviceIconClass: "statistics-icon icon-1",
            title: "1500",
            desc: "Working Days",
          },
          {
            serviceIconClass: "statistics-icon icon-2",
            title: "+4000",
            desc: "Happy Clients",
          },
          {
            serviceIconClass: "statistics-icon icon-3",
            title: "+1000",
            desc: "Successful Stories",
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
  .statistics-wrapper {
        padding: 50px 0;
        min-height: 400px;
        background-image: url(../../assets/images/bg/young-woman-boxer-training-gym.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: relative;
  }
  .statistics-wrapper .column {
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 35px;
    padding-right: 35px;
    height: 400px;
}
  .element {
    display: flex;
    flex-direction: column;
  }
  .statistics-icon {
    width: 100% !important;
    height: 55px !important;
    background-size: contain !important;
 }
 .icon-1 {
  background: url('../../assets/svg-icons/calendar.svg') no-repeat center center;
 }
 .icon-2 {
  background: url('../../assets/svg-icons/happy-clients.svg') no-repeat center center;
 }
 .icon-3 {
  background: url('../../assets/svg-icons/medal.svg') no-repeat center center;
 }
 .icon-4 {
  background: url('../../assets/svg-icons/people.svg') no-repeat center center;
 }
//  .icon-5 {
//   background: url('../../assets/svg-icons/cake.svg') no-repeat center center;
//  }
//  .icon-6 {
//   background: url('../../assets/svg-icons/honeymoon.svg') no-repeat center center;
//  }
 .statistic-description {
    color: white;
  text-align: center !important;
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 15px !important;
 }
.statistic-description .title {
  font-weight: 700 !important;
  font-size: 25px !important;
}
</style>
