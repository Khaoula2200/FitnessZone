<template>
  <div
    class="row classes-wrapper dark-mode-section"
  >
    <div class="title-row">
        <h2>
        Choose Your Plan
        </h2>
    </div>
    <div class="plans-row">
        <v-col
            v-for="(planElement, i) in plansContent"
            :key="i"
            lg="4"
            md="4"
            sm="6"
            cols="12"
            class="column planElement"
            >
                    <div class="plan-header">
                        {{ planElement.planTitle }}
                    </div>
                    <div class="plan-price">
                    {{ planElement.price }}
                    </div>
                    <div class="plan-details">
                    
                    </div>
                    <div class="plan-button">
                        <button class="choose-btn">
                            CHOOSE
                        </button>
                    </div>
        </v-col>
    </div>
    <div class="button-row">
        <a href="/FitZone/">See Plans</a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        plansContent: [
          {
            planTitle: "Group training",
            planPrice: "89$",
            planFeatures: [],
          },
          {
            planTitle: "Private training",
            planPrice: "179$",
            planFeatures: [],
          },
          {
            planTitle: "Athlete training",
            planPrice: "249$",
            planFeatures: [],
          },
          
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
.dark-mode-section{
    background: rgb(19,15,12) !important;
    background: linear-gradient(325deg, rgba(19,15,12,1) 0%, rgba(62,62,62,1) 100%) !important;
  }
 .classes-wrapper {
    padding: 100px;
    display: flex;
    flex-direction: column;
    gap: 40px;
 }
 .title-row {
    text-align: center;
 }
 .title-row h2{
    text-transform: uppercase;
    font-family: sans-serif;
    color: #f7c324 !important;
    margin-bottom: 0 !important;
    position: relative;
 }
  .title-row h2:before {
        content: "";
        display: block;
        width: 1px;
        height: 40px;
        background: white;
        position: absolute;
        left: 50%;
        top: -50px;
        transform: translate(-50%, 0);
      }
 .plans-row {
    display: flex;
    justify-content: center;
    gap: 30px;
    color: white;
    text-align: center;
    font-size: 16px !important;
 }
</style>
